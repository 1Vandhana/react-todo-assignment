//// EVENT HANDLING --/////
import {useState} from "react";
function ToDoItem({todo,onToggle,onDelete,onEdit}){
    const [isEditing,setIsEditing]=useState(false);
    const[editValue,setEditValue]=useState(todo.title);
    const handleSave=()=>{
        if (editValue.trim()==="") return;
        onEdit(todo.id,editValue);
        setIsEditing(false);
    };
    return (
        <li className={todo.completed ? "completed":""}>
            {isEditing ? (
                <>
                <input type="text" value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="save-btn"onClick={handleSave}>Save</button>
                </>

            ) : (
                <>
                <span onClick={()=>ontoggle(todo.id)}>
                    {todo.title}
                </span>
                <div>
                    <button className="edit-btn" onClick={()=>setIsEditing(true)}>Edit</button>
                    <button className="delete-btn" onClick={()=> onDelete(todo.id)}>Delete</button>
                </div>

                </>
            )}
        </li>
    );
}
 export default ToDoItem;