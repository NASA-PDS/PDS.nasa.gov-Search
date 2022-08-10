import Content from './components/content/Content';
import store from './store/store';
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <Content/>
        </ThemeProvider>
    </Provider>
  );
}

export default App;
