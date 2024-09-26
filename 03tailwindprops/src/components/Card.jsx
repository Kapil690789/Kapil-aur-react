import React from 'react'

function Card({username,btnText= "visit me"}) {
    console.log(username);
  return (
    <div>
     <h1 className='text-lg font-semibold text-white'> {username}</h1>
    </div>
  )
}

export default Card;
