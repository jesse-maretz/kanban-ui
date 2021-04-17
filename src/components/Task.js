import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props)
    }

    dragStart = (e) => {
        let target = e.target;
        e.dataTransfer.setData('card_id', target.id)
        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }

    dragOver = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <div
                draggable="true"
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                className={this.props.className}
                id={this.props.id}
            >
                <p>Task 1</p>
                {this.props.children}
            </div>
        )
    }
}

export default Task