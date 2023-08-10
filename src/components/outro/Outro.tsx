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
import {EmailAndPhone} from "./Components";


export default function Outro(props: any) {
    const [userReachedBottom, setUserReachBottom] = createSignal(false)
    let mainContent: HTMLDivElement

    let counter = 0

    function onScrollDown() {
        console.log(mainContent.scrollTop)
        if (mainContent.scrollTop >= 900) setUserReachBottom(true)
        else setUserReachBottom(false)
    }

    return (
        <div class='col-entire-section'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/*Header*/}
            <Header initialDelay={props.initialDelay} sectionNumber="05." lang={props.lang} hidden={props.hidden} enText={"Others"} bnText={"অন্যান্য"} actionButton={null}/>

            {/*Scroll Indicator*/}
            <div class="absolute right-8 bottom-5"
                 classList={{"scroll-indicator-hide": userReachedBottom(), "scroll-indicator-show": !userReachedBottom()}}>
                <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>
                    <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>
                </div>
            </div>

            {/*Main Content*/}
            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='grid place-content-center h-screen z-50' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                    <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                        <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold text-right">Contact Me!</div>
                        <div class="pb-24 text-justify">

                        </div>
                        <EmailAndPhone />
                    </div>
                </div>
            </div>
        </div>
    )
}
