import * as React from 'react';
import { render } from 'react-dom';
import Banner from './components/Banner';

import './styles.css';

function App() {
	return (
		<div className="App">
			<Banner
				title={'Hello CodeSandbox'}
				subtitle={'Start editing to see some magic happen!'}
			/>
			<div className="container d-flex flex-row mt-5">
				<h1>Start editing here...</h1>
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
