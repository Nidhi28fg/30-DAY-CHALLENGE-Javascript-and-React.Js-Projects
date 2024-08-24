import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]) // useEffect works when the component reloads. In this example, the component is Github.jsx. When the component reloads, the data is retrieved from the server.
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Nidhi28fg')
    //  .then(response => response.json()) // When you fetch data from a server, all the data comes in the response. You can then convert the data to json format, which is a standard format for transmitting data objects.
    //  .then(data => {
    //     console.log(data);
    //     setData(data) //All the data will be passed into setData.
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} /> // The data.avatar_url property contains the URL of the image to display. The image is fetched from the URL and displayed on the page.
    </div>
  )
}

export default Github
// API called here. 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
