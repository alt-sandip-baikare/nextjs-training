import React, { useEffect } from 'react'
import { useRouter} from 'next/router'
import Link from 'next/link';

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout( ()=>{
            router.push('/');
        }, 5000 );
    }, [])
    
  return (
    <div>
        <h1>Page not found.</h1>
        <p>Click on the Back to home button or it will be 
            automatically go on the home page after 5 seconds</p>
        <Link href='/'> Back to Home </Link>
    </div>
  )
}

export default NotFound