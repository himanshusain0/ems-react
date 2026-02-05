import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AdminCreatedTasks = () => {
  const [userData] = useContext(AuthContext)
  const [filterStatus, setFilterStatus] = useState('all')
  const [adminTasks, setAdminTasks] = useState([])

  useEffect(() => {
    if (userData && userData.length > 0) {
      const allTasks = []
      
      userData.forEach(employee => {
        employee.tasks.forEach(task => {
          if (task.createdBy === "Admin") {
            allTasks.push({
              ...task,
              assignedTo: employee.firstName,
              employeeId: employee.id,
              employeeEmail: employee.email
            })
          }
        })
      })
      
      setAdminTasks(allTasks)
    }
  }, [userData])

  const filteredTasks = adminTasks.filter(task => {
    if (filterStatus === 'all') return true
    if (filterStatus === 'new') return task.newTask
    if (filterStatus === 'active') return task.active
    if (filterStatus === 'completed') return task.completed
    if (filterStatus === 'failed') return task.failed
    return true
  })

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-white'>
          Tasks Created by Admin
          <span className='ml-2 text-sm bg-emerald-600 px-2 py-1 rounded'>
            {adminTasks.length} tasks
          </span>
        </h2>
        
        <div className='flex items-center gap-2'>
          <span className='text-sm text-gray-300'>Filter:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className='bg-gray-800 text-white px-3 py-1 rounded text-sm border border-gray-700'
          >
            <option value="all">All Tasks</option>
            <option value="new">New</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {adminTasks.length === 0 ? (
        <div className='text-center py-8 border-2 border-dashed border-gray-700 rounded'>
          <p className='text-gray-400'>No tasks created yet</p>
          <p className='text-sm text-gray-500 mt-1'>Tasks you create will appear here</p>
        </div>
      ) : (
        <div className='space-y-3 max-h-96 overflow-y-auto pr-2'>
          {filteredTasks.map((task, index) => {
            let statusClass = 'bg-gray-500 text-white'
            let statusText = 'Unknown'
            
            if (task.completed) {
              statusClass = 'bg-green-500 text-white'
              statusText = 'Completed'
            } else if (task.failed) {
              statusClass = 'bg-red-500 text-white'
              statusText = 'Failed'
            } else if (task.active) {
              statusClass = 'bg-yellow-500 text-black'
              statusText = 'Active'
            } else if (task.newTask) {
              statusClass = 'bg-blue-500 text-white'
              statusText = 'New'
            }
            
            return (
              <div key={index} className='bg-gray-800 p-4 rounded border border-gray-700'>
                <div className='flex justify-between items-start mb-2'>
                  <div>
                    <h3 className='font-medium text-white'>{task.taskTitle}</h3>
                    <p className='text-sm text-gray-400 mt-1 line-clamp-2'>
                      {task.taskDescription}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusClass}`}>
                    {statusText}
                  </span>
                </div>
                
                <div className='flex justify-between items-center mt-3 pt-3 border-t border-gray-700'>
                  <div className='flex items-center gap-4'>
                    <div>
                      <span className='text-xs text-gray-400'>Assigned to:</span>
                      <span className='ml-2 bg-purple-600 px-2 py-1 rounded text-xs'>
                        {task.assignedTo}
                      </span>
                    </div>
                    <div>
                      <span className='text-xs text-gray-400'>Category:</span>
                      <span className='ml-2 bg-gray-700 px-2 py-1 rounded text-xs'>
                        {task.category}
                      </span>
                    </div>
                    <div>
                      <span className='text-xs text-gray-400'>Due:</span>
                      <span className='ml-2 text-white text-sm'>{task.taskDate}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      alert(
                        `Task Details:\n\n` +
                        `Title: ${task.taskTitle}\n` +
                        `Description: ${task.taskDescription}\n` +
                        `Assigned to: ${task.assignedTo}\n` +
                        `Email: ${task.employeeEmail}\n` +
                        `Category: ${task.category}\n` +
                        `Due Date: ${task.taskDate}\n` +
                        `Status: ${statusText}\n` +
                        `Created By: Admin`
                      )
                    }}
                    className='text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded'
                  >
                    View Details
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AdminCreatedTasks