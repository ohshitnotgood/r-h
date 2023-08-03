import { createSignal, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Intro from './components/Intro';

const App: Component = () => {
    const [d1Class, setD1Class] = createSignal("col col-full")
    const [d1ClassContent, setD1ClassContent] = createSignal("column-content column-content-visible")

    const [d2Class, setD2Class] = createSignal("col col-fit")
    const [d2ClassContent, setD2ClassContent] = createSignal("column-content column-content-hidden")

    const [d3Class, setD3Class] = createSignal("col col-fit")
    const [d3ClassContent, setD3ClassContent] = createSignal("column-content column-content-hidden")
    
    const [d4Class, setD4Class] = createSignal("col col-fit")
    const [d4ClassContent, setD4ClassContent] = createSignal("column-content column-content-hidden")

    const [d5Class, setD5Class] = createSignal("col col-fit")
    const [d5ClassContent, setD5ClassContent] = createSignal("column-content column-content-hidden")

    const [d1Hidden, setD1Hidden] = createSignal(false);
    const [d2Hidden, setD2Hidden] = createSignal(true);
    const [d3Hidden, setD3Hidden] = createSignal(true);
    const [d4Hidden, setD4Hidden] = createSignal(true);
    const [d5Hidden, setD5Hidden] = createSignal(true);

    function resetAllWidthToDefault() {
        setD1Class("col col-fit")
        setD1ClassContent("column-content column-content-hidden")

        setD2Class("col col-fit")
        setD2ClassContent("column-content column-content-hidden")

        setD3Class("col col-fit")
        setD3ClassContent("column-content column-content-hidden")

        setD4Class("col col-fit")
        setD4ClassContent("column-content column-content-hidden")

        setD5Class("col col-fit")
        setD5ClassContent("column-content column-content-hidden")
    }

    function onClickD1() {
        resetAllWidthToDefault()
        setD1Class("col col-full")
        setD1ClassContent("column-content column-content-visible")
        setD1Hidden(false)
    }

    function onClickD2() {
        resetAllWidthToDefault()
        setD2Class("col col-full")
        setD2ClassContent("column-content column-content-visible")
        setD1Hidden(true)
    }

    function onClickD3() {
        resetAllWidthToDefault()
        setD3Class("col col-full")
        setD3ClassContent("column-content column-content-visible")
    }

    function onClickD4() {
        resetAllWidthToDefault()
        setD4Class("col col-full")
        setD4ClassContent("column-content column-content-visible")
    }

    function onClickD5() {
        resetAllWidthToDefault()
        setD5Class("col col-full")
        setD5ClassContent("column-content column-content-visible")
    }


    return (
        <div class='flex flex-row'>
            <div class={d1Class()} onClick={onClickD1}>
                <Intro hidden={d1Hidden()} contentStyle={d1ClassContent()} lang="bn"/>
            </div>
            <div class={d2Class()} onClick={onClickD2}>
                <div class='section'>
                    <div class='column-header'>
                        <div class='header-text rotate-[270deg]'>
                            Header
                        </div>
                    </div>
                    <div class={d2ClassContent()}>
                        Content2
                    </div>
                </div>
            </div>
            <div class={d3Class()} onclick={onClickD3}>
                <div class='section'>
                    <div class='column-header'>
                        <div class='header-text rotate-[270deg]'>
                            Header
                        </div>
                    </div>
                    <div class={d3ClassContent()}>
                        Content3
                    </div>
                </div>
            </div>
            <div class={d4Class()} onclick={onClickD4}>
                <div class='section'>
                    <div class='column-header'>
                        <div class='header-text rotate-[270deg]'>
                            Header
                        </div>
                    </div>
                    <div class={d4ClassContent()}>
                        Content
                    </div>
                </div>
            </div>
            <div class={d5Class()} onclick={onClickD5}>
                <div class='section'>
                    <div class='column-header'>
                        <div class='header-text rotate-[270deg]'>
                            Header
                        </div>
                    </div>
                    <div class={d5ClassContent()}>
                        Content
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
