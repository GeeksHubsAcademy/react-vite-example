import { useState } from "react";
import Number from "./Number.jsx";


function Counter(props) {
    let state = useState(0);
    const number = state[0];
    const setNumber = state[1];

    console.log('rendering Counter', number);


    return (
        <span onClick={() => setNumber(number + 1)   }>
            <Number>{number}</Number> {props.what}
        </span>
    )
}


export default Counter;