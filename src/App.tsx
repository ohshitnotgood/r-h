import {createSignal, type Component, createEffect} from 'solid-js';

import Intro from './components/intro/Intro';
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Volunteering from "./components/Volunteering";
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

    let introSection: HTMLDivElement
    let experienceSection: HTMLDivElement
    let volunteeringSection: HTMLDivElement
    let educationSection: HTMLDivElement
    let otherSection: HTMLDivElement


    let [currentPosition, setCurrentPosition] = createSignal("intro")

    const position = createScrollPosition()
    createEffect(() => {
        // if (position.y > introSection.clientHeight) navBar_Experience.scrollIntoView({behavior: 'smooth'})
        if (position.y < introSection.clientHeight) setCurrentPosition("intro")
        else if (position.y < experienceSection.clientHeight + introSection.clientHeight) setCurrentPosition("experience")
        else if (position.y < educationSection.clientHeight + experienceSection.clientHeight + introSection.clientHeight) setCurrentPosition("education")

    })

    return (
        <div>
            <div class="max-lg:hidden relative">
                <div>
                    <div class='lg:flex lg:flex-row lg:w-screen max-lg:hidden'>
                        <Intro initialDelay={2100} lang={lang()} setLang={setLang} hidden={d1Hidden()} onclickAction={onClickD1}/>
                        <Experience initialDelay={2400} lang={lang()} hidden={d3Hidden()} onclickAction={onClickD3}/>
                        <Education initialDelay={2500} lang={lang()} hidden={d2Hidden()} onclickAction={onClickD2}/>
                        <Volunteering initialDelay={2600} lang={lang()} hidden={d4Hidden()} onclickAction={onClickD4}/>
                        <Outro initialDelay={2700} lang={lang()} hidden={d5Hidden()} onclickAction={onClickD5}/>
                    </div>
                </div>
                <div class="w-screen z-50 h-screen bg-white grid place-content-center absolute top-0 left-0 pointer-events-none loading-screen-animation">
                    <img alt="Spinning progress bar" class="animate-spin" src={loadingIcon}/>
                </div>
            </div>
            <div class="lg:hidden">
                <MobileNavBar currentPosition={currentPosition()} />
                <MobileIntro lang={lang()} ref={introSection!}/>
                <MobileExperience lang={lang()} ref={experienceSection!}/>
                <MobileEducation lang={lang()} ref={educationSection!}/>
            </div>
        </div>
    );
};

export default App;
