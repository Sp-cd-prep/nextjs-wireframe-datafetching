"use client"
import React from 'react'
import useCustomCounter from '@/components/useCustomCounter';

const FirstComponent = () => {

    const clickedOne = useCustomCounter(0,"FirstComponent")

  return (
    <div>
        <h2>This is my first component</h2>
        <button onClick={clickedOne}>Click</button>
    </div>
  )
}

export default FirstComponent