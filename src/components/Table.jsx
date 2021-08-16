import React, { Component } from 'react'
import './Table.css'
export default class Table extends Component {
    constructor(props) {
        super(props)
            this.state = {
             star:this.props.stars,
             firstar:this.props.stars.filter((x,y)=>y<=4)
        }
    }
 getrandomstar=()=>{
    this.state.firstar.pop()
    let r = Math.round(Math.random() * this.state.star.length)
    this.state.firstar.push(this.state.star[r])
    this.setState({firstar:this.state.firstar})
 }
 sortbyname=()=>{
    this.setState({firstar:this.state.firstar.sort((a,b)=>(a.name>b.name)?1:((b.name>a.name)?-1:0))})
 }  
 sortbypopularity=()=>{
    this.setState({firstar:this.state.firstar.sort((a,b)=>(a.popularity-b.popularity))})
 } 
 delete(name){
    document.getElementById(name).remove()
 }
    render() {
        return (
            <div id="main">
                <header>ProStars</header>
                <div><button id="bstar" onClick={this.getrandomstar}>Get Random Contact</button>
                <button id="bname" onClick={this.sortbyname}>Sort By Name</button>
                <button id="bpop" onClick={this.sortbypopularity}>Sort By Popularity</button>
                </div>
                <table>
                    <tbody>
                    <tr><th>Picture</th>
                    <th id="name">Name</th>
                    <th>Popularity</th>
                    <th>Action</th></tr>
                {this.state.firstar.map((star)=>
                <tr key={star.name} id={star.name}><td id="img"><img src={star.pictureUrl} alt="img"/></td>
                   <td id="name">{star.name}</td>
                   <td id="popu">{star.popularity}</td>
                   <td><button id="delete" onClick={()=>this.delete(star.name)}>Delete</button></td></tr>                   
        )}</tbody>
                </table>
            </div>
        )
    }
}
