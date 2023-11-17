import './App.css';

function Welcome({ name }){
    return(
        <section>
            <h1>
                Hello, <span>{name}</span>🎉🎉
            </h1>
        </section>
    )
}

function withStyles(Component){
    return (props) => {
        const style = {
            color: "red",
            fontSize: "2em",

            ...props.style,
        };
        return <Component {...props} style={style} />;
    };
}

const Text = ({ style = {} }) => (
    <p style={{ ...style, fontFamily: "Inter" }}>Hello World!</p>
);

const StyledText = withStyles(Text);

function App(){
    return (
        <div className='App'>
            <Welcome name="Neo" />
            <Text />
            <StyledText />
        </div>
    )
}

export default App;
