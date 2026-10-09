import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import init, { set_panic_hook } from "letsmarkdown-wasm";
import wasmUrl from "letsmarkdown-wasm/letsmarkdown_wasm_bg.wasm?url";
import App from "./App";
import "./index.css";

init(wasmUrl).then(() => {
  set_panic_hook();
  ReactDOM.render(
    <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StrictMode>,
    document.getElementById("root")
  );
});
