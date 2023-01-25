
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployees, setEmployees, setIsEditing }) {

  const id = selectedEmployees.id;

  const [task, setTask] = useState(selectedEmployees.task);
  const [detail, setDetail] = useState(selectedEmployees.detail);
  const [date, setDate] = useState(selectedEmployees.date);


  const handleUpdate = e => {
    e.preventDefault();

    if (!task || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    const employee = {
      id,
      task,
      detail,
      date,

    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: ` Task has been updated.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label className='text-left' htmlFor="task">Task</label>
        <input
          id="task"
          type="text"
          name="Task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <label className='text-left' htmlFor="detail">Deatil</label>
        <input
          id="detail"
          type="text"
          name="Deatil"
          value={detail}
          onChange={e => setDetail(e.target.value)}
        />


        <label className='text-left' htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit