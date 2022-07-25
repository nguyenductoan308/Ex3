import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.css'

TodoItem.propTypes = {
    title : PropTypes.string,
    creator  : PropTypes.string,
    desc  : PropTypes.string,
};

TodoItem.defaultProTypes = {
    title : "Task Name",
    creator : "Author",
    desc : "This a task This a task This a task This a task.."

};
function TodoItem(props) {
    const {title, creator, desc} = props;
    const [status,setStatus] = useState("New");
    const [btn,setBtn] = useState("Start");
    const [color, setColor] = useState("green");

    const handleStatus = () => {
        if (status === "New"){
            setStatus ("Doing")
            setBtn("Done")
            setColor("orange")
        } else if (status === "Doing"){
            setStatus("Done")
            setBtn("Renew")
            setColor("purple")
        } else {
            setStatus("New")
            setBtn("Start")
            setColor("green")
        }

      };
  
    return (
        
            <div className='card__item width22'>
                <h3 className='mb-8'>Title: {title}</h3>
                <p className='mb-8'>Creator: {creator}</p>
                <p className='text mb-8' style={{color:color}}>Status: {status}</p>
                <h3 className='title mb-8'>Description</h3>
                <p>{desc}</p>
                <button className='btn' onClick={handleStatus}>{btn}</button>
            </div> 
    
    );
}

export default TodoItem;