import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import tailwindLogo from "../../assets/img/tailwind-logo.jpg"
import solidLogo from "../../assets/img/solidjs_logo.jpg"
import typescriptLogo from "../../assets/img/typescript_logo_bw.png"
import linkIcon from "../../assets/icons/ic_link.svg"
import {createSignal, Show} from "solid-js";
import rightArrow from "../../assets/icons/ic_right.svg";
import languageIcon from "../../assets/icons/ic_lang.svg"
import downIcon from "../../assets/icons/ic_down_circled.svg"
import Header from "../reusable/Header";
import {EmailAndPhone} from "../projects/Components";
import Section from "../reusable/Section";


export default function Outro(props: any) {
    const bgColor: {[index: number]: string} = {
        1: "bg-bg-1 z-50 relative",
        2: "bg-bg-2 z-50 relative",
        3: "bg-bg-3 z-50 relative",
        4: "bg-bg-4 z-50 relative",
        5: "bg-bg-5 z-50 relative",
        6: "bg-bg-6 z-50 relative",
        7: "bg-bg-7 z-50 relative",
        8: "bg-bg-8 z-50 relative",
        9: "bg-bg-9 z-50 relative",
        10: "bg-bg-10 z-50 relative",
    }

    const borderColor: {[index: number]: string} = {
        1: "border-contrast-1 border-r",
        2: "border-contrast-2 border-r",
        3: "border-contrast-3 border-r",
        4: "border-contrast-4 border-r",
        5: "border-contrast-5 border-r",
        6: "border-contrast-6 border-r",
        7: "border-contrast-7 border-r",
        8: "border-contrast-8 border-r",
        9: "border-contrast-9 border-r",
        10: "border-contrast-10 border-r",
    }

    const [userReachedBottom, setUserReachBottom] = createSignal(false)
    let mainContent: HTMLDivElement

    let counter = 0

    function onScrollDown() {
        console.log(mainContent.scrollTop)
        if (mainContent.scrollTop >= 900) setUserReachBottom(true)
        else setUserReachBottom(false)
    }
    {/*Scroll Indicator*/}
    {/*<div class="absolute right-8 bottom-5"*/}
    {/*     classList={{"scroll-indicator-hide": userReachedBottom(), "scroll-indicator-show": !userReachedBottom()}}>*/}
    {/*    <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>*/}
    {/*        <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>*/}
    {/*    </div>*/}
    {/*</div>*/}

    return (

        <Section header_en={`Outro`} headerDelay={props.initialDelay} hidden={props.hidden} sectionNumber_en={"05."} sectionNumber_bn={"05."} palette={props.palette} lang={props.lang} clickAction={props.onclickAction}>
            <div class='grid place-content-center h-screen z-50' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                    <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold text-right">Contact Me!</div>
                    <div class="pb-24 text-justify">

                    </div>
                    <EmailAndPhone />
                </div>
            </div>
        </Section>
    )
}
