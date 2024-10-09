import { Outlet } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";
import { AppHeader } from "./AppHeader";

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96000f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;

