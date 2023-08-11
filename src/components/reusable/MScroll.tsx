import {createScrollPosition} from "@solid-primitives/scroll";
import {onMount} from "solid-js";

export function MScroll(props: { class?: string, style?: string }) {
    let main: HTMLDivElement
    let oldScroll: number = 0

    function onScroll(e: any) {
        if (main.scrollTop < oldScroll) console.log("scrolling up")
        if (main.scrollTop > oldScroll) console.log("scrolling down")
        oldScroll = main.scrollTop
    }

    return (
        <div class={`w-screen h-screen overflow-scroll`} ref={main} onscroll={onScroll} >
            {props.children}
        </div>
    )
}