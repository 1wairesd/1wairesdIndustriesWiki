import React from 'react';
import DocSidebarItemLink from '@theme/DocSidebarItem/Link';
import DocSidebarItemCategory from '@theme/DocSidebarItem/Category';
import DocSidebarItemHtml from '@theme/DocSidebarItem/Html';

// Import all icons that might be used
import {FaHome, FaGift, FaFolder, FaCode, FaBook, FaCogs, FaInfoCircle, FaQuestionCircle} from 'react-icons/fa';

const ICONS = {
  FaHome,
  FaGift,
  FaFolder,
  FaCode,
  FaBook,
  FaCogs,
  FaInfoCircle,
  FaQuestionCircle,
};

function renderLabelWithIcon(item) {
  const iconName = item.customProps && item.customProps.icon;
  if (!iconName) return item;

  const Icon = ICONS[iconName];
  if (!Icon) {
    console.warn(`Icon ${iconName} not found`);
    return item;
  }

  return {
    ...item,
    label: (
      <>
        <Icon style={{marginRight: '8px', verticalAlign: 'middle', fontSize: '0.9em'}} />
        <span>{item.label}</span>
      </>
    ),
  };
}

export default function DocSidebarItem({item, ...props}) {
  switch (item.type) {
    case 'link':
      return <DocSidebarItemLink item={renderLabelWithIcon(item)} {...props} />;
    case 'category':
      return <DocSidebarItemCategory item={renderLabelWithIcon(item)} {...props} />;
    case 'html':
      return <DocSidebarItemHtml item={item} {...props} />;
    default:
      throw new Error(`Unknown sidebar item type: ${item.type}`);
  }
}
