import * as React from "react";

interface HomeCarouselProp {
    data: {
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

export default class HomeCarousel extends React.Component<HomeCarouselProp, {}> { 
  constructor(props: HomeCarouselProp, context: any){
    super(props, context);
  }
  render() { 
    return (
        <div>
            <h1>You are here!</h1>
            <h2>But nothing found for you #404</h2>
        </div>
    );
};

}


export const pageQuery = graphql`
query IndexQuery{
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