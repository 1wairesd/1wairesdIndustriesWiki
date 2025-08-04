import React from 'react';
import Navbar from '@theme-original/Navbar';
import NavbarDownloadButton from '@site/src/components/NavbarDownloadButton';

export default function NavbarWrapper(props) {
  return (
    <>
      <Navbar {...props} />
      <div style={{ 
        position: 'fixed', 
        top: '1rem', 
        right: '1rem', 
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center'
      }}>
        <NavbarDownloadButton />
      </div>
    </>
  );
} 