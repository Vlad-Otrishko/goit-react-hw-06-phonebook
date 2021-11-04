import actionTypes from './contacts-types';
import shortid from 'shortid';
import { combineReducers } from 'redux';

const initialItems = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const items = (state = initialItems, { type, payload }) => {
    switch (type) {
      case actionTypes.ADD: {
        const normalizedNewName = payload.name.toLowerCase();
        const isUnique = !state.some(
          ({ name }) => name.toLowerCase() === normalizedNewName,
        );
        if (!isUnique) {
          alert('THIS NAME IS ALREADY PRESENT IN A PHONEBOOK');
          return state;
        }
        payload.id = shortid.generate();
        return [...state, payload];
      }
        case actionTypes.DELETE: {
  return state.filter(
    contact => contact.id !== payload);
  }
      default:
        return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER: {
      return payload;
    }
    default: return state;
   }
}

export default combineReducers ({ items, filter});


