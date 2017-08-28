import React                 from 'react';
import { Route, IndexRoute } from 'react-router';

import { fetchVoteData }     from './fetch-data';
import { App, Vote, About }  from './pages';

export default () => {

  return (
    <Route path="/" component={App}>
      <IndexRoute         component={Vote} fetchData={fetchVoteData} />
      <Route path="about" component={About} />
    </Route>
  );
};
