import React, { Component } from 'react';
const axios = require("axios");
import DatePicker from "react-datepicker";


class NewTask extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        axios
            .post("mongodb://localhost:9000/tasks")
            .then(() => {
                console.log('form submitted')
                window.location.reload()
            })
    }

    

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>

                    <div>
                        <h3>New Task</h3>
                    </div>

                    <div>
                        <label>Assignee: </label>
                        <input type="text"/>
                    </div>

                    <div>
                        <label>Title: </label>
                        <input type="text" required />
                    </div>

                    <div>
                        <label>Description: </label>
                        <input type="text"/>
                    </div>

                    <div>
                        <label>Date Due: </label>
                        <input type="text" required/>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)} />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default NewTask