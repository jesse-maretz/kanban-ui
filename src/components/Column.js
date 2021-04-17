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
        let card_id = e.dataTransfer.getData('card_id')
        let card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
    }

    dragOver = (e) => {
        e.preventDefault();
    }



    render() {
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                onDrop={this.drop}
                onDragOver={this.dragOver}>
                <h2>{this.props.status}</h2>

                <div>
                    {
                    this.state.tasks.length ?
                    this.state.tasks.map((task, i)=>{
                        console.log(task)
                        return <div key={i}>
                            {task.title}<br/>
                            {task.assignee}<br/>
                            {task.description}<br/>
                            {task.dateDue}<br/>
                            </div>
                    }) : ""
                    }
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Column