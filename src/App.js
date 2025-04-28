import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/* 
const defaultTodos = [
	{ text: 'Analisis', completed: true},
	{ text: 'Diseño', completed: false},
	{ text: 'Desarrollo', completed: true},
	{ text: 'Implementación', completed: false},
	{ text: 'Corrección', completed: true},
	{ text: 'Pruebas', completed: false},
	{ text: 'Documentación', completed: false},
];

localStorage.setItem('TODOS1', defaultTodos);
localStorage.removeItem('TODOS1'); 
*/


function App() {
	let localStorageTodos = localStorage.getItem('TODOS1');
	let parcedTodos = JSON.parse(localStorageTodos);

	const [todos, setTodos] = React.useState(parcedTodos);
	const [searchValue, setSearchValue] = React.useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter(todo => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	})
	
	const completeTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text == text
		)
		newTodos[todoIndex].completed = true;
		setTodos(newTodos)
	}

	const replayTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text == text
		)
		newTodos[todoIndex].completed = false;
		setTodos(newTodos)
	}

	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text == text
		)
		newTodos.splice(todoIndex,1);
		setTodos(newTodos)
	}

	return (
		<React.Fragment>
			<div className="main_content">
				<TodoCounter 
					completed={completedTodos} 
					total={totalTodos}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
				<TodoList>
					{searchedTodos.map(todo => (
						<TodoItem 
							key={todo.text} 
							text={todo.text}
							completed={todo.completed}
							onComplete={ () => completeTodo(todo.text)}
							onReplay={ () => replayTodo(todo.text)}
							onDelete={ () => deleteTodo(todo.text)}
						/>
					))}
		
				</TodoList>
				<CreateTodoButton/>
			</div>
		</React.Fragment>
	);
}

export default App;