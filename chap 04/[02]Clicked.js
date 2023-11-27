import { useState } from "react";

export default function Myapp() {
    const [count, setCount]  =  useState(0);

    function handleCilck() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count that update together</h1>
            <MyButton count= {count} onClick={handleCilck}/>
            <MyButton count= {count} onClick={handleCilck}/>
        </div>
    );
} 
function MyButton({ count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}