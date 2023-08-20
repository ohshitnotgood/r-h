import {createSignal, type Component, createEffect} from 'solid-js';

import Intro from './components/intro/Intro';
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Outro from "./components/outro/Outro";
import MobileIntro from "./components/mobile/MobileIntro";
import MobileExperience from "./components/mobile/MobileExperience";
import MobileNavBar from "./components/mobile/MobileNavBar";
import {createScrollPosition} from "@solid-primitives/scroll";
import {MobileEducation} from "./components/mobile/MobileEducation";
import loadingIcon from "./assets/icons/ic_progress.svg"
import {randomizePalette} from "./components/reusable/ColorPalettes";
import MobileProjects from "./components/mobile/MobileProjects";
import MobileContacts from "./components/mobile/MobileContact";

const App: Component = () => {
    const [d1Hidden, setD1Hidden] = createSignal(false);
    const [d2Hidden, setD2Hidden] = createSignal(true);
    const [d3Hidden, setD3Hidden] = createSignal(true);
    const [d4Hidden, setD4Hidden] = createSignal(true);
    const [d5Hidden, setD5Hidden] = createSignal(true);

    const [firstPageLoad, setFirstPageLoad] = createSignal(false)

    const [lang, setLang] = createSignal("en")


    let p = Math.floor(Math.random() * 9 + 1)

    randomizePalette()

    setTimeout(() => {
        setFirstPageLoad(true)
    }, 100)

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
    let educationSection: HTMLDivElement
    let projectsSection: HTMLDivElement
    let contactsSection: HTMLDivElement

    let [currentPosition, setCurrentPosition] = createSignal("intro")

    let scrolledPastIntro = false
    let scrolledPastExperience = false
    let scrolledPastEducation = false
    let scrolledPastProjects = false

    const position = createScrollPosition()
    createEffect(() => {
        console.log("should be only visible on mobile")

        if (position.y < 2) {}

        let height = introSection.clientHeight

        if (position.y > height) {
            if (!scrolledPastIntro) randomizePalette()
            scrolledPastIntro = true
            setCurrentPosition("experience")
        }

        height += experienceSection.clientHeight
        if (position.y > height) {
            if (!scrolledPastExperience) randomizePalette()
            scrolledPastExperience = true
            setCurrentPosition("education")
        }


        height += educationSection.clientHeight
        if (position.y > height) {
            if (!scrolledPastEducation) randomizePalette()
            scrolledPastEducation = true
            setCurrentPosition("projects")
        }

        height += projectsSection.clientHeight * 0.8
        if (position.y > height) {
            if (!scrolledPastProjects) randomizePalette()
            scrolledPastProjects = true
            setCurrentPosition("contact")

        }

        // height += experienceSection.clientHeight
        // if (position.y > height) {
        //     if (!randomizedIntro) randomizePalette()
        //     randomizedIntro = true
        //     if (currentPosition() != "education") setCurrentPosition("education")
        // }
        //
        // height += educationSection.clientHeight
        // if (position.y > height) {
        //     if (currentPosition() != "projects") setCurrentPosition("projects")
        // }

    })

    return (
        <div>
            <div class="max-lg:hidden relative">
                <div>
                    <div class='lg:flex lg:flex-row lg:w-screen max-lg:hidden'>
                        <Intro palette={palette()} lang={lang()} setLang={setLang} hidden={d1Hidden()} onclickAction={onClickD1} firstLoadCompleted={firstPageLoad()}/>
                        <Projects palette={palette()} initialDelay={2400} lang={lang()} hidden={d4Hidden()} onclickAction={onClickD4}/>
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
                <MobileNavBar palette={palette()} currentPosition={currentPosition()} />
                <MobileIntro palette={palette()} lang={lang()} ref={introSection!}/>
                <MobileExperience palette={palette()} lang={lang()} ref={experienceSection!}/>
                <MobileEducation palette={palette()} lang={lang()} ref={educationSection!}/>
                <MobileProjects ref={projectsSection!}/>
                <MobileContacts ref={contactsSection!}/>
            </div>
        </div>
    );
};

export default App;
