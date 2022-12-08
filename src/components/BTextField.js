import React from 'react'

const TextField = ({ lable, inputProps, onChange, value }) => {
    return (
        <div className='flex flex-col'>
            <lable className='mb-2 text-base text-gray-800' >{lable}</lable>
            <input className='bg-gray-200 py-2 px-3 border-2 outline-none' {...inputProps} onChange={onChange} value={value}>
            </input>
        </div>
    )
}

export default TextField
