import {Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif";
import {getAge} from "../../functions/GetAge";
import rightArrow from "../../assets/icons/ic_right.svg";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import gradHat from "../../assets/icons/ic_education.svg"
import { Text } from "../reusable/Texts";

export function PageTitle(props: {lang: string, hidden: boolean, palette: number}) {
    let bnText = "স্বাগতম! আমি প্রান্ত"
    let enText = "Hi! I'm Praanto"
    let textElement = <Text enT={enText} bnT={bnText} lang={props.lang} palette={props.palette}
                            class={"mb-3 text-6xl xl:text-8xl lg:text-6xl font-bold uppercase"} />
    return (
        <OpacityAnimatedText show={!props.hidden} text={textElement} initialDelay={1700}/>
    )
}

export function PageSubtitle(props: {lang: string, hidden: boolean, palette: number}) {
    let enText = "computer eng. student at kth"
    let bnText = "সুইডেন অবস্থিত কেটিএইচ-এর কম্পিউটার ইঞ্জিনিয়ারিং ছাত্র"
    let textElement = <Text enT={enText} bnT={bnText} lang={props.lang} palette={props.palette}
                            class={"xl:text-5xl lg:text-4xl"} />

    return (
        <OpacityAnimatedText show={!props.hidden} text={textElement} initialDelay={1900} />
    )
}


export function PageDescriptionText(props: { lang: string, hidden: boolean, palette: number }) {
    let enText = getAge(props.lang) + " year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development."
    let bnText = getAge(props.lang) + " বছর বয়সী উচ্চকৌশল সফটওয়্যার ইঞ্জিনিয়ার এবং উদ্দীপত সফটওয়্যার প্রোগ্রামার। দক্ষতার মাধ্যমে নতুনত্বপূর্ণ প্রযুক্তি ব্যবহার করে দক্ষ এবং ব্যবহারকারী-মনোযোগী অ্যাপ্লিকেশন প্রদানে দক্ষ। সফটওয়্যার উন্নতি উত্সাহিত করতে সতত শেখা এবং নতুন চ্যালেঞ্জ সন্ধান করায় প্রতিশ্রুতিবদ্ধ।"

    let textElement = <Text enT={enText} bnT={bnText} lang={props.lang} palette={props.palette}
                            class={"xl:text-2xl lg:text-lg lg:pr-20"} />

    return (
        <OpacityAnimatedText show={!props.hidden} text={textElement} initialDelay={2000} />
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