import "animate.css"
import TypingAnimation from "./TypingAnimation";
import {Show} from "solid-js";
import langIcon from "../assets/icons/ic_lang.svg"

export default function Intro(props) {
    return (
        <div class='col-entire-section z-50 bg-white'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/* Header Section */}
            <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer bg-white'>
                <div class="grid grid-arrangement h-screen place-content-center">
                    <div class="h-fit text-center pt-10">
                        01.
                    </div>
                    <div class="h-fit text-center"></div>
                    <div class="font-inter text-3xl font-bold rotate-[270deg] uppercase bg-white">
                        <Show when={props.lang == "en"}>Intro</Show>
                        <Show when={props.lang == "bn"}>সূচনা</Show>
                    </div>
                    <div class="h-fit"></div>
                    <div class="h-full grid place-content-center">
                        <div class="grid grid-rows-2 border border-gray-400 rounded-lg">
                            <div class="border-b border-gray-400 p-2">
                                <img class="w-6 h-6" src={langIcon} alt="Language icon"/>
                            </div>
                            <button onclick={() => {
                                if (props.lang == "en") props.setLang("bn")
                                else props.setLang("en")
                            }} class=" pt-1 cursor-pointer hover:bg-gray-100 rounded-b-lg">
                                <Show when={props.lang == "en"}> bn </Show>
                                <Show when={props.lang == "bn"}> en </Show>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div classList={{'pointer-events-none z-10 absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden,
                    "col-content-hidden col-content-shrink": props.hidden}}>
                    <div class="col-text">
                        <div class="text-4xl font-medium mb-3">
                            <TypingAnimation text="Hi! I'm Praanto" delay={100} initialDelay={400} />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}