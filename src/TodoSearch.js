import React from 'react';
import './TodoSearch.css';

function TodoSearch(props){
	return(
		<div className='TodoSearchContainer'>
			<input 
			className='TodoSearch' 
			type="text" 
			placeholder="Buscar Tarea"
			value={props.searchValue} 
			onChange={(event)=>{
				props.setSearchValue(event.target.value);
			}}
			/>
		</div>
	)
}

export {TodoSearch}