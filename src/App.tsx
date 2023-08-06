import { createSignal, type Component } from 'solid-js';

import Intro from './components/Intro';
import Education from "./components/Education";
import Experience from "./components/Experience";
import Volunteering from "./components/Volunteering";
import Outro from "./components/Outro";
import ColumnSpacer from "./components/ColumnSpacer";
import TypingAnimation from "./components/TypingAnimation";

const App: Component = () => {
    const [d1Hidden, setD1Hidden] = createSignal(false);
    const [d2Hidden, setD2Hidden] = createSignal(true);
    const [d3Hidden, setD3Hidden] = createSignal(true);
    const [d4Hidden, setD4Hidden] = createSignal(true);
    const [d5Hidden, setD5Hidden] = createSignal(true);

    const [lang, setLang] = createSignal("en")

    function resetAllWidthToDefault() {
        setD1Hidden(true)
        setD2Hidden(true)
        setD3Hidden(true)
        setD4Hidden(true)
        setD5Hidden(true)
    }

    function onClickD1() {
        resetAllWidthToDefault()
        setD1Hidden(false)
    }

    function onClickD2() {
        resetAllWidthToDefault()
        setD2Hidden(false)
    }

    function onClickD3() {
        resetAllWidthToDefault()
        setD3Hidden(false)
    }

    function onClickD4() {
        resetAllWidthToDefault()
        setD4Hidden(false)
    }

    function onClickD5() {
        resetAllWidthToDefault()
        setD5Hidden(false)
    }


    return (
        <div class='flex flex-row w-screen'>
            <Intro lang={lang()} setLang={setLang} hidden={d1Hidden()} onclickAction={onClickD1}/>
            <Experience lang={lang()} hidden={d3Hidden()} onclickAction={onClickD3}/>
            <Education lang={lang()} hidden={d2Hidden()} onclickAction={onClickD2}/>
            <Volunteering lang={lang()} hidden={d4Hidden()} onclickAction={onClickD4}/>
            <Outro lang={lang()} hidden={d5Hidden()} onclickAction={onClickD5}/>
        </div>
    );
};

export default App;
