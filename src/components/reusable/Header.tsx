import {Show} from "solid-js";
import OpacityAnimatedText from "./OpacityAnimatedText";
import AnimatedHeaderText from "./AnimatedHeaderText";

/**
 *
 * @param props.sectionNumber Section Number
 * @param props.enText English display title for header
 * @param props.bnText Bengali display title for header
 * @param props.actionButton Action button (only used by intro for the language switcher)
 * @param props.lang Language signal
 * @param props.hidden Hidden state
 */
export default function Header(props: any) {
    return (
        <div class='w-full flex cursor-pointer'>
            <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer bg-white'>
                <div class="grid grid-arrangement h-screen place-content-center">
                    <div class="h-fit text-center pt-10">
                        {props.sectionNumber}
                    </div>
                    <div class="h-fit text-center"></div>
                    <div class="col-header-title" classList={{"col-header-visible": props.hidden, "col-header-hidden": !props.hidden}}>
                        <Show when={props.lang === "en"}>
                            <AnimatedHeaderText text={props.enText} initialDelay={props.initialDelay}/>
                        </Show>
                        <Show when={props.lang === "bn"}>{props.bnText}</Show>
                    </div>
                    <div class="h-fit"></div>
                    <div class="h-full grid place-content-center">
                        {props.actionButton}
                    </div>
                </div>
            </div>
        </div>
    )
}