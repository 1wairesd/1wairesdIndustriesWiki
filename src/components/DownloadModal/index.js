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
    { id: 'Velocity', name: 'DiscordBM-Velocity' },
    { id: 'Bukkit', name: 'DiscordBM-Bukkit' },
    { id: 'DBMDonateCase', name: 'DBMDonateCase' },
    { id: 'DBMGuiManager', name: 'DBMGuiManager' },
  ];

  const handlePlatformChange = (platformId) => {
    setActivePlatform(platformId);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Загрузки плагинов</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className={styles.content}>
          <div className={styles.platformSelector}>
            <label htmlFor="platform-select" className={styles.platformLabel}>
              Выберите плагин:
            </label>
            <select
              id="platform-select"
              value={activePlatform}
              onChange={(e) => handlePlatformChange(e.target.value)}
              className={styles.platformSelect}
            >
              {platforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className={styles.downloadSection}>
            <VersionSelector platform={activePlatform} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal; 