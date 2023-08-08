import {getAge} from "../../functions/GetAge";
import {onMount, Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif"
import rightArrow from "../../assets/icons/ic_right.svg";

export default function MobileIntro(props: any) {
    return (
        <div id="intro" ref={props.ref} class="grid place-items-center">
            <TextSection lang={props.lang}/>
        </div>
    )
}

function TextSection(props: {lang: string}) {
    return (
        <div class="grid min-h-[40vh] place-content-center my-24">
            <div class="max-w-[80vw] space-y-3">
                <div class="text-5xl font-bold uppercase">
                    Hi! I'm
                    <span class="flex flex-row items-center content-center">
                        Praanto
                        <img alt={"Fire GIF"} src={fire} class="w-8 h-10 ml-2"/>
                    </span>
                </div>
                <div class="lowercase text-2xl">
                    comp.eng. student at kth
                </div>
                <div class="pr-10">{getAge(props.lang)} year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development.</div>
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
