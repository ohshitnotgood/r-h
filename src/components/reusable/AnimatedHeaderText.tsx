import {createEffect, createSignal} from "solid-js";

export default function AnimatedHeaderText(props: { initialDelay: number, text: string}) {
    const [render, setRenderState ] = createSignal(false)

    setTimeout(() => {
        setRenderState(true)
        console.log("delay timeout expired")
    }, props.initialDelay)


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