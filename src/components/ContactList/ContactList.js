import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../redux/contacts/contacts-actions';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ visibleList, onDelete }) => {
    return (
      <ul className={s.list}>
        {visibleList.map(item => (
          <li key={item.id} className={s.line}>
            <Contact
              name={item.name}
              number={item.number}
              onDelete={onDelete}
            />
            <button
              type="button"
              className={s.deleteButton}
              onClick={()=>onDelete(item.id)}
            ></button>
          </li>
        ))}
      </ul>
    );

};
const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const filtered= items.filter(({name}) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  return ({
    visibleList:filtered
  }
  )
}
const mapDispatchToProps = dispatch => ({
  onDelete:(id)=>dispatch(deleteItem(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  visibleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })),
  onDelete: PropTypes.func,
};
