import React from 'react';
import Header from './component/Header/header';
import './index.css'
import Sidebar from './component/Content/SideBar/sidebar';
import TodoList from './component/Content/BodyContent/TodoList/todoList';
import Modal from './component/Modal/modal';



function App(props) {
  return (
    <div>
      <Header/>  
      <div className='content'>
      <Sidebar/>
      <TodoList/>
      <Modal/>

      </div>
      
    </div>
  );
}

export default App;