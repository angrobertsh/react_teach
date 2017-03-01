import React from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component{
  constructor(props){
    super(props)
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems(){
    let itemArray = this.props.items;
    return Object.keys(this.props.items).map((itemKey) => (<ItemIndexItem item={itemArray[itemKey]} key={itemKey} />));
  }

  render(){
    return(
      <div id="item-index">
        <div id="pushme" onClick={this.props.getItems}>Push me!</div>
        <ul id="item-list">
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default ItemIndex;
