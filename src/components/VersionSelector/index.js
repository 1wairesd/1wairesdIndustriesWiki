import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const VersionSelector = ({ repoOwner = '1wairesd', repoName = 'DiscordBM', platform = 'Velocity' }) => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVersion, setSelectedVersion] = useState('latest');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`);
        
        if (!response.ok) {
          throw new Error('Не удалось загрузить версии');
        }
        
        const releases = await response.json();
        
        // Фильтруем релизы, которые содержат файлы для нужной платформы
        const filteredReleases = releases.filter(release => 
          release.assets.some(asset => 
            asset.name.toLowerCase().includes(platform.toLowerCase())
          )
        );
        
        setVersions(filteredReleases);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, [repoOwner, repoName, platform]);

  const getDownloadUrl = (version) => {
    if (version === 'latest') {
      return `https://github.com/${repoOwner}/${repoName}/releases/latest/download/DiscordBM-${platform}.jar`;
    }
    
    const release = versions.find(v => v.tag_name === version);
    if (!release) return null;
    
    const asset = release.assets.find(asset => 
      asset.name.toLowerCase().includes(platform.toLowerCase())
    );
    
    return asset ? asset.browser_download_url : null;
  };

  const handleDownload = () => {
    const url = getDownloadUrl(selectedVersion);
    if (url) {
      window.open(url, '_blank');
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <span>Загрузка версий...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <span>⚠️ {error}</span>
          <button 
            onClick={() => window.open(`https://github.com/${repoOwner}/${repoName}/releases`, '_blank')}
            className={styles.fallbackButton}
          >
            Перейти на GitHub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <select 
          value={selectedVersion} 
          onChange={(e) => setSelectedVersion(e.target.value)}
          className={styles.select}
        >
          <option value="latest">🚀 Последняя версия</option>
          {versions.map((release) => (
            <option key={release.id} value={release.tag_name}>
              📦 {release.tag_name} - {new Date(release.published_at).toLocaleDateString('ru-RU')}
            </option>
          ))}
        </select>
        
        <button 
          onClick={handleDownload}
          className={styles.downloadButton}
          disabled={!getDownloadUrl(selectedVersion)}
        >
          📥 Скачать
        </button>
      </div>
      
      <div className={styles.links}>
        <a 
          href={`https://github.com/${repoOwner}/${repoName}/releases`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          📋 Все версии на GitHub
        </a>
      </div>
    </div>
  );
};

export default VersionSelector; 