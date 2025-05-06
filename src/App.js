import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './customHooks/useLocalStorage';


const defaultTodos = [
	{ text: 'Analisis', completed: true},
	{ text: 'Diseño', completed: false},
	{ text: 'Desarrollo', completed: true},
	{ text: 'Implementación', completed: false},
	{ text: 'Corrección', completed: true},
	{ text: 'Pruebas', completed: false},
	{ text: 'Documentación', completed: false},
];

function App() {
	const [todos, saveTodos] = useLocalStorage('Todos_v3', defaultTodos);
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
			(todo) => todo.text === text
		)
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos)
	}

	const replayTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		)
		newTodos[todoIndex].completed = false;
		saveTodos(newTodos)
	}

	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		)
		newTodos.splice(todoIndex,1);
		saveTodos(newTodos)
	}

	return (
		<AppUI 
		completedTodos = {completedTodos} 
		totalTodos = {totalTodos} 
		searchValue = {searchValue}
		setSearchValue = {setSearchValue} 
		searchedTodos = {searchedTodos}
		completeTodo = {completeTodo} 
		replayTodo = {replayTodo}
		deleteTodo = {deleteTodo}
		/>
	);
}

export default App;