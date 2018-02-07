import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

import pageWithIntl from 'components/PageWithIntl'
import Layout from 'components/layout';
import Segment from 'components/segment';


class Home extends Component {
  static async getInitialProps({ req }) {
    const api = await Prismic.getApi('https://next-starter-kit.cdn.prismic.io/api/v2', { req: req });

    const { results: [homepage] } = await api.query(
      Prismic.Predicates.at('document.type', 'home'),
    );

    return { homepage };
  }

  render() {
    const { homepage, intl } = this.props;

    return (
      <Layout>
        <Head>
          <title>Home</title>
        </Head>

        <Segment>
          <h1 className="test">
            {RichText.asText(homepage.data.title)}
          </h1>

          <Link as="/about/bar" href="/about?foo=bar">
            <a>About with query</a>
          </Link>

          {RichText.render(homepage.data.description)}

          <p>
            Current language: {intl.locale}
          </p>

          <p>
            Switch language: <a href="/">English</a> - <a href="/?locale=is">Icelandic</a>
          </p>

          <p>
            This is translated text: <FormattedMessage id="greeting" defaultMessage="Hello, World" />
          </p>
        </Segment>
      </Layout>
    );
  }
}

export default pageWithIntl(Home);
