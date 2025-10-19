import React from 'react';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconExternalLink from '@theme/IconExternalLink';
import IconMenu from '@theme/IconMenu';
import Link from '@docusaurus/Link';
import {ReactComponent as HomeIcon} from '@site/src/svg/home.svg';
import clsx from 'clsx';

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

  return <IconToRender style={{marginRight: '8px', verticalAlign: 'middle'}} />;
};

function SidebarItemLink({
  item,
  onItemClick,
  activeDoc,
  collapsible,
  isSubItem,
}) {
  const {href, label, activeClassName, customProps} = item;
  const location = useLocation();
  const isActive = activeDoc?.path === href;
  const isCurrentPage = location.pathname === href;

  return (
    <li className={clsx('menu__list-item', {'menu__list-item--sublist': collapsible})}>
      <Link
        href={href}
        className={clsx(
          'menu__link',
          {
            'menu__link--active': isActive || isCurrentPage,
            [activeClassName]: activeClassName && (isActive || isCurrentPage),
            'menu__link--sublist': collapsible,
          },
          isSubItem && 'menu__link--sublist',
        )}
        {...(href.startsWith('http') && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        onClick={onItemClick}>
        <IconComponent customProps={customProps} />
        {label}
        {href.startsWith('http') && <IconExternalLink />}
      </Link>
    </li>
  );
}

function SidebarItemCategory({
  item,
  onItemClick,
  activeDoc,
  collapsible,
  isSubItem,
}) {
  const {label, items, href, collapsible: collapsibleProp, customProps} = item;
  const linkItem = href
    ? {
        href,
        label,
        items,
        className: 'menu__list-item--collapsed',
      }
    : item;

  return (
    <li className="menu__list-item menu__list-item--collapsible">
      <Link
        className={clsx('menu__link menu__link--sublist', isSubItem && 'menu__link--sublist')}
        onClick={onItemClick}
        href={href}>
        <IconComponent customProps={customProps} />
        {label}
        <IconMenu className="menu__caret" />
      </Link>
      <ul className="menu__list">
        {items.map((childItem) => (
          <SidebarItem
            key={childItem.href || childItem.label}
            item={childItem}
            onItemClick={onItemClick}
            activeDoc={activeDoc}
            isSubItem
          />
        ))}
      </ul>
    </li>
  );
}

function SidebarItem(props) {
  const {item} = props;
  switch (item.type) {
    case 'category':
      return <SidebarItemCategory {...props} />;
    case 'link':
    default:
      return <SidebarItemLink {...props} />;
  }
}

export default function Sidebar({sidebar, onItemClick, activeDoc}) {
  return (
    <ul className="menu__list">
      {sidebar.map((item) => (
        <SidebarItem
          key={item.href || item.label}
          item={item}
          onItemClick={onItemClick}
          activeDoc={activeDoc}
        />
      ))}
    </ul>
  );
}