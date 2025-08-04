import React, { useState, useEffect } from 'react';
import VersionSelector from '@site/src/components/VersionSelector';
import styles from './styles.module.css';

const DownloadModal = ({ isOpen, onClose }) => {
  const [activePlatform, setActivePlatform] = useState('Velocity');

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const platforms = [
    { id: 'Velocity', name: '🚀 Velocity', description: 'Для Velocity серверов' },
    { id: 'Bukkit', name: '🏗️ Bukkit', description: 'Для Bukkit/Spigot серверов' },
    { id: 'DBMDonateCase', name: '💰 DBMDonateCase', description: 'Аддон для донат-кейсов' },
    { id: 'DBMGuiManager', name: '🎛️ DBMGuiManager', description: 'Аддон для GUI менеджера' },
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>📥 Загрузки DiscordBM & Аддоны</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className={styles.content}>
          <div className={styles.platformTabs}>
            {platforms.map((platform) => (
              <button
                key={platform.id}
                className={`${styles.tab} ${activePlatform === platform.id ? styles.active : ''}`}
                onClick={() => setActivePlatform(platform.id)}
              >
                <span className={styles.tabName}>{platform.name}</span>
                <span className={styles.tabDescription}>{platform.description}</span>
              </button>
            ))}
          </div>
          
          <div className={styles.downloadSection}>
            <VersionSelector platform={activePlatform} />
          </div>
        </div>
        
        <div className={styles.footer}>
          <a 
            href="https://github.com/1wairesd/DiscordBM/releases"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            📋 Все версии на GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal; 