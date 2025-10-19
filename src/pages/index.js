import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Official wiki and documentation for 1wairesd Industries projects.">
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={styles.primaryBtn} to="/docs/main">
              📘 View Documentation
            </Link>
            <Link className={styles.secondaryBtn} to="https://github.com/1wairesd">
              💻 Visit GitHub
            </Link>
          </div>
        </section>

        <section className={styles.about}>
          <h2>About</h2>
          <p>
            1wairesd Industries is a Ukrainian development studio creating Minecraft plugins,
            tools, and other creative projects. Explore documentation, concepts, and internal tools.
          </p>
        </section>
      </main>
    </Layout>
  );
}
