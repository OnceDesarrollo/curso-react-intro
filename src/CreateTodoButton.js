import './CreateTodoButton.css';

function CreateTodoButton(){
	return(
		<div className='CreateTodoButtonContainer'>		
			<button 
				className='CreateTodoButton' 
				onClick={ (event)=>{
					console.log('clikeado')
					console.log(event) 
					console.log(event.target) 
					}
				}>
					Crear Tarea
			</button>
		</div>
	)
}

export {CreateTodoButton}