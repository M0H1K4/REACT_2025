import React from 'react'

export default function TestComponent({text, image}) {
  return (
    <div>
        <h1>{text}</h1>
        <img src={image} alt="" />
    </div>
  )
}
