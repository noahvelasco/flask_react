import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';


export default class Visualizer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 'Submit', // this is how the page knows you submitted    
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
        
        //----------------------1) ADD PACKET TO TABLE
        fetch("/add", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(this.state.value)
            }
        ).then(response => {
        
        })

        

    }//handle submit
    
    render(){
        return(
            <div>

                <form onSubmit={this.handleSubmit} action="http://localhost:5000/add" method="post">
                    <label>
                        ID:
                        <input type="text" name="id_" />
                    </label>

                    <label>
                        DATA:
                        <input type="text" name="data_" />
                    </label>

                    <input type="submit" name = "Submit" onChange={this.handleChange} value={this.state.value}/>
                </form>

                <Table style={{border: "1px solid",backgroundColor: "lightblue", margin: "20px"}} action="http://localhost:5000/get" method="get">
                    <thead style={{border: "1px solid", margin:"500px"}}>
                        <tr style={{border: "1px solid",margin:"500px"}}>
                            <th>ID</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody id='pkt'>
                    </tbody>
                </Table>
                
            </div>

        );}
}