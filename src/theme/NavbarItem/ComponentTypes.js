import React, { useState } from 'react';
import DownloadModal from '../../components/DownloadModal';
import styles from './styles.module.css';

export default function CustomDownloadNavbarItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={styles.downloadButton}
        onClick={() => setIsModalOpen(true)}
        type="button"
      >
        📥 Загрузки
      </button>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 