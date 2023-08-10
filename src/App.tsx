import {createSignal, type Component, createEffect} from 'solid-js';

import Intro from './components/intro/Intro';
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Volunteering from "./components/volunteering/Volunteering";
import Outro from "./components/outro/Outro";
import MobileIntro from "./components/mobile/MobileIntro";
import MobileExperience from "./components/mobile/MobileExperience";
import MobileNavBar from "./components/mobile/MobileNavBar";
import {createScrollPosition} from "@solid-primitives/scroll";
import {MobileEducation} from "./components/mobile/MobileEducation";
import loadingIcon from "./assets/icons/ic_progress.svg"

const App: Component = () => {
    const [d1Hidden, setD1Hidden] = createSignal(false);
    const [d2Hidden, setD2Hidden] = createSignal(true);
    const [d3Hidden, setD3Hidden] = createSignal(true);
    const [d4Hidden, setD4Hidden] = createSignal(true);
    const [d5Hidden, setD5Hidden] = createSignal(true);

    const [lang, setLang] = createSignal("en")

    const [sectionIndex, setSectionIndex] = createSignal(0)

    let didChangeColor = false

    let p = Math.floor(Math.random() * 9 + 1)

    console.log("Palette selected: " + p)
    const [palette, setPalette] = createSignal(p)

    function resetAllWidthToDefault() {
        setD1Hidden(true)
        setD2Hidden(true)
        setD3Hidden(true)
        setD4Hidden(true)
        setD5Hidden(true)
        // setPalette(Math.floor(Math.random() * 9 + 1))
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

    let introSection: HTMLDivElement
    let experienceSection: HTMLDivElement
    let volunteeringSection: HTMLDivElement
    let educationSection: HTMLDivElement
    let otherSection: HTMLDivElement


    let [currentPosition, setCurrentPosition] = createSignal("intro")

    const position = createScrollPosition()
    createEffect(() => {
        console.log("position: " + position.y)
        if (position.y < introSection.clientHeight) setCurrentPosition("intro")
        else if (position.y < experienceSection.clientHeight + introSection.clientHeight) setCurrentPosition("experience")
        else if (position.y < educationSection.clientHeight + experienceSection.clientHeight + introSection.clientHeight) setCurrentPosition("education")

        // if (position.y > introSection.clientHeight && !didChangeColor) {
        //     setPalette(Math.floor(Math.random() * 9 + 1))
        //     didChangeColor = true
        // }
        //
        // if (position.y === 0) {
        //     didChangeColor = false
        // }
    })

    return (
        <div>
            <div class="max-lg:hidden relative">
                <div>
                    <div class='lg:flex lg:flex-row lg:w-screen max-lg:hidden'>
                        <Intro palette={palette()} lang={lang()} setLang={setLang} hidden={d1Hidden()} onclickAction={onClickD1}/>
                        <Volunteering palette={palette()} initialDelay={2400} lang={lang()} hidden={d4Hidden()} onclickAction={onClickD4}/>
                        <Experience palette={palette()} initialDelay={2500} lang={lang()} hidden={d3Hidden()} onclickAction={onClickD3}/>
                        <Education palette={palette()} initialDelay={2600} lang={lang()} hidden={d2Hidden()} onclickAction={onClickD2}/>
                        <Outro palette={palette()} initialDelay={2700} lang={lang()} hidden={d5Hidden()} onclickAction={onClickD5}/>
                    </div>
                </div>
                <div class="w-screen z-50 h-screen bg-white grid place-content-center absolute top-0 left-0 pointer-events-none loading-screen-animation">
                    <img alt="Spinning progress bar" class="animate-spin" src={loadingIcon}/>
                </div>
            </div>
            <div class="lg:hidden">
                <MobileNavBar currentPosition={currentPosition()} />
                <MobileIntro palette={palette()} lang={lang()} ref={introSection!}/>
                <MobileExperience palette={palette()} lang={lang()} ref={experienceSection!}/>
                <MobileEducation palette={palette()} lang={lang()} ref={educationSection!}/>
            </div>
        </div>
    );
};

export default App;
