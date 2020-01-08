import React from "react";

const UserDataContext = React.createContext();

export default UserDataContext;
export const UserDataConsumer = UserDataContext.Consumer;
export const UserDataProvider = UserDataContext.Provider;
