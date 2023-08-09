import {createEffect, createSignal, For, onCleanup, onMount, Show} from "solid-js";
import {render} from "solid-js/web";

/**
 * Does not support anything other than text
 *
 * @param props.text Text to be animated into
 */
export function AnimatedText(props: any) {

    const [delayPeriodExpired, setDelayPeriodExpired] = createSignal(false)
    setTimeout(() => {
        setDelayPeriodExpired(true)
    }, props.initialDelay)

    let ref: HTMLDivElement
    let className_s: string
    let number: number

    const [renderDiv, setRenderDiv] = createSignal(false)

    onMount(() => {
        number = ref.clientHeight / parseInt(getComputedStyle(ref).lineHeight)
        className_s = "grid w-full h-full grid-rows-" + number.toString() + " h-" + ref.clientHeight
    })

    createEffect(() => {
        setRenderDiv(true)
    }, [])


    return (
        <div class="relative">
            <div ref={ref!} class="z-20" classList={{"col-content-visible-slow": delayPeriodExpired()}}>
                {props.text}
            </div>
            <div class="w-full z-30 absolute top-0 left-0">
                <div>
                    <Show when={renderDiv()}>
                        <Blocks class={className_s!} num={number!} revealText={delayPeriodExpired()}/>
                    </Show>
                </div>
            </div>
        </div>
    )
}

function Blocks(props: any) {
    let list = []
    for (let i = 0; i < props.num; i++) {
        list.push(i)
    }

    return(
        <div class={props.class}>
            <For each={list}>{(e, i) =>
                <div class="text-transparent bg-white pointer-events-none" classList={{"fade-in-anim": props.revealText}}>
                    .
                </div>
            }</For>
        </div>
    )
}

export function OpacityAnimatedText(props: any) {
    const [delayPeriodExpired, setDelayPeriodExpired] = createSignal(false)
    setTimeout(() => {
        setDelayPeriodExpired(true)
    }, props.initialDelay)

    return (
        <div class="relative">
            <div class="z-20">
                {props.text}
            </div>
            <div class="z-30 text-transparent absolute bg-white top-0 left-0" classList={{"opacity-0 anim-opacity-0 animation-duration-400": delayPeriodExpired()}}>
                {props.text}
            </div>
        </div>
    )
}