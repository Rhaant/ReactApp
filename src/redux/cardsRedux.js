import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter((card) => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));

export const getSearchCardsForColumn = ({ cards, columns, lists  } , searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).map(card => ({
  ...card,
  columnName: columns.find(col => col.id === card.columnId).title,
  listName: lists.find(list => list.id === columns.find(col => col.id === card.columnId).listId).title}));
// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD});

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}