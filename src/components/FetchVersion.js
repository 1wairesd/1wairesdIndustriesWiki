import { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

function getCacheKey(groupId, projectId) {
  return `version_${groupId}_${projectId}`;
}

function getCachedVersion(groupId, projectId) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(getCacheKey(groupId, projectId));
  }
  return null;
}

function setCachedVersion(groupId, projectId, version) {
  if (typeof window !== "undefined") {
    localStorage.setItem(getCacheKey(groupId, projectId), version);
  }
}

/**
 * Fetches the latest JitPack build version and renders a ready-to-copy
 * dependency snippet (Maven / Gradle Groovy / Gradle Kotlin).
 *
 * Example:
 *   <FetchVersion type="gradle-groovy" classifier="api" />
 */
export default function FetchVersion({
  type = "maven", // 'maven' | 'gradle-groovy' | 'gradle-kts'
  groupId = "com.github.1wairesd",
  projectId = "CommandGuard",
  artifactId = "CommandGuard",
  classifier = "", // e.g. "api"
  implementation = false, // Gradle: implementation/compileOnly, Maven: compile/provided
}) {
  const [version, setVersion] = useState(
    () => getCachedVersion(groupId, projectId) || "loading"
  );

  useEffect(() => {
    if (version !== "loading") return;

    async function fetchVersion() {
      try {
        const response = await fetch(
          `https://jitpack.io/api/builds/${groupId}/${projectId}/latest`
        );
        const data = await response.json();
        const fetchedVersion = data.version.trim();
        setVersion(fetchedVersion);
        setCachedVersion(groupId, projectId, fetchedVersion);
      } catch (error) {
        console.error(error);
        setVersion("VERSION");
      }
    }

    fetchVersion();
  }, [groupId, projectId, version]);

  const dependencyType = implementation ? "implementation" : "compileOnly";
  const mavenScope = implementation ? "compile" : "provided";

  const gradleCoords = classifier
    ? `${groupId}:${artifactId}:${version}:${classifier}`
    : `${groupId}:${artifactId}:${version}`;

  let dependency;
  let language;

  switch (type) {
    case "gradle-groovy":
      dependency = `dependencies {
    ${dependencyType} '${gradleCoords}'
}`;
      language = "groovy";
      break;

    case "gradle-kts":
      dependency = `dependencies {
    ${dependencyType}("${gradleCoords}")
}`;
      language = "kotlin";
      break;

    case "maven":
    default:
      dependency = `<dependency>
    <groupId>${groupId}</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${version}</version>${
        classifier ? `\n    <classifier>${classifier}</classifier>` : ""
      }
    <scope>${mavenScope}</scope>
</dependency>`;
      language = "xml";
  }

  return <CodeBlock language={language}>{dependency}</CodeBlock>;
}
