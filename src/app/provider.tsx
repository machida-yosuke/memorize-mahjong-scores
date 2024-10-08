import { theme } from "@/themes";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";
import { HelmetProvider } from "react-helmet-async";
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Provider>{children}</Provider>
      </ChakraProvider>
    </HelmetProvider>
  );
};
