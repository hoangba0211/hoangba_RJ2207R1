import { useRouter } from 'next/router'
import React from 'react'

function CategotyID() {
    const router = useRouter();
    const {pid, categotyID} = router.query
  return (
    <div>
        <p>PID: {pid}</p>
        <p>Cate ID: {categotyID}</p>  
    </div>
  )
}

export default CategotyID