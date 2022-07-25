import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Sidebar.propTypes = {
    
};

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <ul className='nav'>
                <li><a href="#">All Task</a></li>
                <li><a href="#">New Task</a></li>
                <li><a href="#">Doing Task</a></li>
                <li><a href="#">Done Task</a></li>
            </ul>
            
        </div>
    );
}

export default Sidebar;