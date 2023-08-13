import {getAge} from "../../functions/GetAge";
import {onMount, Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif"
import rightArrow from "../../assets/icons/ic_right.svg";
import AnimatedText from "../reusable/AnimatedText";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {PrimaryText} from "../reusable/Texts";

const borderColor: {[index: number]: string} = {
    1: "border-contrast-1 ",
    2: "border-contrast-2 ",
    3: "border-contrast-3 ",
    4: "border-contrast-4 ",
    5: "border-contrast-5 ",
    6: "border-contrast-6 ",
    7: "border-contrast-7 ",
    8: "border-contrast-8 ",
    9: "border-contrast-9 ",
    10: "border-contrast-10 ",
}


export default function MobileIntro(props: { lang: string, ref: any, palette: number }) {
    return (
        <div id="intro" ref={props.ref} class={`bg-[color:var(--bg-color)] transition-all duration-150 grid place-items-center`}>
            <TextSection palette={props.palette} lang={props.lang}/>
        </div>
    )
}

function TextSection(props: {lang: string, palette: number}) {
    let description = getAge(props.lang) + " year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development."

    return (
        <div class={`grid min-h-[40vh] place-content-center py-24`}>
            <div class="max-w-[80vw] space-y-3">
                <div class="text-6xl font-bold uppercase">
                    <OpacityAnimatedText children={
                        <PrimaryText>
                            Hi! I'm Praanto
                        </PrimaryText>
                    } initialDelay={600} show={true}/>
                </div>
                <div class="lowercase text-2xl">
                    {/*<OpacityAnimatedText children={*/}
                        <PrimaryText>
                            comp.eng student at kth
                        </PrimaryText>
                    {/*} initialDelay={800} show={true}/>*/}

                </div>
                <div class="pr-10">
                    <OpacityAnimatedText children={
                        <PrimaryText bnT={""} class={""} children={description} lang={props.lang} palette={props.palette}/>
                    } initialDelay={1000} show={true}/>
                </div>
                <OpacityAnimatedText show={true} children={<PageCTAButton lang={props.lang} palette={props.palette}/>} initialDelay={1300} />
            </div>
        </div>

    )
}

function PageCTAButton(props: {lang: string, palette: number}) {
    let enText = (
        <div class="lowercase text-left text-sm flex flex-row items-center space-x-1">
            <span>get to know me</span>
            <img src={rightArrow} class="w-4 h-4 rotate-[90deg]" alt={"Javascript logo in black and white"}/>
        </div>
    )

    let bnText = (
        <div class="lowercase text-left text-sm flex flex-row items-center space-x-1">
            <Show when={props.lang === "en"}>
                <span>get to know me</span>
            </Show>
            <Show when={props.lang === "bn"}>
                <span>আমার সম্পর্কে জানুন</span>
            </Show>
            <img src={rightArrow} class="w-4 h-4 rotate-[90deg]" alt={"Downward icon indicating that the user must scroll down."}/>
        </div>
    )

    return (
        <div class="">
            <button class={`pointer-events-auto hover:cursor-pointer rounded-full my-4 p-2 px-4 border ${borderColor[props.palette]}`}>
                <PrimaryText children={enText} bnT={bnText} lang={props.lang} palette={props.palette} class={""} />
            </button>
        </div>
    )
}
