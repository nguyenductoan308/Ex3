import React from 'react';
import TodoItem from '../TodoItem/todoItem';
import './style.css';
TodoList.propTypes = {
    
};

function TodoList(props) {
    return (
        <div className='todolist'>
            <TodoItem title={'Task 1'} creator={'Toàn'} desc={'This is a task This is a task This is a Task'}/>
            <TodoItem title={'Task 2'} creator={'Tuyết'} desc={'This is a task This is a task This is a Task'}/>
            <TodoItem title={'Task 3'} creator={'Anh'} desc={'This is a task This is a task This is a Task'}/>
            <TodoItem title={'Task 4'} creator={'Quân'} desc={'This is a task This is a task This is a Task'}/>
            <TodoItem title={'Task 1'} creator={'Toàn'} desc={'This is a task This is a task This is a Task'}/>
            <TodoItem title={'Task 2'} creator={'Tuyết'} desc={'This is a task This is a task This is a Task'}/>
            <TodoItem title={'Task 3'} creator={'Anh'} desc={'This is a task This is a task This is a Task'}/>
            <TodoItem title={'Task 4'} creator={'Quân'} desc={'This is a task This is a task This is a Task'}/>
            
            
        </div>
    );
}

export default TodoList;