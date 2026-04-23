import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const projects = [
  {
    name: 'CommandGuard',
    description: 'Cross-platform command blocker and tab-complete manager for Spigot, Velocity and Waterfall.',
    href: '/docs/CommandGuard/commandguard-intro',
    badge: 'Minecraft Plugin',
    color: '#5b6af0',
  },
  {
    name: 'DiscordEngine',
    description: 'Powerful toolkit for building Discord bots and integrations with a clean developer API.',
    href: '/docs/DiscordEngine/discordengine-main',
    badge: 'Discord',
    color: '#5865f2',
  },
  {
    name: 'ResdAI',
    description: 'AI-powered tools and utilities built for the 1wairesd Industries ecosystem.',
    href: '/docs/ResdAI/resdai-main',
    badge: 'AI',
    color: '#10b981',
  },
];

function ProjectCard({ name, description, href, badge, color }) {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardBadge} style={{ background: color + '18', color }}>
        {badge}
      </div>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <span className={styles.cardArrow}>Read docs →</span>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Official documentation for 1wairesd Industries projects.">
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Documentation</div>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={styles.primaryBtn} to="/docs/main">
              Get Started
            </Link>
            <Link className={styles.secondaryBtn} to="https://github.com/1wairesd">
              GitHub
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.projects}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.grid}>
            {projects.map(p => <ProjectCard key={p.name} {...p} />)}
          </div>
        </section>

      </main>
    </Layout>
  );
}
