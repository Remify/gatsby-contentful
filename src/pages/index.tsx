import * as React from "react";
import { Row, Col } from "antd";
import { HomeCarousel } from "../components/home-carousel/home-carousel.component"
import "../styles/main.scss";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
    contentfulAccueil: {
      accroche: {
        accroche: string
      };
      cover: {
        file: {
          url: string
        };
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props:IndexPageProps, context: any){
    super(props, context);
  }
  public render() {
    return(
      <Row>
        <Col span={24}>
          <div>
            <img src={this.props.data.contentfulAccueil.cover.file.url} />
            <h1>{this.props.data.contentfulAccueil.accroche.accroche}</h1>
            <p>This site is named <strong>{this.props.data.site.siteMetadata.siteName}</strong></p>
          </div>
        </Col>
      </Row>
      
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery{
    site {
      siteMetadata {
        siteName
      }
    }
    contentfulAccueil {
      accroche {
        accroche
      }
      cover {
        file {
          url
        }
      }
    }
  }
`;
