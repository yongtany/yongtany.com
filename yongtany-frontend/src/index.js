import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store/configure';



import registerServiceWorker from './registerServiceWorker';
import 'styles/base.scss';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider> ,
  document.querySelector('#root'));
registerServiceWorker();
