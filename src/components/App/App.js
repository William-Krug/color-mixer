/* Libraries */

/* Styling */
import './App.css';
import { CssBaseline, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/* Components */
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PigmentColors from '../PigmentColors/PigmentColors';

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
  // components: {
  //   MuiDivider: {
  //     StyleOverrides: {
  //       root: {
  //         fontWeight: 700,
  //         fontSize: '1em',
  //         light: 'true',
  //         color: '#ffffff',
  //       },
  //     },
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header />
      <PigmentColors />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
