import { createSignal, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
    const [d1Class, setD1Class] = createSignal("col w-full")
    const [d2Class, setD2Class] = createSignal("col w-[100px]")
    const [d3Class, setD3Class] = createSignal("col w-[100px]")
    const [d4Class, setD4Class] = createSignal("col w-[100px]")
    const [d5Class, setD5Class] = createSignal("col w-[100px]")

    function resetAllWidthToDefault() {
        setD1Class("col w-[100px]")
        setD2Class("col w-[100px]")
        setD3Class("col w-[100px]")
        setD4Class("col w-[100px]")
        setD5Class("col w-[100px]")
    }

    function onClickD1() {
        resetAllWidthToDefault()
        setD1Class("col w-full")
    }

    function onClickD2() {
        resetAllWidthToDefault()
        setD2Class("col w-full")
    }

    function onClickD3() {
        resetAllWidthToDefault()
        setD3Class("col w-full")
    }

    function onClickD4() {
        resetAllWidthToDefault()
        setD4Class("col w-full")
    }

    function onClickD5() {
        resetAllWidthToDefault()
        setD5Class("col w-full")
    }


    return (
        <div class='flex flex-row'>
            <div class={d1Class()} onClick={onClickD1}>
                <div class='h-screen grid place-content-center'>
                    Content
                </div>
            </div>
            <div class={d2Class()} onClick={onClickD2}>
                <div class='h-screen grid place-content-center'>
                    Content
                </div>
            </div>
            <div class={d3Class()} onclick={onClickD3}>
                <div class='h-screen grid place-content-center'>
                    Content
                </div>
            </div>
            <div class={d4Class()} onclick={onClickD4}>
                <div class='h-screen grid place-content-center'>
                    Content
                </div>
            </div>
            <div class={d5Class()} onclick={onClickD5}>
                <div class='h-screen grid place-content-center'>
                    <div class='rotate-[270deg] transform-gpu'>Content</div>
                </div>
            </div>
        </div>
    );
};

export default App;
