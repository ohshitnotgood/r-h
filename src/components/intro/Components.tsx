import {Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif";
import {getAge} from "../../functions/GetAge";
import rightArrow from "../../assets/icons/ic_right.svg";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import gradHat from "../../assets/icons/ic_education.svg"

export function PageTitle(props: any) {
    let image = <img class="w-14 hidden h-16 ml-3" src={fire} alt="" />
    return (
        <div class="xl:text-8xl lg:text-6xl flex flex-row font-bold mb-3 uppercase">
            <Show when={props.lang == "en"}>
                <OpacityAnimatedText show={!props.hidden} text={"Hi! I'm Praanto"} initialDelay={1700}/>
            </Show>
            <Show when={props.lang == "bn"}>
                <OpacityAnimatedText show={!props.hidden} text={"স্বাগতম! আমি প্রান্ত"} initialDelay={1700}/>
            </Show>
            <OpacityAnimatedText show={!props.hidden} text={image} initialDelay={1700}/>
        </div>
    )
}

export function PageSubtitle(props: any) {
    let text = (
        <span class="inline-flex content-center items-center">
            computer eng. student at kth
            <img src={gradHat} class="w-8 hidden h-8" alt="Graduation hat GIF"/>
        </span>
    )

    return (
        <div class="xl:text-5xl lg:text-4xl">
            {/*<TypingAnimation text="Comp.Eng student at KTH" delay={100} initialDelay={700} />*/}
            <Show when={props.lang == "en"}>
                <OpacityAnimatedText show={!props.hidden} text={text} initialDelay={1900}/>
            </Show>
            <Show when={props.lang == "bn"}>
                <OpacityAnimatedText show={!props.hidden} text="সুইডেন অবস্থিত কেটিএইচ-এর কম্পিউটার ইঞ্জিনিয়ারিং ছাত্র" initialDelay={1900}/>
            </Show>
        </div>
    )
}


export function PageDescriptionText(props: { lang: string, hidden: boolean }) {
    let enText = getAge(props.lang) + " year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development."
    let bnText = getAge(props.lang) + " বছর বয়সী উচ্চকৌশল সফটওয়্যার ইঞ্জিনিয়ার এবং উদ্দীপত সফটওয়্যার প্রোগ্রামার। দক্ষতার মাধ্যমে নতুনত্বপূর্ণ প্রযুক্তি ব্যবহার করে দক্ষ এবং ব্যবহারকারী-মনোযোগী অ্যাপ্লিকেশন প্রদানে দক্ষ। সফটওয়্যার উন্নতি উত্সাহিত করতে সতত শেখা এবং নতুন চ্যালেঞ্জ সন্ধান করায় প্রতিশ্রুতিবদ্ধ।"
    return (
        <div class="xl:text-2xl lg:text-lg lg:pr-20">
            <Show when={props.lang === "en"} >
                <OpacityAnimatedText show={!props.hidden} text={enText} initialDelay={2000}/>
            </Show>
            <Show when={props.lang === "bn"} >
                <OpacityAnimatedText show={!props.hidden} text={bnText} initialDelay={2000}/>
            </Show>
        </div>
    )
}

export function PageCTAButton(props: { hidden: boolean, lang: string }) {
    let button = (
        <button class="mt-7 pointer-events-auto z-10 hover:cursor-pointer rounded-full my-4 p-2 px-4 border border-black">
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <Show when={props.lang === "en"}>
                    <span>get to know me</span>
                </Show>
                <Show when={props.lang === "bn"}>
                    <span>আমার সম্পর্কে জানুন</span>
                </Show>
                <img src={rightArrow} class="w-6 h-6" alt={"Javascript logo in black and white"}/>
            </div>
        </button>
    )
    return (
        <OpacityAnimatedText show={!props.hidden} text={button} initialDelay={2200} />
    )
}