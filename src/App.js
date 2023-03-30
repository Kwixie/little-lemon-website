import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Karla",
  },
  palette: {
    primary: {
      main: "hsl(160, 13%, 33%)",
    },
    secondary: {
      main: "#f4ce14",
    },
    info: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routing />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
