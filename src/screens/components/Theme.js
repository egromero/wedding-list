import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#fcb7af",
      contrastText: "#fff",
    },
    complement: {
      main: "#d8f8e1",
      contrastText: "#fff",
    },
  },
});

export default theme;
