import React, { useState } from 'react'
import Input from './atoms/input'
import Button from './atoms/buttonClick'
const FacebookPost = () => {
  const [post , setPost] = useState("");
  const storedName = localStorage.getItem("name");
    
 
  return (
    <div className='postDivcontainer'>
        <div className='createPostDiv'>
            <Input Value={post} placeHolder={`What's on your mind, ${storedName}?`} onChange={(e) => setPost(e.target.value)} width={500} height={50} />
            <Button onClick={() => setPost} Value="submit" width={100} height={50} backgroundColor="black" />
        </div>
        <div className='postPlace'>
          <h1>{post}</h1>
        </div>
    </div>
  )
}

export default FacebookPost
