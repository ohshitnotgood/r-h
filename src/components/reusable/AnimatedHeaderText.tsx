import {createEffect, createSignal} from "solid-js";

export default function AnimatedHeaderText(props: { initialDelay: number, text: string}) {
    const [render, setRenderState ] = createSignal(false)

    setTimeout(() => {
        setRenderState(true)
        console.log("delay timeout expired")
    }, props.initialDelay)


    return (
        <div class="relative">
            <div class="" classList={{"opacity-0": !render(), "col-content-visible": render()}}>
                {props.text}
            </div>
        </div>
    )
}