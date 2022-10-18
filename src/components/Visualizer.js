import React, { Component } from 'react'

export default class Visualizer extends Component {


    render(){

        return(
                {/* <form action="{{ url_for("add")}}" method="post"> */}
                
                <div>
                    <form method="post">
                        <label for="firstname">First Name:</label>
                        <input type="text" id="firstname" name="fname" placeholder="firstname"></input>
                        <label for="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lname" placeholder="lastname"></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
        )
    }
}