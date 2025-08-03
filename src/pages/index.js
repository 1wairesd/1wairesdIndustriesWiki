import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* Анимированные узоры на заднем плане */}
      <div className={styles.animatedBackground}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            👋 Привет, я Георгий
          </Heading>
          <p className={styles.heroSubtitle}>
            Разработчик плагинов и интеграций для Minecraft
          </p>
          <div className={styles.heroDescription}>
            Создаю масштабные системы, которые решают реальные проблемы и делают ваш сервер уникальным
          </div>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="/docs/1wairesd-info-main">
              📚 Документация
            </Link>
            <Link className={styles.secondaryButton} to="https://github.com/1wairesd">
              🐙 GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectSection() {
  return (
    <section className={styles.projectSection}>
      <div className="container">
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>🔗</div>
            <h3>DiscordBM</h3>
            <p>Инновационный плагин для интеграции Discord с Minecraft серверами</p>
            <Link to="/docs/DiscordBM/DiscordBMV/Configs/settings" className={styles.projectLink}>
              Узнать больше →
            </Link>
          </div>
          
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>⚙️</div>
            <h3>Конфигурации</h3>
            <p>Примеры настроек и лучшие практики для ваших проектов</p>
            <Link to="/docs/DiscordBM/DiscordBMV/Configs/settings" className={styles.projectLink}>
              Изучить →
            </Link>
          </div>
          
          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>💡</div>
            <h3>Советы и трюки</h3>
            <p>Полезные знания для разработчиков и администраторов</p>
            <Link to="/docs/1wairesd-info-main" className={styles.projectLink}>
              Открыть →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1+</div>
            <div className={styles.statLabel}>Года опыта</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5+</div>
            <div className={styles.statLabel}>Языков программирования</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1</div>
            <div className={styles.statLabel}>Крупный проект</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>Идей в разработке</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="1wairesdIndustries Wiki"
      description="Документация проектов и плагинов для Minecraft">
      <HomepageHeader />
      <main>
        <ProjectSection />
        <StatsSection />
      </main>
    </Layout>
  );
}
