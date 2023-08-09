import {getAge} from "../../functions/GetAge";
import {onMount, Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif"
import rightArrow from "../../assets/icons/ic_right.svg";
import AnimatedText from "../reusable/AnimatedText";

export default function MobileIntro(props: any) {
    return (
        <div id="intro" ref={props.ref} class="grid place-items-center">
            <TextSection lang={props.lang}/>
        </div>
    )
}

function TextSection(props: {lang: string}) {
    let description = getAge(props.lang) + " year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development."

    return (
        <div class="grid min-h-[40vh] place-content-center my-24">
            <div class="max-w-[80vw] space-y-3">
                <div class="text-6xl font-bold uppercase">
                    {/*<AnimatedText text="Hi! I'm Praanto"/>*/}
                    Hi! I'm Praanto
                </div>
                <div class="lowercase text-2xl">
                    {/*<AnimatedText text="comp.eng. student at kth" initialDelay={200}/>*/}
                    comp.eng student at kth
                </div>
                <div class="pr-10">
                    <AnimatedText text={description} initialDelay={600}/>
                </div>
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
