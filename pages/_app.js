import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import AuthProvider from "../context/AuthProvider";
import WeatherProvider from "../context/WeatherProvider";
function MyApp({ Component, pageProps }) {
  return (
    // AuthProvider is the context provider for the application allow to access values from the context
    <AuthProvider>
      <WeatherProvider>
        <Component {...pageProps} />
      </WeatherProvider>
    </AuthProvider>
  );
}

export default MyApp;
