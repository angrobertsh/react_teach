// It holds the physical manifestation of your app

import React from 'react';
import ItemIndexContainer from './item/item_index_container';
// import StorefrontIndexContainer from './storefront_index/storefront_index_container';
// import Banner from './banner/banner';
// import FilterBarContainer from './filter_bar/filter_bar_container';

const App = () => (
  <div className='app'>
    <ItemIndexContainer />
  </div>
);

export default App;
