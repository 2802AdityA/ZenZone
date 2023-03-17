import React from "react";


function Output(props) {
    const { value } = props;

    return value === 1 ? (
        <div>
            <h1>You Need Treatment</h1>
        </div>
    ) : (
        <div>
            <h1>You Don't Need Treatment</h1>
        </div>
    )
}

export default Output;
