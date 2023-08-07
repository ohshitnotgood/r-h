import {getAge} from "../../functions/GetAge";
import {Show} from "solid-js";
import rightArrow from "../../assets/icons/ic_right.svg";
import TypingAnimation from "../TypingAnimation";

export default function MobileIntro(props: {lang: string}) {
    return (
        <div>
            <div>
                <nav class="border-b border-black min-h-[7vh] w-screen grid content-center place-content-end px-4">
                    01.
                </nav>
                <div class="grid grid-cols-[10vw_90vw] place-items-center">
                    <div class="pointer-events-none writing-mode-rl orientation-mixed rotate-180">
                        <div class="uppercase font-bold text-xl border border-black p-3">
                            Intro
                        </div>
                    </div>
                    <TextSection lang={props.lang}/>

                </div>
            </div>
        </div>
    )
}

function TextSection(props: {lang: string}) {
    return (
        <div class="grid min-h-[40vh] place-content-center my-32">
            <div class="max-w-[80vw] space-y-2">
                <div class="text-6xl font-bold uppercase">
                    Hi! I'm Praanto
                </div>
                <div class="lowercase text-xl">
                    comp.eng. student at kth
                </div>
                <div class="pr-10 ">{getAge(props.lang)} year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development.</div>
                <PageCTAButton lang={props.lang} />
            </div>
        </div>
    )
}

function PageCTAButton(props: {lang: string}) {
    return (
        <div class="pt-7">
            <button class="pointer-events-auto hover:cursor-pointer rounded-full my-4 p-2 px-4 border border-black">
                <div class="lowercase text-left font-medium flex flex-row items-center space-x-1">
                    <Show when={props.lang === "en"}>
                        <span>get to know me</span>
                    </Show>
                    <Show when={props.lang === "bn"}>
                        <span>আমার সম্পর্কে জানুন</span>
                    </Show>
                    <img src={rightArrow} class="w-6 h-6 rotate-[90deg]" alt={"Javascript logo in black and white"}/>
                </div>
            </button>
        </div>
    )
}
