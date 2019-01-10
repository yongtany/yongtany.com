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


const App = props => [
  props.isLoggedIn ? <PrivateRoutes key={1} /> : <PublicRoutes key={1} />,
];

const PublicRoutes = (props) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/post" component={ListPage}/>
    <Route path="/page/:page" component={ListPage}/>
    <Route path="/tag/:tag/:page?" component={ListPage}/>
    <Route path="/post/:id" component={PostPage}/>
    <Route path="/auth" component={AuthPage}/>
    <Route component={NotFoundPage}/>
  </Switch>
);

const PrivateRoutes = (props) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/post" component={ListPage}/>
    <Route path="/page/:page" component={ListPage}/>
    <Route path="/tag/:tag/:page?" component={ListPage}/>
    <Route path="/post/:id" component={PostPage}/>
    <Route path="/editor" component={EditorPage}/>
    <Route component={NotFoundPage}/>
  </Switch>
);

export default App;
