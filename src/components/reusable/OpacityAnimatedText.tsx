import {createEffect, createSignal } from "solid-js";

export default function OpacityAnimatedText(props: { show: boolean, text: any, initialDelay: number }) {
    const [render, setRenderState ] = createSignal(false)
    // const [delayTimeout, setDelayTimeout] = createSignal(false)

    let timeout = () => setTimeout(() => {
        setRenderState(true)
        console.log("delay timeout expired")
    }, props.initialDelay)

    createEffect(() => {
        if (props.show) {
            console.log("Setting timeout")
            timeout()
        }
        else {
            console.log("Setting render state to false")
            setRenderState(false)
        }
    })

    return (
        <div class="relative">
            <div class="">
                {props.text}
            </div>
            <div class="absolute text-transparent top-0 left-0 bg-white" classList={{"col-content-hidden": render(), "w-full h-full": !render()}}>
                {props.text}
            </div>
        </div>
    )
}