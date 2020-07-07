import React, { Component } from "react";
import {Table, Form, Button} from 'react-bootstrap';

export default class Schedule1 extends Component {


  constructor(props){
    super(props);
    
    this.state = { confirmation:false,
      crewSchedule: [], // list is empty in the beginning
          error: false};
  }

 
  
 componentDidMount() {
     this.getUserList(); // function call
 }

 getUserList = async () => {
     try { //try to get data
         const response = await fetch("http://3.226.60.177:8080/retrieveSchedule", {
         mode: 'cors', 
         headers: {
           'Content-Type': 'application/json',
          
          'Access-Control-Allow-Origin': '*'

           
         },
               });
         if (response.ok) { // ckeck if status code is 200
             const data = await response.json();
             console.log("DATA:.......",data);
             this.setState({...this.state, crewSchedule: data});
         } else { this.setState({...this.state, error: true }) }
     } catch (e) { //code will jump here if there is a network problem
 this.setState({ ...this.state, error: true });
 console.log(e);
 
}
};

    render() {
      
 return (
   
<div className="schedule1-component m-4 p-4">
{
  this.state.confirmation && <span style={{ color: 'blue' }} > schedule(s) broadcasted !</span> }

<h2 id="crewDashBoardTitle">Schedule Suggestion 1</h2>
 <Table  border="1">
  <thead>
    <tr>
      <th>Employee</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
      <th>Sunday</th>
    </tr>
  </thead>
  <tbody>


 
 
  {this.state.crewSchedule && this.state.crewSchedule.map(schedule => (
    <tr key={schedule}>
     
      <td>{schedule.name}</td>
      <td>{schedule.mon}</td>
      <td>{schedule.tues} </td>
      <td> {schedule.wed} </td>
      <td> {schedule.thrus} </td>
      <td> {schedule.fri} </td>
      <td> {schedule.sat} </td>
      <td> {schedule.sun} </td>
 
      </tr>
            ))}
       
    
    
    
    
  </tbody>
 </Table> 
 
</div>
);
    }
}
