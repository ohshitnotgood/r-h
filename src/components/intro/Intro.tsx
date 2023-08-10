import { Show } from "solid-js";
import Header from "../reusable/Header";
import langIcon from "../../assets/icons/ic_lang.svg";
import {PageCTAButton, PageDescriptionText, PageSubtitle, PageTitle} from "./Components";


export default function Intro(props: { palette: number, lang: string, setLang: any, hidden: boolean, onclickAction: any }) {
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



    function LanguageSwitcher() {
        return (
            <div>
                <div class="grid grid-rows-2 border border-gray-400 rounded-lg">
                    <div class="border-b border-gray-400 p-2">
                        <img class="w-6 h-6" src={langIcon} alt="Language icon"/>
                    </div>
                    <button onclick={(e) => {
                        e.stopPropagation()
                        if (props.lang == "en") props.setLang("bn")
                        else props.setLang("en")
                    }} class=" pt-1 cursor-pointer hover:bg-gray-100 rounded-b-lg">
                        <Show when={props.lang == "en"}> bn </Show>
                        <Show when={props.lang == "bn"}> en </Show>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div class={bgColor[props.palette]}
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            <div class={borderColor[props.palette]}>
                {/* Header Section */}
                <Header lang={props.lang} enText="Intro" bnText="সূচনা" sectionNumber="01." hidden={props.hidden} actionButton={LanguageSwitcher}  initialDelay={0}/>

                <div classList={{'pointer-events-none z-10 absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                    <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden,
                        "col-content-hidden col-content-shrink": props.hidden}}>
                        <div class="col-text space-y-2.5 lowercase">
                            <PageTitle palette={props.palette} hidden={props.hidden} lang={props.lang}/>
                            <PageSubtitle palette={props.palette} hidden={props.hidden} lang={props.lang}/>
                            <PageDescriptionText palette={props.palette} hidden={props.hidden} lang={props.lang} />
                            <PageCTAButton hidden={props.hidden} lang={props.lang}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}