import { createSignal, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
    const [d1Class, setD1Class] = createSignal("col col-full")
    const [d2Class, setD2Class] = createSignal("col col-fit")
    const [d3Class, setD3Class] = createSignal("col col-fit")
    const [d4Class, setD4Class] = createSignal("col col-fit")

    const [d5Class, setD5Class] = createSignal("col col-fit")
    const [d5ClassContent, setD5ClassContent] = createSignal("column-content column-content-hidden")

    function resetAllWidthToDefault() {
        setD1Class("col col-fit")
        setD2Class("col col-fit")
        setD3Class("col col-fit")
        setD4Class("col col-fit")
        
        setD5Class("col col-fit")
        setD5ClassContent("column-content column-content-hidden")
    }

    function onClickD1() {
        resetAllWidthToDefault()
        setD1Class("col col-full")
    }

    function onClickD2() {
        resetAllWidthToDefault()
        setD2Class("col col-full")
    }

    function onClickD3() {
        resetAllWidthToDefault()
        setD3Class("col col-full")
    }

    function onClickD4() {
        resetAllWidthToDefault()
        setD4Class("col col-full")
    }

    function onClickD5() {
        resetAllWidthToDefault()
        setD5Class("col col-full")
        setD5ClassContent("column-content column-content-visible")
    }


    return (
        <div class='flex flex-row'>
            <div class={d1Class()} onClick={onClickD1}>
                <div class='column-header'>
                    Content
                </div>
            </div>
            <div class={d2Class()} onClick={onClickD2}>
                <div class='column-header'>
                    Content
                </div>
            </div>
            <div class={d3Class()} onclick={onClickD3}>
                <div class='column-header'>
                    Content
                </div>
            </div>
            <div class={d4Class()} onclick={onClickD4}>
                <div class='column-header'>
                    Content
                </div>
            </div>
            <div class={d5Class()} onclick={onClickD5}>
                <div class='relative'>
                    <div class='column-header absolute left-0'>
                        Content
                    </div>
                    <div class={d5ClassContent()}>
                        ছবির নেশার ছাড়লাম সবই
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
