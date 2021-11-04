import actionTypes from './contacts-types';

export const addItem = item => {
    return {
        type: actionTypes.ADD,
        payload: item
    }
};
export const deleteItem = id => {
    return {
      type: actionTypes.DELETE,
      payload: id,
    };
}

export const filterItems = name => {
    return {
      type: actionTypes.CHANGE_FILTER,
      payload: name,
    };
}