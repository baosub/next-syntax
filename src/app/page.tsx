'use client'
import React from 'react'
import { useRouter } from 'next/navigation'




const Home = () => {
  const router = useRouter()
  return (
    <>
      <h2>Home</h2>
      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>

    </>
  )
}

export default Home
