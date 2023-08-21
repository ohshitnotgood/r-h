import {onMount, Show} from "solid-js";
import {randomizePalette} from "./reusable/ColorPalettes";

export function Error404() {


    onMount(() => {
        randomizePalette()
    })

    return (
        <div onclick={() => {
            randomizePalette()
        }} class={`bg-[color:var(--bg-color)] transition-colors duration-700 w-screen h-screen grid grid-rows-[10%_80%_10%] items-center`}>
            <div></div>
            <div>
                <div class={`px-2 w-screen text-center text-8xl font-semibold text-[color:var(--primary-color-post)]`}>
                    404
                </div>
                <div class={`px-2 w-screen text-center text-3xl font-light text-[color:var(--primary-color-post)]`}>
                    Content not found
                </div>

                <div class={`px-2 w-screen text-center text-xl text-[color:var(--primary-color-post)] pt-2`}>
                    The page you're looking for either doesn't exist or is still in development and isn't ready
                    for publishing yet.
                </div>

                <div class={` w-screen text-center pt-10`}>
                    <button onclick={(e) => {
                        e.stopPropagation()
                        window.location.href = `/`
                    }} class={`px-2 underline text-sm text-center text-[color:var(--primary-color-post)]`}>
                        Go back to main website
                    </button>


                    <Show when={Math.random() > 0.8}>
                        <button onclick={(e) => {
                            e.stopPropagation()
                            window.location.href = `https://htmlisaprogramminglanguage.com/`
                        }} class={`px-2 underline w-screen text-sm text-center text-[color:var(--primary-color-post)] `}>
                            HTML is a programming language??
                        </button>

                        <button onclick={(e) => {
                            e.stopPropagation()
                            window.location.href = `https://iscerealasoup.com/`
                        }} class={`px-2 underline w-screen text-sm text-center text-[color:var(--primary-color-post)] `}>
                            Serial is a soup??
                        </button>
                    </Show>
                </div>


            </div>
            <div class={`w-screen text-center text-xs font-light text-[color:var(--secondary-color-post)]`}>
                Copyright 2023 · praanto.com
            </div>
        </div>
    )
}