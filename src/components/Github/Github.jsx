import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //is faster as it starts to load the data when we hover and stores the data in a cache to retreive it faster the next time.
    const data = useLoaderData();

    //was slower as it needed to retieve all the data from the api again and again
    // const [data, setData] = useState([]);
    
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/muneeb-ahmad-404')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);  
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'>
        <div className='flex justify-center'>
            <img  src={data.avatar_url} alt='git picture' width={300}></img>
        </div>
        Github Followers: {data.followers}
        <h2>Bio: {data.bio}</h2>
        </div>
  )
}

export default Github

export const githubInfoLoader = async () => {

    const response = await fetch('https://api.github.com/users/muneeb-ahmad-404');
    return response.json();
}