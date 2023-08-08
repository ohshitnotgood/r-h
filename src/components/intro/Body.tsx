import {Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif";
import {getAge} from "../../functions/GetAge";
import rightArrow from "../../assets/icons/ic_right.svg";

export default function Body(props: any) {
    let _props = props.props


    function PageTitle() {
        return (
            <div class="text-7xl flex flex-row font-bold mb-3 uppercase">
                <Show when={_props.lang == "en"}>Hi! I'm Praanto</Show>
                <Show when={_props.lang == "bn"}>স্বাগতম! আমি প্রান্ত</Show>
                <img class="w-14 ml-3"  src={fire} alt="" />
            </div>
        )
    }

    function PageSubtitle() {
        return (
            <div class="text-2xl">
                {/*<TypingAnimation text="Comp.Eng student at KTH" delay={100} initialDelay={700} />*/}
                <Show when={_props.lang == "en"}>computer eng. student at kth</Show>
                <Show when={_props.lang == "bn"}>সুইডেন অবস্থিত কেটিএইচ-এর কম্পিউটার ইঞ্জিনিয়ারিং ছাত্র </Show>
            </div>
        )
    }


    function PageDescriptionText() {
        return (
            <div class="pt-4">
                <Show when={_props.lang === "en"} >
                    {getAge(_props.lang)} year old highly skilled software engineer and passionate programmer. Adept at leveraging cutting-edge technologies to deliver efficient and user-centric applications. Committed to continuous learning and seeking new challenges to drive excellence in software development.
                </Show>
                <Show when={_props.lang === "bn"} >
                    {getAge(_props.lang)} বছর বয়সী উচ্চকৌশল সফটওয়্যার ইঞ্জিনিয়ার এবং উদ্দীপত সফটওয়্যার প্রোগ্রামার। দক্ষতার মাধ্যমে নতুনত্বপূর্ণ প্রযুক্তি ব্যবহার করে দক্ষ এবং ব্যবহারকারী-মনোযোগী অ্যাপ্লিকেশন প্রদানে দক্ষ। সফটওয়্যার উন্নতি উত্সাহিত করতে সতত শেখা এবং নতুন চ্যালেঞ্জ সন্ধান করায় প্রতিশ্রুতিবদ্ধ।
                </Show>
            </div>
        )
    }

    function PageCTAButton() {
        return (
            <div class="pt-7">
                <button class="pointer-events-auto hover:cursor-pointer rounded-full my-4 p-2 px-4 border border-black">
                    <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                        <Show when={_props.lang === "en"}>
                            <span>get to know me</span>
                        </Show>
                        <Show when={_props.lang === "bn"}>
                            <span>আমার সম্পর্কে জানুন</span>
                        </Show>
                        <img src={rightArrow} class="w-6 h-6" alt={"Javascript logo in black and white"}/>
                    </div>
                </button>
            </div>
        )
    }

    return(
        <div classList={{'pointer-events-none z-10 absolute top-0 left-0 w-full h-full': !_props.hidden, "hidden": _props.hidden}}>
            <div class='col-content' classList={{"col-content-expand col-content-visible": !_props.hidden,
                "col-content-hidden col-content-shrink": _props.hidden}}>
                <div class="col-text lowercase">
                    <PageTitle />
                    <PageSubtitle />
                    <PageDescriptionText />
                    <PageCTAButton />
                </div>
            </div>
        </div>
    )
}
