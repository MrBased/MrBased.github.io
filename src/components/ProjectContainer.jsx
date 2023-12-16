import React from 'react'

export default function ProjectContainer({ children }) {
    return (
        <div className='flex flex-row flex-wrap place-content-center'>
            {children}
        </div>
    )
}
