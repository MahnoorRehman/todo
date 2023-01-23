import React from 'react'

function List({ employees, handleEdit, handleDelete }) {
  return (
    <div className='contain-table' >
      <table className='striped-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Detail</th>
            <th>Date</th>
            <th colSpan={2} className='text-center'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            employees.length > 0 ? (
              employees.map((employee, i) => (
                <tr key={employee.id}>
                  <td>{i + 1}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.date}</td>
                  <td className='text-right'>
                    <button
                      className='button muted-button'
                      onClick={() => handleEdit(employee.is)}>
                      Edit
                    </button>
                  </td>
                  <td className='text-center'>
                    <button
                      className='button muted-button'
                      onClick={() => handleDelete(employee.is)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))

            ) : (
              <tr colSpan={5}>No Task</tr>
            )

          }
        </tbody>
      </table>
    </div >
  )
}

export default List
