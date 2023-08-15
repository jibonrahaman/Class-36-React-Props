import React from 'react'
import Child1 from './Child1'
import Person2 from './Person2'
import Child3 from './Child3'
const Data=[
    {
    name:"Md Sajib",
    Roll:"10",
    Department:"Computer",
    phone:{
        office:"001",
        home:"002"
    }
},
{
    name:"Md Shahriar Ferdous",
    Roll:"01",
    Department:"Computer",
    phone:{
        office:"003",
        home:"00"
    }
},
{
    name:"Md Hasan",
    Roll:"05",
    Department:"Computer",
    phone:{
        office:"0",
        home:"22"
    }
}

]

const Person=[
    {
    name:"Md Rahman",
    Roll:"10",
    Department:"Computer",
    phone:{
        office:"001",
        home:"002"
    }
},
{
    name:"Md Shahriar",
    Roll:"01",
    Department:"Computer",
    phone:{
        office:"003",
        home:"00"
    }
},
{
    name:"Md Harry",
    Roll:"05",
    Department:"Computer",
    phone:{
        office:"0",
        home:"22"
    }
}

]
const child3=[
    {
    name:"Md Rahman",
    Roll:"10",
    Department:"Computer",
    phone:{
        office:"001",
        home:"002"
    }
},
{
    name:"Md Shahriar",
    Roll:"01",
    Department:"Computer",
    phone:{
        office:"003",
        home:"00"
    }
},
{
    name:"Md Harry",
    Roll:"05",
    Department:"Computer",
    phone:{
        office:"0",
        home:"22"
    }
}

]


function Parent() {
  return (
    <> 
    {
       Data.map((item,index)=> <Child1 item={item} />  )
       
    } 
   
{
    Person.map ((item,index)=>  <Person2 item={item} /> )
}
  {
    child3.map((item)=> <Child3 item={item} />)
  }

     </>
  )
}

export default Parent