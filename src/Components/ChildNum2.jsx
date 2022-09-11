import { actchild } from "../features/childslice";
import { useSelector } from "react-redux";

function ChildNum2() {

    const textValue = useSelector(actchild);
    return (
        <div>
            <h1>
                Hello Child 2
            </h1>
            <h3>The value which is inserted in the component Child 1 is :</h3>
            {textValue.childtext.childtext}
        </div>
    );
}

export default ChildNum2;