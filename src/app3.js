
import Welcome from './welcome';

function withStyles (Componnent) {
return (props) => {
  const style = {
    color: "red",
    fontSize: "lem",
  ...props.style,
  };
  return <Componnent {...props} style={style} />;
};
}
const Text = ({ style = {} }) => (
  <p style={{...style, fonFamily: "Inter" }}>Hello world!</p>
);
const StyledText = withStyles(Text); 

export default function App () {
  return (
    <div className='App'>
      <Welcome name="Neo" />
      <Text />
      <StyledText />
    </div>
  );
}