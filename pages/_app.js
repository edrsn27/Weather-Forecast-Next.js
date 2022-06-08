import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import AuthProvider from "../context/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    // AuthProvider is the context provider for the application allow to access values from the context
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
