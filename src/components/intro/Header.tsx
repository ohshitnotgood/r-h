import {Show} from "solid-js";
import langIcon from "../../assets/icons/ic_lang.svg";

export default function Header(props) {
    let _props = props.props

    return(
        <div class="w-full flex cursor-pointer">
            <div class='h-screen place-content-center w-[100px] z-50 bg-white cursor-pointer'>
                <div class="grid grid-arrangement h-screen place-content-center">
                    <div class="h-fit text-center pt-10">
                        01.
                    </div>
                    <div class="h-fit text-center"></div>
                    <div class="font-inter text-3xl font-bold rotate-[270deg] uppercase bg-white">
                        <Show when={_props.lang == "en"}>Intro</Show>
                        <Show when={_props.lang == "bn"}>সূচনা</Show>
                    </div>
                    <div class="h-fit"></div>
                    <div class="h-full grid place-content-center">
                        <div class="grid grid-rows-2 border border-gray-400 rounded-lg">
                            <div class="border-b border-gray-400 p-2">
                                <img class="w-6 h-6" src={langIcon} alt="Language icon"/>
                            </div>
                            <button onclick={(e) => {
                                e.stopPropagation()
                                if (_props.lang == "en") _props.setLang("bn")
                                else _props.setLang("en")
                            }} class=" pt-1 cursor-pointer hover:bg-gray-100 rounded-b-lg">
                                <Show when={_props.lang == "en"}> bn </Show>
                                <Show when={_props.lang == "bn"}> en </Show>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}