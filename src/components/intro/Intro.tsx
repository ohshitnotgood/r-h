import rightArrow from "../../assets/icons/ic_right.svg"
import {Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif"
import { getAge } from "../../functions/GetAge";
import Header from "../reusable/Header";
import Body from "./Body";
import langIcon from "../../assets/icons/ic_lang.svg";

export default function Intro(props) {

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

    function secondaryAction() {
        props.secondaryAction()
    }

    return (
        <div class='col-entire-section z-50 bg-white'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/* Header Section */}
            <Header lang={props.lang} enText="Intro" bnText="সূচনা" sectionNumber="01." hidden={props.hidden} actionButton={LanguageSwitcher} />
            <Body props={props}/>
        </div>
    )
}