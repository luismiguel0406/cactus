import React from "react";
import Routers from "./Route";
import AnimationThemeProvider from "./_helper/AnimationTheme/AnimationThemeProvider";
import CustomizerProvider from "./_helper/Customizer/CustomizerProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'animate.css';

//create a client
const queryClient = new QueryClient();
const App = () => (
  <div className="App">
    <QueryClientProvider client={queryClient}>
      <CustomizerProvider>
        <AnimationThemeProvider>
          <Routers />
        </AnimationThemeProvider>
      </CustomizerProvider>
    </QueryClientProvider>
    <ToastContainer />
  </div>
);

export default App;
