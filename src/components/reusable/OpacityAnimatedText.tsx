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
            <div class="" classList={{"opacity-0": !render(), "col-content-visible": render()}}>
                {props.text}
            </div>
            {/*<div class="absolute z-50 top-0 left-0 bg-white" classList={{"col-content-hidden": render(), "w-full h-full": !render()}}>*/}
            {/*    <div class="opacity-0">*/}
            {/*        {props.text}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}