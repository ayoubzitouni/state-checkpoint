import React from 'react'
import './profile.css'






const profile = (props) => {
  return (
    <div className='profile'>
        <img src={props.imgSrc} alt="profile picture"/>
        <h1>{props.fullName}</h1>
        <h3>{props.profession}</h3>
        <p>{props.bio}</p>
    </div>
  )
}

export default profile