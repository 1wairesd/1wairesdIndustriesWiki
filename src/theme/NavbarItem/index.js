import { ComponentTypes } from '@docusaurus/theme-common';
import CustomDownloadNavbarItem from './ComponentTypes';

export default function (context, options) {
  return {
    name: 'docusaurus-theme-classic-navbar-item',
    getThemePath() {
      return 'theme/NavbarItem';
    },
    getTypeDeclarations() {
      return [
        {
          type: 'custom-download',
          component: CustomDownloadNavbarItem,
        },
      ];
    },
  };
} 