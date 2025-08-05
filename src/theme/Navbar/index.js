import React, { useState } from 'react';
import Navbar from '@theme-original/Navbar';
import DownloadModal from '@site/src/components/DownloadModal';
import styles from './styles.module.css';

export default function NavbarWrapper(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar {...props} />
      <div className={styles.downloadButtonContainer}>
        <button
          className={styles.downloadButton}
          onClick={() => setIsModalOpen(true)}
          type="button"
        >
          Загрузщик
        </button>
        <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
} 