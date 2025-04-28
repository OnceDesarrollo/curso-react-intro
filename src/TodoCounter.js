import './TodoCounter.css';

function TodoCounter({completed, total}){
	return(
	  <h1>
		{completed == total ? 
			<span>No hay más tareas</span> 
		: 
			<span>Has completado {completed} de {total} Tareas</span>
		} 		
	  </h1>
	)
}

export {TodoCounter}