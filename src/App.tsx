import {createSignal, type Component, createEffect} from 'solid-js';

import Intro from './components/intro/Intro';
import Education from "./components/Education";
import Experience from "./components/experience/Experience";
import Volunteering from "./components/Volunteering";
import Outro from "./components/outro/Outro";
import ColumnSpacer from "./components/ColumnSpacer";
import TypingAnimation from "./components/TypingAnimation";
import {getAge} from "./functions/GetAge";
import Mobile from "./components/mobile/MobileIntro";
import MobileIntro from "./components/mobile/MobileIntro";
import MobileExperience from "./components/mobile/MobileExperience";
import MobileNavBar from "./components/mobile/MobileNavBar";
import {createScrollPosition} from "@solid-primitives/scroll";

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

    const position = createScrollPosition()
    createEffect(() => {
        console.log(position.y)
    })

    return (
        <div>
            <div class='lg:flex lg:flex-row lg:w-screen max-lg:hidden'>
                <Intro lang={lang()} setLang={setLang} hidden={d1Hidden()} onclickAction={onClickD1}/>
                <Experience lang={lang()} hidden={d3Hidden()} onclickAction={onClickD3}/>
                <Education lang={lang()} hidden={d2Hidden()} onclickAction={onClickD2}/>
                <Volunteering lang={lang()} hidden={d4Hidden()} onclickAction={onClickD4}/>
                <Outro lang={lang()} hidden={d5Hidden()} onclickAction={onClickD5}/>
            </div>
            <div class="">
                {/*Intro section*/}
                <MobileNavBar />
                <MobileIntro lang={lang()}/>
                <MobileExperience lang={lang()}/>
            </div>
        </div>
    );
};

export default App;
