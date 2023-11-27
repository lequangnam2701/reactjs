function MyButton() {
    function handleCilck () {
        alert('You clicked me ! ');
    }
    return (
        <button onClick={handleCilck}>
            ClickMe
        </button>

    );
}
export default function Myapp() {
    return (
        <div> 
            <h1> Welcome to my app</h1>
            <MyButton/>
        </div>
    );
}