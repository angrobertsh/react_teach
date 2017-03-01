// Root provides the store information to all the children components

import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
