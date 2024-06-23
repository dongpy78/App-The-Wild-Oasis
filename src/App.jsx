import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyleApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Heading as="h1">The Will Oasid</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Heading as="h3">Forms</Heading>
        <Input type="number" placeholder="Number of guest" />
        <Input type="number" placeholder="Number of guest" />
      </StyleApp>
    </>
  );
}

export default App;
