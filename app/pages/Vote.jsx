import React, { Component } from 'react';
import Page                 from '../pages/Page';
import VoteContainer        from '../containers/Vote';

class Vote extends Component {

  getMetaData() {
    return {
             title: this.pageTitle(),
             meta:  this.pageMeta(),
             link:  this.pageLink()
           };
  }

  pageTitle = () => {
                      return 'CMA';
                    };

  pageMeta = () => {
    return [
             { 
               name:    'description', 
               content: 'react-mongo' }
           ];
  };

  pageLink = () => {
                     return [];
                   };

  render() {
    console.log('VOTE PAGE PROPS', this.props);
    return (
      <Page {...this.getMetaData()}>
        <VoteContainer {...this.props} />
      </Page>
    );
  }
}

export default Vote;

