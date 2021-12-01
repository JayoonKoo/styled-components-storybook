import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${p => p.theme.bodyBackgroundColor};
		min-height: 100vh;
		margin: 0;
		color: ${p => p.theme.bodyFontColor};
		font-family: 'Kaushan Script';
	}
`


function App() {
	const [theme, setTheme] = useState(LightTheme)
  return (
		<ThemeProvider theme={{...theme, setTheme: () => {
			setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
		}}}>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
  );
}

export default App;
