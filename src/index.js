import ReactDOM from "react-dom";
import { IndexContextProvider } from "./store/index-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <IndexContextProvider>
    <App />
  </IndexContextProvider>,
  document.getElementById("root")
);
