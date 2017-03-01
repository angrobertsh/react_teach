import { connect } from 'react-redux';
import ItemIndex from './item_index';
import * as ACTIONS from '../../actions/item_actions'

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(ACTIONS.getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);
