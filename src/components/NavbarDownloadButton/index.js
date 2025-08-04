import React, { useState } from 'react';
import DownloadModal from '@site/src/components/DownloadModal';
import styles from './styles.module.css';

const NavbarDownloadButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className={styles.downloadButton}
        onClick={() => setIsModalOpen(true)}
        title="Скачать DiscordBM"
      >
        📥 Скачать
      </button>
      
      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default NavbarDownloadButton; 