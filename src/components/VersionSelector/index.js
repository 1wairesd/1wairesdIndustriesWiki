import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const VersionSelector = ({ repoOwner = '1wairesd', repoName = 'DiscordBM', platform = 'Velocity' }) => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVersion, setSelectedVersion] = useState('');
  const [error, setError] = useState(null);
  const [latestVersion, setLatestVersion] = useState(null);
  const [latestAssetName, setLatestAssetName] = useState(null);

  const getPlatformDisplayName = (platform) => {
    const platformNames = {
      'Velocity': '🚀 Velocity',
      'Bukkit': '🏗️ Bukkit',
      'DBMDonateCase': '💰 DBMDonateCase',
      'DBMGuiManager': '🎛️ DBMGuiManager'
    };
    return platformNames[platform] || platform;
  };

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`);
        
        if (!response.ok) {
          throw new Error('Не удалось загрузить версии');
        }
        
        const releases = await response.json();
        
                            const filteredReleases = releases.filter(release => 
                      release.assets.some(asset => {
                        const assetName = asset.name.toLowerCase();
                        const platformLower = platform.toLowerCase();
                        
                        // Специальная обработка для аддонов
                        if (platform === 'DBMDonateCase') {
                          return assetName.includes('dbmdonatecase') || assetName.includes('donatecase');
                        }
                        if (platform === 'DBMGuiManager') {
                          return assetName.includes('dbmguimanager') || assetName.includes('guimanager');
                        }
                        
                        return assetName.includes(platformLower);
                      })
                    );
        
        setVersions(filteredReleases);
        

        if (filteredReleases.length > 0) {
          setSelectedVersion(filteredReleases[0].tag_name);
          const latestRelease = filteredReleases[0];
          setLatestVersion(latestRelease.tag_name);
          
          const asset = latestRelease.assets.find(asset => 
            asset.name.toLowerCase().includes(platform.toLowerCase())
          );
          if (asset) {
            setLatestAssetName(asset.name);
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, [repoOwner, repoName, platform]);

  const getDownloadUrl = (version) => {
    const release = versions.find(v => v.tag_name === version);
    if (!release) return null;
    
    const asset = release.assets.find(asset => {
      const assetName = asset.name.toLowerCase();
      const platformLower = platform.toLowerCase();
      
      // Специальная обработка для аддонов
      if (platform === 'DBMDonateCase') {
        return assetName.includes('dbmdonatecase') || assetName.includes('donatecase');
      }
      if (platform === 'DBMGuiManager') {
        return assetName.includes('dbmguimanager') || assetName.includes('guimanager');
      }
      
      return assetName.includes(platformLower);
    });
    
    return asset ? asset.browser_download_url : null;
  };

  const getDownloadCount = (version) => {
    const release = versions.find(v => v.tag_name === version);
    if (!release) return 0;
    
    const asset = release.assets.find(asset => {
      const assetName = asset.name.toLowerCase();
      const platformLower = platform.toLowerCase();
      
      // Специальная обработка для аддонов
      if (platform === 'DBMDonateCase') {
        return assetName.includes('dbmdonatecase') || assetName.includes('donatecase');
      }
      if (platform === 'DBMGuiManager') {
        return assetName.includes('dbmguimanager') || assetName.includes('guimanager');
      }
      
      return assetName.includes(platformLower);
    });
    
    return asset ? asset.download_count : 0;
  };

  const formatDownloadCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const extractVersionFromFileName = (fileName) => {
    // Ищем версию в имени файла (например, DiscordBM-Velocity-1.0.jar -> 1.0)
    const versionMatch = fileName.match(/-(\d+\.\d+(?:\.\d+)?)/);
    return versionMatch ? versionMatch[1] : null;
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
        <div className={styles.platformHeader}>
          <h3>{getPlatformDisplayName(platform)}</h3>
        </div>
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
        <div className={styles.platformHeader}>
          <h3>{getPlatformDisplayName(platform)}</h3>
        </div>
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

  if (versions.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.platformHeader}>
          <h3>{getPlatformDisplayName(platform)}</h3>
        </div>
        <div className={styles.noVersions}>
          <span>📦 Версий для {platform} пока нет</span>
          <a 
            href={`https://github.com/${repoOwner}/${repoName}/releases`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            📋 Проверить на GitHub
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.platformHeader}>
        <h3>{getPlatformDisplayName(platform)}</h3>
      </div>
      <div className={styles.selector}>
        <select 
          value={selectedVersion} 
          onChange={(e) => setSelectedVersion(e.target.value)}
          className={styles.select}
        >
                                {versions.map((release) => {
                        const asset = release.assets.find(asset => {
                          const assetName = asset.name.toLowerCase();
                          const platformLower = platform.toLowerCase();
                          
                          // Специальная обработка для аддонов
                          if (platform === 'DBMDonateCase') {
                            return assetName.includes('dbmdonatecase') || assetName.includes('donatecase');
                          }
                          if (platform === 'DBMGuiManager') {
                            return assetName.includes('dbmguimanager') || assetName.includes('guimanager');
                          }
                          
                          return assetName.includes(platformLower);
                        });
                        const downloadCount = asset ? asset.download_count : 0;
                        const fileVersion = extractVersionFromFileName(asset ? asset.name : '');
                        return (
                          <option key={release.id} value={release.tag_name}>
                            📦 {release.tag_name} - {new Date(release.published_at).toLocaleDateString('ru-RU')} {fileVersion ? `(v${fileVersion})` : ''} ({formatDownloadCount(downloadCount)})
                          </option>
                        );
                      })}
        </select>
        
        <button 
          onClick={handleDownload}
          className={styles.downloadButton}
          disabled={!getDownloadUrl(selectedVersion)}
        >
          📥 Скачать
        </button>
      </div>
      
      <div className={styles.stats}>
        <span className={styles.downloadCount}>
          📊 {formatDownloadCount(getDownloadCount(selectedVersion))} скачиваний
        </span>
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