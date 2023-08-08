import {createSignal} from "solid-js";

/**
 * Does not support anything other than text
 *
 * @param props.text Text to be animated into
 */
export default function AnimatedText(props: any) {

    const [delayPeriodExpired, setDelayPeriodExpired] = createSignal(false)
    setTimeout(() => {
        setDelayPeriodExpired(true)
    }, props.initialDelay)

    return (
        <div class="relative">
            <div class="z-20">
                {props.text}
            </div>
            <div class="bg-white w-fit z-30 absolute top-0 left-0 text-transparent"
                 classList={{"fade-in-anim": delayPeriodExpired()}}>
                {props.text}
            </div>
        </div>
    )
}