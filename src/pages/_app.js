import MainLayout from "@/Layout/MainLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ThemeProvider>
      <Provider store={store}>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
