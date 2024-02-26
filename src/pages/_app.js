import AuthProvider from "@/components/context/AuthContext";
import store from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <AuthProvider>
          <Toaster position="top-right" />
          {getLayout(<Component {...pageProps} />)}
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}
