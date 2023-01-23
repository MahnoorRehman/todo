import React from 'react'

function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Todo List</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }} >
        <button className='round-button' onClick={() => setIsAdding(true)}>
          Add Task
        </button>
      </div>
    </header>
  )
}

export default Header
