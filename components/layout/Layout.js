import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import Head from 'next/head';
import Header from 'components/header';

export default injectIntl(({ intl, title, children }) => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
    </Head>

    <Header />

    {children}
  </div>
));
