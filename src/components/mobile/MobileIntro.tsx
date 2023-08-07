import {getAge} from "../../functions/GetAge";
import {Show} from "solid-js";
import rightArrow from "../../assets/icons/ic_right.svg";
import TypingAnimation from "../TypingAnimation";

export default function MobileIntro(props: {lang: string}) {
    return (
        <div>
            <div>
                <div class="grid place-items-center">
                    <TextSection lang={props.lang}/>
                </div>
            </div>
        </div>
    )
}

function TextSection(props: {lang: string}) {
    return (
        <div class="grid min-h-[40vh] place-content-center my-32">
            <div class="max-w-[80vw] space-y-3">
                <div class="text-4xl font-bold uppercase">
                    Hi! I'm Praanto
                </div>
                <div class="lowercase text-xl">
                    comp.eng. student at kth
                </div>
                <div class="pr-10 text-sm">{getAge(props.lang)} year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development.</div>
                <PageCTAButton lang={props.lang} />
            </div>
        </div>
    )
}

function PageCTAButton(props: {lang: string}) {
    return (
        <div class="">
            <button class="pointer-events-auto hover:cursor-pointer rounded-full my-4 p-2 px-4 border border-black">
                <div class="lowercase text-left text-sm flex flex-row items-center space-x-1">
                    <Show when={props.lang === "en"}>
                        <span>get to know me</span>
                    </Show>
                    <Show when={props.lang === "bn"}>
                        <span>আমার সম্পর্কে জানুন</span>
                    </Show>
                    <img src={rightArrow} class="w-4 h-4 rotate-[90deg]" alt={"Javascript logo in black and white"}/>
                </div>
            </button>
        </div>
    )
}
