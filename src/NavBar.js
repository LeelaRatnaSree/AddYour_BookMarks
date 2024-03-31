import React, { Component } from 'react'
import AddNewBookMark from './AddNewBookMark'
import Card from './Card'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <div style={{color:'white',backgroundColor:'#42618f',border:'2px solid black',fontSize:25,paddingBottom:'10px'}}> Book Mark Manager </div>
        <AddNewBookMark/>
        
      </div>
    )
  }
}

export default NavBar
