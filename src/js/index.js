import 'airbnb-browser-shims';
import '../scss/main.scss';

import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

_.compact([0, 1, false, 2, '', 3]);
