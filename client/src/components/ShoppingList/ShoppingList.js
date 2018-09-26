import React, { Component } from 'react';
import uuid from 'uuid';

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

    this.state = {
      items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' },
      ],
    };
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
    const { items } = this.state;
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

export default ShoppingList;