import React, { useEffect } from 'react';
import NextHead from 'next/head';
import Link from '../Link';
import prefixLink from '../../utils/common/prefixLink';

interface Props {
  title?: string;
  description?: string;
  charset?: string;
  hrefCanonical?: string;
  hrefManifest?: string;
  themeColor?: string;
  favIconPath?: string;
  keywords?: string;
  refresh?: number;
  appleIconPath?: string;
  appleIconSize?: string;
  isAmp?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

const Head: React.FC<Props> = ({
  title = '',
  description = title,
  charset = 'utf-8',
  hrefCanonical,
  hrefManifest,
  themeColor,
  favIconPath,
  keywords = title,
  refresh,
  appleIconPath,
  appleIconSize = '192x192',
  isAmp,
  children,
}) => {
  const linkToAdd: Record<string, string> = {};
  if (hrefManifest) {
    linkToAdd.manifest = prefixLink(hrefManifest);
  }
  if (!isAmp && hrefCanonical) {
    linkToAdd.canonical = prefixLink(hrefCanonical);
  }
  if (favIconPath) {
    linkToAdd['shortcut icon'] = prefixLink(favIconPath);
  }

  useEffect(() => {
    const linkTags = Object.entries(linkToAdd).map(([rel, href]) => {
      const tag = document.createElement('link');
      tag.setAttribute('rel', rel);
      tag.setAttribute('href', href);
      return tag;
    });
    const headElement = document.getElementsByTagName('head').item(0);
    linkTags.forEach(tag => {
      if (headElement) {
        headElement.appendChild(tag);
      }
    });
    return () => {
      linkTags.forEach(tag => {
        if (headElement) {
          headElement.removeChild(tag);
        }
      });
    };
  }, []);
  return (
    <NextHead>
      <title key="title">{title}</title>
      <meta charSet={charset} key="charSet" />
      <meta name="description" key="description" content={description} />
      {themeColor && <meta name="theme-color" key="theme-color" content={themeColor} />}
      <meta name="keywords" key="keywords" content={keywords} />
      <meta httpEquiv="X-UA-Compatible" key="ua-compatible" content="ie=edge" />
      {refresh && <meta httpEquiv="refresh" key="refresh" content={`${refresh}`} />}

      {/* for safari */}
      <meta name="apple-mobile-web-app-capable" key="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        key="apple-mobile-web-app-status-bar-style"
        content="blue"
      />
      <meta
        name="apple-mobile-web-app-title"
        key="apple-mobile-web-app-title"
        content="With Manifest"
      />
      {appleIconPath && appleIconSize && (
        <Link href={appleIconPath} key="apple-touch-icon" passHref>
          <link rel="apple-touch-icon" key="apple-touch-icon" sizes={appleIconSize} />
        </Link>
      )}

      {/* for IE */}
      {appleIconPath && (
        <meta
          name="msapplication-TitleImage"
          key="msapplication-TitleImage"
          content={prefixLink(appleIconPath)}
        />
      )}
      {themeColor && (
        <meta name="msapplication-TitleColor" key="msapplication-TitleColor" content={themeColor} />
      )}
      {children}
    </NextHead>
  );
};

export default Head;
