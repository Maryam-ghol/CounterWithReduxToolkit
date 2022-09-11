import {  useState } from "react";
import { useDispatch } from "react-redux";
import { inserttext } from "../features/childslice"

function ChildNum1() {
    const [textVlue, setTextValue] = useState("");
    const dispatch=useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(inserttext({
            childtext:textVlue,
        })

        )
    }
    return (
        <div>
            <h1>
                Hello Child Number1
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>
                    Input the value you want to see in child 2 Component
                </h3>
                <input type="name" placeholder="Text"
                    value={textVlue} onChange={(e) => setTextValue(e.target.value)} />

                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default ChildNum1;