import React from 'react'
import appwriteService from '../appwrite/configer'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  const imagePreviewUrl = featuredImage 
        ? appwriteService.getFilePreview(featuredImage)
        : "https://images.unsplash.com/photo-1686071932009-4a69b75f49a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVjdG9yJTIwaW1hZ2VzfGVufDB8fDB8fHww";

  console.log("featuredImage:", featuredImage);
  console.log("imagePreviewUrl:", imagePreviewUrl);
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={imagePreviewUrl} alt={title}
                className='rounded-xl' />    

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
