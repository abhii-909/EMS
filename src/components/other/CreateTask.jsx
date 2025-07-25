import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a ui design' />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Assign To</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Employee Name' />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Design/Dev/etc' />
                </div>
            </div>

            <div className='w-1/2 flex flex-col items-start'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea className='w-[600px] h-55 text-sm py-2 px-4 rounded outline-none border-[1px] bg-transparent border-gray-400' name="" id=""></textarea>
                </div>
            </div>

            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </form>
      </div>
  )
}

export default CreateTask
