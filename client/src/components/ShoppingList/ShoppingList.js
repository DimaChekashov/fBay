import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { connect } from 'react-redux';

import { getItems } from '../../actions/ItemActions';


class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
  }

  handleAddItem(){
    const name = prompt('Введите имя товара:');
    if(name){
      this.setState(state => ({
        items: [...state.items, { id: uuid(), name }]
      }));
    }
  }

  handleDeleteItem(id){
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }));
  }
  
  render() {
    const { items } = this.props.item;
    return (
      <div className="container">
        <button
          className="btn btn-primary"
          style={{ marginBottom: '2rem' }}
          onClick={this.handleAddItem}
        >Добавить Товар</button>

        <ul className="list-group">
          {items.map(({ id, name }) => (
            <li className="list-group-item" key={id}>
              <button 
                className="btn btn-danger" 
                onClick={() => this.handleDeleteItem(id)}
                style={{ marginRight: '1rem'}}
              >Удалить товар</button>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(ShoppingList);