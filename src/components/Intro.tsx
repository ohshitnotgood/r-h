import "animate.css"
import TypingAnimation from "./TypingAnimation";
import rightArrow from "../assets/icons/ic_right.svg"
import {Show} from "solid-js";
import langIcon from "../assets/icons/ic_lang.svg"
import fire from "../assets/img/fire-fireball.gif"
import jsLogo from "../assets/img/js_logo_bw.png";

export default function Intro(props) {
    function getAge() {
        var ageDifMs = Date.now() - Date.parse("2004-07-07");
        var ageDate = new Date(ageDifMs); 

        if (props.lang === "en") return Math.abs(ageDate.getUTCFullYear() - 1970);
        else return langNumSwap((Math.abs(ageDate.getUTCFullYear() - 1970).toString()))
    }

    function langNumSwap(str: String): String {
        let final: String = ""
        for (let i in str) {
            if (str[i] === "1") final += "১"
            else if (str[i] === "2") final += "২"
            else if (str[i] === "3") final += "৩"
            else if (str[i] === "4") final += "৪"
            else if (str[i] === "5") final += "৫"
            else if (str[i] === "6") final += "৬"
            else if (str[i] === "7") final += "৭"
            else if (str[i] === "8") final += "৮"
            else if (str[i] === "9") final += "৯"
            else if (str[i] === "0") final += "০"
            else final += str[i]
        }
        return final
    }

    console.log(langNumSwap("12345678910sdasd"))

    return (
        <div class='col-entire-section z-50 bg-white'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/* Header Section */}
            <div class='h-screen place-content-center w-[100px] z-50 bg-white cursor-pointer'>
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
                </div>
            </div>

            <div classList={{'pointer-events-none z-10 absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden,
                    "col-content-hidden col-content-shrink": props.hidden}}>
                    <div class="col-text lowercase">
                        <div class="text-7xl flex flex-row font-bold mb-3 uppercase">
                            {/*<TypingAnimation text="Hi! I'm Praanto" delay={100} initialDelay={400} />*/}
                            <Show when={props.lang == "en"}>Hi! I'm Praanto</Show>
                            <Show when={props.lang == "bn"}>স্বাগতম! আমি প্রান্ত</Show>
                            <img class="w-14 ml-3"  src={fire} alt="" />

                        </div>
                        <div class="text-2xl">
                            {/*<TypingAnimation text="Comp.Eng student at KTH" delay={100} initialDelay={700} />*/}
                            <Show when={props.lang == "en"}>computer eng. student at kth</Show>
                            <Show when={props.lang == "bn"}>সুইডেন অবস্থিত কেটিএইচ-এর কম্পিউটার ইঞ্জিনিয়ারিং ছাত্র </Show>
                        </div>

                        <div class="pt-4">
                            <Show when={props.lang === "en"} >
                                {getAge()} year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development.
                            </Show>
                            <Show when={props.lang === "bn"} >
                                {getAge()} বছর বয়সী উচ্চকৌশল সফটওয়্যার ইঞ্জিনিয়ার এবং উদ্দীপত সফটওয়্যার প্রোগ্রামার। দক্ষতার মাধ্যমে নতুনত্বপূর্ণ প্রযুক্তি ব্যবহার করে দক্ষ এবং ব্যবহারকারী-মনোযোগী অ্যাপ্লিকেশন প্রদানে দক্ষ। সফটওয়্যার উন্নতি উত্সাহিত করতে সতত শেখা এবং নতুন চ্যালেঞ্জ সন্ধান করায় প্রতিশ্রুতিবদ্ধ।
                            </Show>
                        </div>
                        <div class="pt-7">
                            <button class="pointer-events-auto hover:cursor-pointer rounded-full my-4 p-2 px-4 border border-black">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}