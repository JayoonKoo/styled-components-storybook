import {createGlobalStyle} from 'styled-components'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: white;
		min-height: 100vh;
		margin: 0;
		color: black;
		font-family: 'Kaushan Script';
	}
`

function App() {
  return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</>
  );
}

export default App;
