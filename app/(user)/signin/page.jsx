import React from 'react'
import GithubSignin from '@/app/components/GithubSignin'

const page = () => {
  return (
    <div className='bg-black w-full h-dvh flex justify-center items-center'>
      
      <div className='w-2/5 h-dvh rounded-md flex flex-col gap-3 justify-start items-center p-9 bg-white mt-4'>

        <h1 className='font-thin text-3xl'>Sign In to Jottify</h1>

        <GithubSignin/>

      </div>
    </div>
  )
}

export default page