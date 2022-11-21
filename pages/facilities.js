import Link from 'next/link'
import React from 'react'

function facilities() {
  return (
    <div>
        <h1>Facilities</h1>

        <Link href="/facilities/lab"> Lab </Link>
        <Link href="/facilities/sport"> Sport </Link>
    </div>
  )
}

export default facilities