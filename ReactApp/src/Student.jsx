import React from 'react'
function Student(props) {
  return (
    <div className='container'>
        <h1> Student information </h1>
        <div className='box1'>
          <h2> {props.name1} </h2>
          <p>Course:  {props.course1} </p>
          <p>Marks: {props.marks1} </p>
        </div>
        <div className='box2'>
          <h2> {props.name2} </h2>
          <p>Course: {props.course2} </p>
          <p>Marks: {props.marks2} </p>
        </div>
        <div className='box3'>
          <h2> {props.name3} </h2>
          <p>Course: {props.course3} </p>
          <p>Marks:  {props.marks3} </p>
        </div>
    </div>
  )
}

export default Student
