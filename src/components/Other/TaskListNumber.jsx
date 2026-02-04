import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen  mt-10 justify-between gap-5'>
        <div className='p-10 rounded-xl w-[45%] puy-6 px-10 bg-[#D4FB56] max-sm:w-full '>
            <h2 className='text-3xl font-semibold '> 0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
         <div className='p-10 rounded-xl w-[45%] puy-6 px-10 bg-[#FBC956] max-sm:w-full '>
            <h2 className='text-3xl font-semibold '> 0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
         <div className='p-10 rounded-xl w-[45%] puy-6 px-10 bg-[#FB8556] max-sm:w-full '>
            <h2 className='text-3xl font-semibold '> 0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
         <div className='p-10 rounded-xl w-[45%] puy-6 px-10 bg-[#EDB864] max-sm:w-full '>
            <h2 className='text-3xl font-semibold '> 0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
