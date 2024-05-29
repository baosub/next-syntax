import React from 'react'
import Image from 'next/image'
import black from './black.jpg'



const page = () => {
  return (
    <>
    <Image
     src={black}
     alt="Picture of the author"
      width={500}
     height={500} 
     // blurDataURL="data:..." automatically provided
     // placeholder="blur" // Optional blur-up while loading
    />
      
    </>
  )
}

export default page
