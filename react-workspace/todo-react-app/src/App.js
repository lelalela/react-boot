import React from 'react';
import Todo from './Todo'
import AddTodo from './AddTodo';
import {Paper, List, Container} from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []  
    };
  }
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items: thisItems});
    console.log("items : ", this.state.items);
  }
  delete = (item) => {
    const thisItem = this.state.items;
    console.log("before update items :", this.state.items);
    const newItems = thisItem.filter(e => e.id !== item.id)
    this.setState({items : newItems}, () => {
      console.log("updated items : ", newItems);
    });
  }
  render() {
    
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete}/>
          ))}
        </List>
      </Paper>
    )

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          {todoItems}
        </Container>
      </div>
    )
  }
}

export default App;
