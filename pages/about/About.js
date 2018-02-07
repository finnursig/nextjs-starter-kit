import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';

import pageWithIntl from 'components/PageWithIntl'
import Layout from 'components/layout';
import Segment from 'components/segment';

class About extends Component {

  render() {
    return (
      <Layout>
        <Head>
          <title>About page</title>
        </Head>

        <Segment>
          <h1>
            <FormattedMessage id="nav.about" defaultMessage="About page" />
          </h1>
        </Segment>
      </Layout>
    );
  }
}

export default pageWithIntl(About);
