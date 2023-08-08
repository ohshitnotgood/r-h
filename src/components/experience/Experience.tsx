import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import jsLogo from '../../assets/img/js_logo_bw.png'
import ktLogo from '../../assets/img/kt_logo_bw.png'
import androidLogoRound from "../../assets/img/android_logo_bw_circle.png"
import dbLogo from '../../assets/img/database_logo_bw.png'
import androidLogoBlock from '../../assets/img/android_logo_bw_block.png'
import swiftLogo from '../../assets/img/swift_logo_bw.png'
import {createSignal, Show} from "solid-js";
import Header from "../reusable/Header";
import {Android, Database, Javascript, Kotlin, LabAssistant, MathTA, Swift} from "./Components";

export default function Experience(props: any) {
    const [userReachedBottom, setUserReachBottom] = createSignal(false)
    let mainContent: HTMLDivElement

    let counter = 0

    function onScrollDown() {
        console.log(mainContent.scrollTop)
        if (mainContent.scrollTop >= 1330) props.userReachSetter(true)
        else props.userReachSetter(false)
    }

    return (
        <div class='col-entire-section'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>

            <Header sectionNumber="02." enText="Experience" bnText="কর্মদক্ষতা" hidden={props.hidden} lang={props.lang}/>

            <div class="absolute right-8 bottom-5"
                 classList={{"scroll-indicator-hide": userReachedBottom(), "scroll-indicator-show": !userReachedBottom()}}>
                <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>
                    <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>
                </div>
            </div>

            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                    <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                        <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold mr-40">Independent and Professional Experience</div>
                        <div class="pb-24">
                            Since commencing my programming journey in high school, I have accumulated extensive experience with diverse programming languages and frameworks highly sought after in the industry. Through numerous personal projects, I familiarized myself with industry standards and best practices, utilizing these ventures as platforms for continuous learning, drawing inspiration, and enhancing my creativity and skill set.
                        </div>
                        <div class="grid grid-cols-2 ">
                            <div class="uppercase text-sm">Independent development</div>
                            <div>
                                <Javascript />
                                <Database />
                                <Kotlin />
                                <Android />
                                <Swift />
                            </div>

                            <div class="uppercase text-sm">Teaching assistant in high school</div>
                            <div class="pb-24">
                                <MathTA />
                            </div>

                            <div class="uppercase text-sm">Laboratory assistant in high school</div>
                            <div class="pb-24">
                                <LabAssistant />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}