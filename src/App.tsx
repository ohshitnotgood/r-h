import { createSignal, type Component } from 'solid-js';

import Intro from './components/Intro';
import Education from "./components/Education";
import Experience from "./components/Experience";
import Volunteering from "./components/Volunteering";
import Outro from "./components/Outro";

const App: Component = () => {
    const [d1Class, setD1Class] = createSignal("col col-full")
    const [d2Class, setD2Class] = createSignal("col col-fit")
    const [d3Class, setD3Class] = createSignal("col col-fit")
    const [d4Class, setD4Class] = createSignal("col col-fit")
    const [d5Class, setD5Class] = createSignal("col col-fit")


    const [d1Hidden, setD1Hidden] = createSignal(false);
    const [d2Hidden, setD2Hidden] = createSignal(true);
    const [d3Hidden, setD3Hidden] = createSignal(true);
    const [d4Hidden, setD4Hidden] = createSignal(true);
    const [d5Hidden, setD5Hidden] = createSignal(true);

    function resetAllWidthToDefault() {
        setD1Class("col col-fit")
        setD2Class("col col-fit")
        setD3Class("col col-fit")
        setD4Class("col col-fit")
        setD5Class("col col-fit")

        setD1Hidden(true)
        setD2Hidden(true)
        setD3Hidden(true)
        setD4Hidden(true)
        setD5Hidden(true)
    }

    function onClickD1() {
        resetAllWidthToDefault()
        setD1Hidden(false)
        setD1Class("col col-full")
    }

    function onClickD2() {
        resetAllWidthToDefault()
        setD2Hidden(false)
        setD2Class("col col-full")
    }

    function onClickD3() {
        resetAllWidthToDefault()
        setD3Hidden(false)
        setD3Class("col col-full")
    }

    function onClickD4() {
        resetAllWidthToDefault()
        setD4Hidden(false)
        setD4Class("col col-full")
    }

    function onClickD5() {
        resetAllWidthToDefault()
        setD5Hidden(false)
        setD5Class("col col-full")
    }


    return (
        <div class='flex flex-row'>
            <div class={d1Class()} onClick={onClickD1}>
                <Intro hidden={d1Hidden()} lang="en"/>
            </div>
            <div class={d2Class()} onClick={onClickD2}>
                <Education hidden={d2Hidden()}/>
            </div>
            <div class={d3Class()} onclick={onClickD3}>
                <Experience hidden={d3Hidden()}/>
            </div>
            <div class={d4Class()} onclick={onClickD4}>
                <Volunteering hidden={d4Hidden()}/>
            </div>
            <div class={d5Class()} onclick={onClickD5}>
                <Outro hidden={d5Hidden()}/>
            </div>
        </div>
    );
};

export default App;
