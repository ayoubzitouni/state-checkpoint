import React, { createRef } from 'react'
import './profile.css'






export default class profile extends React.Component{

  constructor(props){
    super(props);
    this.state=({time:0})
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({time:this.state.time+1})
      console.log(this.state.time)   
      console.log("test")
    }, 1000);
       
  }
  render(){
  return (
    <div className='profile'>
        <img src={this.props.imgSrc} alt="profile picture"/>
        <h1>{this.props.fullName}</h1>
        <h3>{this.props.profession}</h3>
        <p>{this.props.bio}</p>
        <p>{Math.floor(this.state.time/60)} : {Math.floor(this.state.time%60)} s</p>
    </div>
  )
  }
  
}
