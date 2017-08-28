
The client-side entry point, per the webpack.config entry configuration, is 
the app/client.jsx file.

  . . . 
    entry: { app: ['./client', hotMiddlewareScript] },
  . . . 

- /app/routes then defines /app/pages/App.jsx as the first, default, react 
  component rendered into the main server/render/pageRenderer.jsx acting as 
  the main, loaded 'index.html' page.

      <Route path="/" component={App}>

app/routes.jsx --> app/fetch-data

      <IndexRoute component={Vote} fetchData={fetchVoteData} />

app/pages/vote.jsx --> app/containers/Vote

  <VoteContainer {...this.props} />

app/store/actions/topics

  - createTopic
  - typing
  - incrementCount
  - decrementCount
  - destroyTopic
