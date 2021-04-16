import React, { Component } from 'react';
const axios = require("axios");


class NewTask extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        axios
            .post("")
            .then(() => {
                console.log('form submitted')
                window.location.rreload()
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
                        <input type="text"/>
                    </div>

                    <div>
                        <label>Description: </label>
                        <input type="text"/>
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