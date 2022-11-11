import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import theme from "./components/globalStyles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* theme.js klasörümü buraya gönderdim  */}
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
