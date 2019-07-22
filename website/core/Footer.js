/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href='/installation'>
              Getting Started
            </a>
            <a href='applications/box-basics'>
              Box Basics
            </a>
          </div>
          <div>
            <h5>Get in Touch</h5>
            <a href="https://discord.gg/2esbu2N" target="_blank">Discord</a>
          </div>
          <a href="https://github.com/liaralabs/swizzin">
              GitHub
            </a>
          <a href="https://github.com/liaralabs/swizzin/issues">
            Open an Issue
          </a>
          <div>
            <h5>Meta</h5>
            <a href="https://swizzin.ltd" target="_blank">Home</a>
            <a href="https://swizzin.net" target="_blank">Swizzin Shared Boxes</a>
          </div>
        </section>


        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
