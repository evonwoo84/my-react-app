import React, { Component } from 'react';
import Square from "./Square";

class Board extends Component{
    renderSquare(i){
        return <Square value={i} />
    }

    render(){
        return(
            <div>
                <div className = "status">{this.props.status}</div>
                <div className = "board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
export default Board;