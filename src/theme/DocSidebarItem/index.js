import React from 'react';
import DocSidebarItemLink from '@theme/DocSidebarItem/Link';
import DocSidebarItemCategory from '@theme/DocSidebarItem/Category';
import DocSidebarItemHtml from '@theme/DocSidebarItem/Html';

// Import all icons that might be used
import {FaHome, FaGift, FaFolder, FaCode, FaBook, FaCogs, FaInfoCircle, FaQuestionCircle} from 'react-icons/fa';

const IconComponent = ({iconName, customProps}) => {
  if (!iconName && customProps && customProps.icon) {
    iconName = customProps.icon;
  }

  if (!iconName) return null;

  const iconComponents = {
    FaHome,
    FaGift,
    FaFolder,
    FaCode,
    FaBook,
    FaCogs,
    FaInfoCircle,
    FaQuestionCircle,
    // Add more icons as needed
  };

  const IconToRender = iconComponents[iconName] || null;

  if (!IconToRender) {
    console.warn(`Icon ${iconName} not found`);
    return null;
  }

  return <IconToRender style={{marginRight: '8px', verticalAlign: 'middle', fontSize: '0.9em'}} />;
};

export default function DocSidebarItem({item, ...props}) {
  const {customProps} = item;
  const updatedItem = {...item};

  // If there are customProps with an icon, we'll modify the label to include the icon
  if (customProps && customProps.icon) {
    const originalLabel = updatedItem.label;
    updatedItem.label = (
      <>
        <IconComponent customProps={customProps} />
        <span>{originalLabel}</span>
      </>
    );
  }

  switch (item.type) {
    case 'link':
      return <DocSidebarItemLink item={updatedItem} {...props} />;
    case 'category':
      // For category items, we need to handle the icon in the category component
      if (customProps && customProps.icon) {
        return <DocSidebarItemCategoryWithIcon item={updatedItem} {...props} />;
      }
      return <DocSidebarItemCategory item={updatedItem} {...props} />;
    case 'html':
      return <DocSidebarItemHtml item={updatedItem} {...props} />;
    default:
      throw new Error(`Unknown sidebar item type: ${item.type}`);
  }
}

// Custom component for category items with icons
function DocSidebarItemCategoryWithIcon({item, ...props}) {
  const {customProps} = item;
  const updatedItem = {...item};

  // Render the category with icon
  return (
    <DocSidebarItemCategory
      item={{
        ...updatedItem,
        label: (
          <>
            <IconComponent customProps={customProps} />
            <span>{updatedItem.label}</span>
          </>
        ),
      }}
      {...props}
    />
  );
}