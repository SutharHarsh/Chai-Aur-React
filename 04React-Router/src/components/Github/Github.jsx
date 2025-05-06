import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/SutharHarsh`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setData(res)
        })
    }, [])

  return (
    <>
      <div className='flex justify-center items-center bg-gray-700'>
        <img src={data.avatar_url} width={200} className='rounded-lg m-4' alt="" />
        <h1 className='m-4 text-white'>Github Followers: {data.followers}</h1>
      </div>
     
    </>
  )
}

export default Github
