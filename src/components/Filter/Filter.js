import React from 'react';
import { connect } from 'react-redux';
import { filterItems } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({value, onFilter}) => {
    return(
    <label className={s.filterLabel}>
        Search by name
            <input type="text" className={s.filter} value={value} onChange={onFilter}/>
        </label>
        )
}

const mapStateToProps = state => ({
 name: state.contacts.filter, 
})
const mapDispatchToProps = dispatch => ({
  onFilter: event => dispatch(filterItems(event.currentTarget.value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};
