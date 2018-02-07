import React, { PureComponent } from 'react';

import Link from 'next/link';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="root">
        <div className="root__container">
          <Link href="/">
            <a className="root__logo">
              NextJS - Starter kit
            </a>
          </Link>

          <ul className="root__list">
            <li className="root__item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="root__item">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>

        <style jsx>{`
          @import 'config';

          .root {
            margin: 0 0 $gutter;
            padding: $gutter 0;

            border-bottom: 1px solid #ccc;

            &__container {
              @include container;

              display: flex;
            }

            &__logo {
              @include reset-anchor;

              @include responsive-font(20, 40);
              font-weight: 700;
            }

            &__list {
              @include reset-list;

              margin-left: auto;
            }
          }
        `}</style>
      </header>
    );
  }
}
