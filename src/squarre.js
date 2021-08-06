import React from "react";

class Squarre extends React.Component {
    render() {
        return(
            <button className="square">
                {this.props.value}
            </button>

        );
    }
}
export default Squarre;