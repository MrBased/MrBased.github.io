import React from 'react'
import RepoBtn from './RepoBtn'

export default function ProjectCard({ title, desc, src }) {
  return (
    <div className='p-4'>
      <div className='cont flex flex-col container mx-auto border rounded-lg h-80 w-96 p-3 items-center'>
        <p className='text-3xl pt-3 font-bold'>{title}</p>
        <div className='flex p-6'>
          <div className='flex flex-col items-center justify-center w-full'>
            <img src={src} alt='logo' className='h-24 rounded-xl' />
          </div>
        </div>
        <div className='h-full'>
          <p className='text-lg'>{desc}</p>
        </div>
        <RepoBtn></RepoBtn>

      </div>
    </div>
  )
}
