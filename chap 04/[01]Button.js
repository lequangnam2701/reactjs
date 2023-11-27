import { useState } from "react";

export default function Myapp() {
    return (
        <div> 
            <h1>Counter that update  seperateli</h1>
            < MyButton/>
            < MyButton/>
        </div>
    );
}
 function MyButton () {
    const [count, setCount] = useState(0);

    function handleCilck() {
        setCount(count + 1);
    }
     return (
        <button onClick={handleCilck}>
            Clicked {count} times
        </button>
     );
 }