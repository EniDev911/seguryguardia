import React, { createContext, useContext, useEffect, useState } from "react";
import { IApp, Service } from "../interfaces/@types";

const AppContext = createContext<IApp>({} as IApp);

export function useAppContext() {
  return useContext(AppContext) as IApp;
}

type AppCtxProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

const AppProvider: React.FC<AppCtxProviderProps> = ({ children }) => {

  const [services, setServices] = useState<Service[]>([]);
  const [nameServices, setNameServices] = useState([]);

  useEffect(() => {
    fetch("./data/servicios.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.servicios),
        setNameServices(data.nombres)
      })
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <AppContext.Provider
      value={{
        services,
        nameServices
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
