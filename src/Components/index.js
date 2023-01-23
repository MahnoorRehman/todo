import React, { useState } from 'react'

import { swal } from 'sweetalert2';
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


  const handleEdit = () => {

  }


  const handleDelete = () => {

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
