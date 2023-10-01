import { BrowserRouter } from "react-router-dom";
import GlobalRoute from "./navigation/GlobalRoute";

function App() {
  return (
    <BrowserRouter>
      <GlobalRoute />
    </BrowserRouter>
  );
}

export default App;
