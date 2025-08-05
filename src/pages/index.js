import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll('.floatingShape');
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      shapes.forEach((shape, index) => {
        const rect = shape.getBoundingClientRect();
        const shapeCenterX = rect.left + rect.width / 2;
        const shapeCenterY = rect.top + rect.height / 2;
        
        const deltaX = (clientX - centerX) * 0.01;
        const deltaY = (clientY - centerY) * 0.01;
        
        const distance = Math.sqrt(
          Math.pow(clientX - shapeCenterX, 2) + 
          Math.pow(clientY - shapeCenterY, 2)
        );
        
        if (distance < 200) {
          const intensity = (200 - distance) / 200;
          shape.style.transform += ` translate(${deltaX * intensity}px, ${deltaY * intensity}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {}
      <div className={styles.animatedBackground}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Привет, я Георгий
          </Heading>
          <p className={styles.heroSubtitle}>
            Разработчик плагинов и интеграций для Minecraft
          </p>
          <div className={styles.heroDescription}>
            Создаю масштабные системы, которые решают реальные проблемы и делают ваш сервер уникальным
          </div>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="/docs/1wairesd-info-main">
              Документация
            </Link>
            <Link className={styles.secondaryButton} to="https://github.com/1wairesd">
              GitHub
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
            <p>Open-source фреймворк для создания масштабируемых Discord-ботов с архитектурой "сервер ↔ клиент". Разработан для высокой расширяемости и удобной интеграции с современными Discord-интерфейсами.</p>
            <div className={styles.projectButtons}>
              <Link to="/docs/DiscordBM/dscordbm-main" className={styles.projectLink}>
                Узнать больше →
              </Link>
              <Link to="https://github.com/1wairesd/DiscordBM" className={styles.githubLink}>
                GitHub
              </Link>
            </div>
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
