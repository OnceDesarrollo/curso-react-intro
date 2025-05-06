import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

function AppUI({
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo, 
    replayTodo, 
    deleteTodo
}) {
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

export {AppUI};