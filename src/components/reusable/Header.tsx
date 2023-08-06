import {Show} from "solid-js";

/**
 *
 * @param sectionNumber Section Number
 * @param enText English display title for header
 * @param bnText Bengali display title for header
 * @param actionButton Action button (only used by intro for the language switcher)
 * @param lang Language signal
 * @param hidden Hidden state
 */
export default function Header(props) {
    return (
        <div>
            <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer bg-white'>
                <div class="grid grid-arrangement h-screen place-content-center">
                    <div class="h-fit text-center pt-10">
                        {props.sectionNumber}
                    </div>
                    <div class="h-fit text-center"></div>
                    <div class="col-header-title" classList={{"col-header-visible": props.hidden, "col-header-hidden": !props.hidden}}>
                        <Show when={props.lang === "en"}>{props.enText}</Show>
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