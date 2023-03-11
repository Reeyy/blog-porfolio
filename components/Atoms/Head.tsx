import { NextSeo } from 'next-seo';

import { FC } from 'react';

interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    url?: string;
    title?: string;
    description?: string;
    images?: {
      url: string;
      width: number;
      height: number;
      alt: string;
      type: string;
    }[];
    siteName?: string;
  };
  twitter?: {
    handle: string;
    site: string;
    cardType: string;
  };
  facebook?: {
    appId: string;
  };
  additionalMetaTags?: {
    property: string;
    content: string;
  }[];
}

const HeadSeo: FC<Props> = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  facebook,
  additionalMetaTags,
}): JSX.Element => {
  return (
    <>
      <NextSeo
        title={title || 'Reeyy Blog'}
        description={description || 'Reeyy Blog '}
        canonical={canonical}
        openGraph={openGraph}
        twitter={twitter}
        facebook={facebook}
        additionalMetaTags={additionalMetaTags}
      />
    </>
  );
};

export default HeadSeo;
