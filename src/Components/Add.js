import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
function Add({ employees, setEmployees, setIsAdding }) {

  const [task, setTask] = useState('');
  const [detail, setDetail] = useState('');
  const [date, setDate] = useState('');


  const inputTask = useRef(null);
  useEffect(() => {
    inputTask.current.focus();
  }, [])

  const handleAdd = e => {
    e.preventDefault();
    if (!task || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Task and Date is required.',
        showConfirmButton: true
      })
    }


    const id = employees.length + 1;
    const newEmployee = {
      id,
      task,
      detail,
      date
    }

    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);
    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: 'Task is Added Sucessfully',
      showConfirmButton: true,
      timer: 1500
    });

  }
  return (
    <div className='small-container'>
      <form onSubmit={handleAdd}>
        <h1>Add Task</h1>
        <label className='text-left' htmlFor="task">Task</label>
        <input

          id='task'
          type="text"
          ref={inputTask}
          name='Task'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <label className='text-left' htmlFor="task">Detail</label>
        <input
          id='detail'
          type="text"
          name='Detail'
          value={detail}
          onChange={e => setDetail(e.target.value)}
        />
        <label className='text-left' htmlFor="task">Date</label>
        <input
          id='date'
          type="date"
          name='Date'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value='Add' />
          <input
            style={{ marginLeft: '12px' }}
            type="button"
            className='muted-button'
            value='Cancel'
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  )
}

export default Add
