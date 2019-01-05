import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  ProfilePage,
  ListPage,
  PostPage,
  EditorPage,
  NotFoundPage
} from '../../pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/post" component={ListPage} />
                <Route path="/post/:page" component={ListPage} />
                <Route path="/tag/:tag/:page?" component={ListPage} />
                <Route path="/info" component={PostPage} />
                <Route path="/editor" component={EditorPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
};

export default App;
