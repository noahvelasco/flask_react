import React, { Component } from 'react'


export default class Visualizer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',        
            id: '',
            data: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("making request")
        fetch('/add')
          .then(response => {
            console.log(response)
            return response.json()
          })
          .then(json => {
          console.log=(json)
          this.setState({id: json[0]})
          }
          )
      }
    
    render(){
        return(
                <form onSubmit={this.handleSubmit} action="http://localhost:5000/add" method="post">
                    <label>
                        ID:
                        <input type="text" name="id_" />
                    </label>

                    <label>
                        DATA:
                        <input type="text" name="data_" />
                    </label>

                    <input type="submit" onChange={this.handleChange} value={this.state.value}/>
                </form>
        );}
}