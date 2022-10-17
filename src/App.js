import './App.css';
import Profile from './components/profile'
import React from 'react';





export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({shows:false});
  }
  toggle=()=>{
    this.setState({shows:!this.state.shows})
    console.log(this.state.shows)
  }
  render(){
    return(
      <div className="App">
        
        <button onClick={this.toggle}>toggle</button>
        {this.state.shows?<Profile fullName="Ayoub" profession="student" bio="hi i'am ayoub" imgSrc="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>:null} 
      </div>
    );
  }
}
