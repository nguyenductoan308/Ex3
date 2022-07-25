import React from 'react';
// import Modal from '../Modal/modal';
import './style.css';

    export const addNew = () => {
        document.querySelector('.modal').classList.remove('hide');
    
      }; 


function Header(props) {  
    // const addNew = () => {
    //     document.querySelector('.modal').classList.toggle('hide');
    
    //   };  
    return (
        <div className='header'>
            <button className='btn btn-add' onClick={addNew}>Create Add</button>
            <input type="text" className='input-search' placeholder='Search'></input>
            <button className='btn btn-search'>Search</button>                
        </div>
        
    );
}

export default Header;