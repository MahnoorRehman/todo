import React, { useState } from 'react'

import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Edit from './Edit';
import Add from './Add';
import { employeesData } from '../data';
function DashBoard() {

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployees, setSelectedEmployees] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  const handleEdit = (id) => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployees(employee);
    setIsEditing(true);
}

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        // const [employee] = employees.filter(
        //   employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `Task has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter(employee => employee.id !== id));
      }
    });
  }
  return (
    <div className='container'>
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <>
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        </>
      )}
      {isEditing && (
        <>
          <Edit
            employees={employees}
            selectedEmployees={selectedEmployees}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
          />
        </>
      )}
    </div>
  )
}

export default DashBoard
