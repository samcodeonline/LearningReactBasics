// "use client";
// import React, { useState } from 'react'
// import Header from '@/Components/Header';
// const page = () => {
//   return (
//     <>
//     <center><h1 style={{color:"blueviolet"}}>This is our home page</h1></center>
//     <Header/>
   
//     </>
//   )
// }

// export default page


// "use client";

// import React, { useState } from 'react'
// import Header from '@/Components/Header'
// const page = () => {
//   const [developer, setdeveloper] = useState("yumna sohail");
//   return (
//     <Header webdev={developer}/>
//   )
// }

// export default page
"use client";
import axios from 'axios';
import React, { useState } from 'react'

const page = () => {
  const [image, setimage] = useState([])
  const getImg = async () =>{ 
    try {
      const responce = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      var data = responce.data
      setimage(data)
      console.log(image)
    } catch (error) {
        console.error("error fetching images")
    }
   }
  return (
    <>
      <button onClick={getImg} className='imageBtn'>
        get images!!
      </button>

      <div className='mapFunction'>
        {image.map((elem,i)=>{
          return <img 
            key={i}           
            src={elem.download_url}
            width={300}
            height={400}
            />


         
        })}
      </div>
    </>
    
  )
}

export default page