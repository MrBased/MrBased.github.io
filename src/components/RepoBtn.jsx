import React from 'react'

export default function RepoBtn({ _href }) {
  return (
    <button className='bg-blu hover:bg-blu-700 text-white font-bold py-2 px-4 rounded'>
        <a target='_blank' href={_href}>Repo</a>
    </button>
  )
}
//'https://github.com/open-source-uc/UbiCate-v2'
