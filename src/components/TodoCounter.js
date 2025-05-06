import './TodoCounter.css';

function TodoCounter({completed, total}){
	return(
	  <h1>
		{completed === total ? 
			<span>No hay más tareas</span> 
		: 
		<div>	
			{completed === 0 ? 
				<span>Tienes {total} tareas en total</span> 
			: 
				<span>Has completado {completed} de {total} tareas</span> 
			}
		</div>
		} 		
	  </h1>
	)
}

export {TodoCounter}