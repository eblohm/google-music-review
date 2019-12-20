import React from "react";

const FileContext = React.createContext();

export default FileContext;
export const FileConsumer = FileContext.Consumer;
export const FileProvider = FileContext.Provider;
