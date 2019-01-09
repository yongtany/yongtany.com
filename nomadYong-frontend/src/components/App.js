import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  ListPage,
  PostPage,
  EditorPage,
  NotFoundPage,
  AuthPage
} from 'pages';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post" component={ListPage}/>
        <Route path="/page/:page" component={ListPage}/>
        <Route path="/tag/:tag/:page?" component={ListPage}/>
        <Route path="/post/:id" component={PostPage}/>
        <Route path="/editor" component={EditorPage}/>
        <Route path="/auth" component={AuthPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
};

export default App;
