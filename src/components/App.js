import React, { useState } from "react";
import { FileProvider } from "../contexts/file";
import Form from "./Form";

function App() {
  const [file, setFile] = useState([]);

  return (
    <FileProvider value={file}>
      <h1>GPM YIR</h1>
      <Form />
    </FileProvider>
  );
}

export default App;
