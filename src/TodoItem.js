import './TodoItem.css';

function TodoItem(props){
	return(
	  	<li className={`TodoItem ${props.completed && "TodoItemInActive"}`}>
		
			<div className={`TodoItemCompleted ${props.completed && "TodoItemCompletedGreen"}`}> 
				{props.completed ? 
				<span 
					className="material-symbols-outlined"
					onClick={props.onReplay}
				>check_box_outline_blank</span>
				:
				<span 
					className="material-symbols-outlined"
					onClick={props.onComplete}
				>check_box</span>
				} 
			</div>
			
			<p className={`TodoItemP ${props.completed && "TodoItemPCompleted"}`}>{props.text}</p>
			
			<div className={`TodoItemDelete ${props.completed && "TodoItemDeleteHide"}`}>
				<span 
					className="material-symbols-outlined"
					onClick={props.onDelete}
				> {props.completed ? "delete":"delete"} 
				</span> 
			</div>
		
		</li>
	)
}

export {TodoItem}