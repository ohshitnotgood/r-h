import { Show } from "solid-js";
import Header from "../reusable/Header";
import langIcon from "../../assets/icons/ic_lang.svg";
import {PageCTAButton, PageDescriptionText, PageSubtitle, PageTitle} from "./Components";
import {AnimatedText, OpacityAnimatedText} from "../reusable/AnimatedText";


export default function Intro(props: any) {

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
        <div class='col-entire-section z-50 bg-white'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/* Header Section */}
            <Header lang={props.lang} enText="Intro" bnText="সূচনা" sectionNumber="01." hidden={props.hidden} actionButton={LanguageSwitcher} />

            <div classList={{'pointer-events-none z-10 absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden,
                    "col-content-hidden col-content-shrink": props.hidden}}>
                    <div class="col-text lowercase">
                        <PageTitle lang={props.lang}/>
                        <PageSubtitle lang={props.lang}/>
                        <PageDescriptionText lang={props.lang} />
                        <OpacityAnimatedText initialDelay={1700} text={<PageCTAButton lang={props.lang}/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}