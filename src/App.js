import "./App.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";

function App() {
  return (
    <div>
      <Wrapper>
        <Screen />
        <ButtonBox></ButtonBox>

        <h1>Hello</h1>
      </Wrapper>
    </div>
  );
}

export default App;
