import React from 'react'
import Link from 'next/link'
export const getStaticProps = () =>{
    return {
        props: {
            hideFooter: true
        }
    }
}
function lab(props) {
  return (
    <div>
        <h1>Lab</h1>

        <Link href="/facilities"> Back to Facilities </Link>

    </div>

  )
}

export default lab