import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Dashboard() {
  const router = useRouter();
  useEffect( ()=> {
    let loginStatus = localStorage.getItem('user_id')
    if(!loginStatus){
      router.push('/login')    
    }
  })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard