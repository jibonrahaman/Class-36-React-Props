import React from 'react'

function Child3(props) {
    const {name,Roll,Department,phone}=props.item;
  return (
    <div className="Child3">
    <article className='article'>
        <h1 style={{background:'black',color:'white',textAlign:'center'}}>CHild 3</h1>
    <h2 className='h2'>First Child : {name}</h2>
    <h2 className='h2'>Roll : {Roll}</h2>
    <h2 className='h2'>Department : {Department}</h2>
    <h2 className='h2'>Phone : {phone.office}</h2>
    <h2 className='h2'>Phone : {phone.home}</h2>
    </article>
 </div>
  )
}

export default Child3