import './Contact.scss'
import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return(
            <div className="Contact">
                <div className="form"> 
                <h4>Name:</h4>
                <input class="input"  placeholder="Jimmy"></input>
                <h4>Email:</h4>
                <input class="input" placeholder="Jimmy@gmail.com"></input>
                <h4>Message:</h4>
                <textarea class="input" rows="12" cols="100" name="comment" form="usrform" placeholder="Enter your message here" >
                </textarea>
                <div className="button">Submit</div>
                </div>
            </div>
        )}}



export default Contact;
