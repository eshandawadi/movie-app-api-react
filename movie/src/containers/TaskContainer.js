import {Task} from "../components/Task";
import {useEffect, useState} from "react";

export const TaskContainer = (props)=>{
    const [filteredTasks,setFilteredTasks] = useState([]);
    useEffect(()=>{
        setFilteredTasks([...props.tasks]);
    },[props.tasks]);

    useEffect(()=>{
        let tempTasks = props.tasks.filter(v=>
            v.title.includes(props.keyword)||
            v.description.includes(props.keyword));

        setFilteredTasks(tempTasks);
    },[props.keyword]);

    return   <div className="task-container">
        <div className={`task-container-title text-${props.name}`}>{props.title}</div>
        <div className="task-list">
            {filteredTasks.map((task,key)=>(
                <Task task={task} edit={props.editTask} key={key} remove={props.deleteTask}/>
            ))}
        </div>
    </div>
}