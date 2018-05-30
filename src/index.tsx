import { configure } from 'mobx';
// import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';

configure({ enforceActions: true });

// render
render(<App />, document.getElementById('root'));
