import React, { createContext, useContext, useEffect, useState } from "react";
import { IApp, IService } from "../interfaces/@types";

const AppContext = createContext<IApp>({} as IApp);

// hooks
export function useAppContext() {
  return useContext(AppContext) as IApp;
}

type AppCtxProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

const AppProvider: React.FC<AppCtxProviderProps> = ({ children }) => {
  const [services, setServices] = useState<IService[]>([]);

  /**
   *
   * @param {string} id > identificador único para buscar entre los servicios
   * @returns {IPizza}  > returns una pizza del catálogo
   */
  const getService = (id: string): IService => {
    const service  = services.find((service) => service.id === id) as IService;
    return service;
  };

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <AppContext.Provider
      value={{
        services,
        getService
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
