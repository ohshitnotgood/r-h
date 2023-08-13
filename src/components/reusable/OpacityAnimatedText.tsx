import {createEffect, createSignal } from "solid-js";

export default function OpacityAnimatedText(props: { show: boolean, children: any, initialDelay: number }) {
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
                {props.children}
            </div>
        </div>
    )
}