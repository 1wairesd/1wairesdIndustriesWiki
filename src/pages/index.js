import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function ProjectCard({ name, description, href, badge, color, cta }) {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardBadge} style={{ background: color + '18', color }}>
        {badge}
      </div>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <span className={styles.cardArrow}>{cta} →</span>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const openDocs = translate({
    id: 'home.card.openDocs',
    message: 'Відкрити документацію',
  });

  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'home.description',
        message: 'Документація проєктів 1wairesd Industries.',
      })}
    >
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBadge}>
            <Translate id="home.badge">Документація</Translate>
          </div>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>
            <Translate id="home.tagline">
              Офіційна документація проєктів 1wairesd Industries. Оберіть проєкт нижче, щоб почати.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primaryBtn} to="/docs/CommandGuard/commandguard-intro">
              <Translate id="home.getStarted">Почати роботу</Translate>
            </Link>
            <Link className={styles.secondaryBtn} to="https://github.com/1wairesd">
              GitHub
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.projects}>
          <h2 className={styles.sectionTitle}>
            <Translate id="home.projects">Проєкти</Translate>
          </h2>
          <div className={styles.grid}>
            <ProjectCard
              name="CommandGuard"
              badge="Minecraft Plugin"
              color="#5b6af0"
              href="/docs/CommandGuard/commandguard-intro"
              cta={openDocs}
              description={
                <Translate id="home.card.commandguard">
                  Блокування команд і керування tab-complete для Spigot та Velocity. Гравці бачать лише дозволені команди.
                </Translate>
              }
            />
          </div>
        </section>

      </main>
    </Layout>
  );
}
