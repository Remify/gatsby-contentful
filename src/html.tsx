/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react";
import { Layout } from "antd";
import Navbar from "./components/navbar/navbar.component";
const { Header, Footer, Sider, Content } = Layout;


// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require("!raw-loader!../public/styles.css");
  } catch (err) {
    console.log(err);
  }
}

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = React.createClass<HtmlProps, void>({
  render() {
    const css =
      process.env.NODE_ENV === `production` ? (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      ) : null;

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}
          <title>My website</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.11/antd.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          {css}
        </head>
        <body>
          <Layout>
            <Navbar> </Navbar>            
            <Layout>
              <Content>
                <div
                  id="___gatsby"
                  dangerouslySetInnerHTML={{ __html: this.props.body }}
                />
              </Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>

          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
});
