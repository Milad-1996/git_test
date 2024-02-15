import React from 'react'
import { useParams } from 'react-router-dom'

export default function MainCourse() {

    let param = useParams()
    console.log(param);
  return (
    <div>MainCourse</div>
  )
}
