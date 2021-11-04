/* Libraries */
import { HashRouter as Router, Route } from 'react-router-dom';

/* Styling */
import './App.css';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/* Components */
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TwoPigments from '../TwoPigments/TwoPigments';

/* Generate own Material-UI theme */
const customTheme = createTheme({
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header />
      <Footer />
      <Router>
        <Route exact path="/">
          <TwoPigments />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
