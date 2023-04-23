import "@/styles/globals.css";
import { ThemeProvider } from "../../context";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
