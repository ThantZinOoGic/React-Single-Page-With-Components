import React from 'react'
import blog from './blog.svg';

export default function  HomeSection() {
  return (
        <div className='col-8 mx-auto'>
        <div className='row align-items-center mt-3' id='home'>

        <div className='col-12 col-md-8'>
            <p className='text-center'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen b
            </p>
        </div>
        <div className='col-12 col-md-4'>
            <img src={blog}></img>
        </div>
        </div>
    </div>
  )
}
