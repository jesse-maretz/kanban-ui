import React, { Component } from 'react';

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }
    
    componentDidMount = () => {
        let url = ""
        fetch(url)
            .then(res => res.json())
            .then(tasks=>{
                console.log(tasks)
                this.setState({tasks: tasks})
            })
    }



    drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    dragOver = (e) => {
        e.preventDefault();
    }



    render() {
        return (
            <div>
                <h2>{this.props.status}</h2>
            </div>
        )
    }
}

export default Column