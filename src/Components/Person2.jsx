import React from 'react'

function Person2(props) {
    const {name,Roll,Department,phone}=props.item;
  return (
    <div className='Child2'>
       <article className='article2'>
       <h1 style={{background:'black',color:'white',textAlign:'center'}}>Child2</h1>
        <h2 className='h2'>Child2 :{name} </h2>
        <h2 className='h2'>Child2 :{Roll} </h2>
        <h2 className='h2'>Child2 :{Department} </h2>
        <h2 className='h2'>Child2 :{phone.office} </h2>
        <h2 className='h2'>Child2 :{phone.home} </h2>
       </article>
    </div>
  )
}

export default Person2