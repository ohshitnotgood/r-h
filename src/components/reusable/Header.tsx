import {Show} from "solid-js";
import OpacityAnimatedText from "./OpacityAnimatedText";
import AnimatedHeaderText from "./AnimatedHeaderText";
import {SecondaryText} from "./Texts";

/**
 *
 * @param props.sectionNumber Section Number
 * @param props.enText English display title for header
 * @param props.bnText Bengali display title for header
 * @param props.actionButton Action button (only used by intro for the language switcher)
 * @param props.lang Language signal
 * @param props.hidden Hidden state
 */
export default function Header(props: { palette: number, bnSectionNumber: string, sectionNumber: string, enText: string, bnText: string, initialDelay: number, hidden: boolean, lang: string, actionButton: any }) {
    return (
        <div class='w-full flex cursor-pointer'>
            <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer'>
                <div class="grid grid-arrangement h-screen place-content-center">
                    <div class="h-fit text-center pt-10">
                        <AnimatedHeaderText text={
                            <div>
                                <SecondaryText text={{en: props.sectionNumber, bn: props.bnSectionNumber}} lang={props.lang} palette={props.palette} class={""} />
                            </div>
                        } initialDelay={props.initialDelay}/>
                    </div>
                    <div class="h-fit text-center"></div>
                    <div class="col-header-title" classList={{"col-header-visible": props.hidden, "col-header-hidden": !props.hidden}}>
                        {/*<Show when={props.lang === "en"}>*/}
                            <AnimatedHeaderText text={
                                <div>
                                    <SecondaryText text={{en: props.enText, bn: props.bnText}} lang={props.lang} palette={props.palette} class={""} />
                                </div>
                            } initialDelay={props.initialDelay}/>
                        {/*</Show>*/}
                        {/*<Show when={props.lang === "bn"}>{props.bnText}</Show>*/}
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