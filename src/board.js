import React from "react";


import Square from "./squarre";

class Board extends React.Component {
    renderSquarre(i) {
        return <Square value={i}/>;
    }
render() {
    const status = "Next player : x";
    return(
        <div>
            <div className="status">{status}</div>
            <div className="board-rom">
                {this.renderSquarre(0)}
                {this.renderSquarre(1)}
                {this.renderSquarre(2)}
            </div>
            <div className="board-rom">
                {this.renderSquarre(3)}
                {this.renderSquarre(4)}
                {this.renderSquarre(5)}
            </div>
            <div className="board-rom">
                {this.renderSquarre(6)}
                {this.renderSquarre(7)}
                {this.renderSquarre(8)}
            </div>
        </div>    
       );
    }
}

export default Board;