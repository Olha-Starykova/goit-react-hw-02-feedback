import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  
 goodHandleIncrement = () => {
    this.setState(prevState => ({
        good: prevState.good + 1
     }));
 };
  
 neutralHandleIncrement = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1
     }));
 };
  
   badHandleIncrement = () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1
     }));
 };
 
//  countTotalFeedback = () => {
// 		const { good, neutral, bad } = this.state;
// 		const result = good + neutral + bad;
// 		return result;
// 	};
 
  
  render() {

    

    const countTotalFeedback = this.state.length;

    console.log(countTotalFeedback)

    return (
      <div >
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.goodHandleIncrement}>Good</button>
        <button type="button" onClick={this.neutralHandleIncrement}>Neutral</button>
        <button type="button" onClick={this.badHandleIncrement}>Bad</button>
        <h1>Statistics</h1>
        <p>Good: { this.state.good}</p>
        <p>Neutral: { this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total:  {this.countTotalFeedback}</p>
      </div>
    );
  }
}
export default App;



// class App extends Component {
//   state = {
//     //храним массив
//     todos: initialTodos,
//   };
// //метод для удаления по id/ работа с коллекцией выкидываем елемент id которого совпадает
//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     );

//     return (
//       <>
//         <h1>Состояние компонента</h1>

//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div>
// //передаем пропсы для удаления от родителей к детям
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

// export default App; 
