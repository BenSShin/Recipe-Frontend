import { Content } from "./Content/Content";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
