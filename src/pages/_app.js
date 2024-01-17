import MainLayout from "@/Layout/MainLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Toaster />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  );
}
