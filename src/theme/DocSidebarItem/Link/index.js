import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';

// 符号类型 → 字母 + 颜色
const KIND_META = {
  class: {letter: 'C', color: '#3b82f6'},
  interface: {letter: 'I', color: '#10b981'},
  enum: {letter: 'E', color: '#8b5cf6'},
  function: {letter: 'F', color: '#f59e0b'},
  variable: {letter: 'V', color: '#06b6d4'},
  typeAlias: {letter: 'T', color: '#ec4899'},
};

function KindBadge({kind}) {
  const meta = KIND_META[kind];
  if (!meta) {
    return null;
  }
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      className={styles.kindBadge}
      style={{flexShrink: 0}}
      aria-hidden="true">
      <rect width="15" height="15" rx="4" fill={meta.color} />
      <text
        x="7.5"
        y="10.8"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="#fff">
        {meta.letter}
      </text>
    </svg>
  );
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const {href, label, className, autoAddBaseUrl, customProps} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  const kind = customProps && customProps.kind;
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        <span className={styles.labelWrap}>
          {kind && <KindBadge kind={kind} />}
          <span className={styles.labelText}>{label}</span>
        </span>
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
