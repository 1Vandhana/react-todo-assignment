/// Map with unique key--////
import ToDoItem from "./ToDoItem";
 function ToDoList({todos,onToggle,onDelete,onEdit}){
    return (
        <ul>
            {todos.map((todo)=>(
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
 }
 export default ToDoList;
