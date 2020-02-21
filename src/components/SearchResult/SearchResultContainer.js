  
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getSearchCardsForColumn} from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getSearchCardsForColumn(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResult);