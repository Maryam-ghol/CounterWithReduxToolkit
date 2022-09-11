import { useState } from "react";

function ChildNum3({ handleSubmit }) {
    const [myText,setMyText]=useState("");
 
    return (
        <div>
            <h1>
                Child Number 3
            </h1>
            <h3>
                Please define a vlaue and press button to see the value in Parent Component
            </h3>
            <form onSubmit={(e) => handleSubmit(e,myText)}  >
                <input type="text"
                  onChange={event => setMyText(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ChildNum3;