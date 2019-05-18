import React from 'react';

function Header() {
    return (
        <header style={ headerStyle }>
            <h1>TodoList</h1>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    textAlign: 'center',
    color: '#fff',
    padding: '10px'
}

export default Header;