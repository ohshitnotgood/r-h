/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import {Route, Router, Routes} from "@solidjs/router";
import Acknowledgements from "./components/credits/Acknowledgements";
import TestView from "./components/TestView";
import {Error404} from "./components/404";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
      'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>
    <Router>
        <Routes>
            <Route path={"/"} component={App}/>
            <Route path={"/credits"} component={Acknowledgements} />
            <Route path={"*"} component={Error404} />
            <Route path={"/test"} component={TestView} />
        </Routes>
    </Router>, root!);
