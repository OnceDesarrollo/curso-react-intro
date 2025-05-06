import './TodoItem.css';

function TodoItem(props){
	return(
	  	<li className={`TodoItem ${props.completed && "TodoItemInActive"}`}>
		
			<div className={`TodoItemCompleted ${props.completed && "TodoItemCompletedGreen"}`}> 
				{props.completed ? 
				<span 
					className="material-symbols-outlined checkIcon"
					onClick={props.onReplay}
				>check_box</span>
				:
				<span 
					className="material-symbols-outlined unCheckIcon"
					onClick={props.onComplete}
				>check_box_outline_blank</span>
				} 
			</div>
			
			<p className={`TodoItemP ${props.completed && "TodoItemPCompleted"}`}>{props.text}</p>
			
			<div className={`TodoItemDelete ${props.completed && "TodoItemDeleteHide"}`}>
				<span 
					className="material-symbols-outlined trashIcon"
					onClick={props.onDelete}
				> {props.completed ? "delete":"delete"} 
				</span> 
			</div>
		
		</li>
	)
}

export {TodoItem}