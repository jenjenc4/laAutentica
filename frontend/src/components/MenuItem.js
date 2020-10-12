import React from 'react'

const menuItem = {
    a: 'somestring',
    b: 42,
    c: false
  };
const MenuItem = (props) => {
   //now that i have an array of strings, i can loop thru the array 
   //and access the properties of the objects...give me an array of strings
   console.log(Object.keys(menuItem)); 
   const keys= Object.keys(props.MenuItem)
    keys.forEach(key =>console.log(menuItem[key]))

    return (
        <div>{props.MenuItem.name}</div>
    )
}

export default MenuItem;