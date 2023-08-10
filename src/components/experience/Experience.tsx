import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import {createEffect, createSignal, Show} from "solid-js";
import Header from "../reusable/Header";
import {Android, Database, Javascript, Kotlin, LabAssistant, MathTA, Swift} from "./Components";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";

export default function Experience(props: any) {
    const [userReachedBottom, setUserReachBottom] = createSignal(false)

    const [showJavascript, setShowJavascript] = createSignal(false)
    const [showDatabase, setShowDatabase] = createSignal(false)
    const [showKotlin, setShowKotlin] = createSignal(false)
    const [showSwift, setShowSwift] = createSignal(false)
    const [showAndroid, setShowAndroid] = createSignal(false)

    const [showMathTA, setShowMathTA] = createSignal(false)
    const [showLA, setLA] = createSignal(false)

    let mainContent: HTMLDivElement

    let title: HTMLDivElement
    let subtitle: HTMLDivElement
    let js: HTMLDivElement
    let db: HTMLDivElement
    let kotlin: HTMLDivElement
    let swift: HTMLDivElement
    let android: HTMLDivElement

    let mathTA: HTMLDivElement
    let lA: HTMLDivElement

    createEffect(() => {
        if (!props.hidden)
            setShowJavascript(true)
        else hideAllComponents()
    })

    function hideAllComponents() {
        setShowSwift(false)
        setShowAndroid(false)
        setShowJavascript(false)
        setShowDatabase(false)
        setShowKotlin(false)

        setShowMathTA(false)
        setLA(false)
    }

    function onScrollDown() {
        console.log("Experience scroll position" + mainContent.scrollTop)
        console.log(js.clientHeight)
        if (mainContent.scrollTop >= 150) setShowJavascript(true)

        if (mainContent.scrollTop > (title.clientHeight + subtitle.clientHeight) * 0.50) setShowDatabase(true)
        if (mainContent.scrollTop > (title.clientHeight + subtitle.clientHeight + js.clientHeight) * 0.50) setShowKotlin(true)
        if (mainContent.scrollTop > (title.clientHeight + subtitle.clientHeight + js.clientHeight + kotlin.clientHeight) * 0.60) setShowAndroid(true)
        if (mainContent.scrollTop > (title.clientHeight + subtitle.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight) * 0.70) setShowSwift(true)

        if (mainContent.scrollTop > (title.clientHeight + subtitle.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight + swift.clientHeight) * 0.70) setShowMathTA(true)
        if (mainContent.scrollTop > (title.clientHeight + subtitle.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight + swift.clientHeight + mathTA.clientHeight) * 0.70) setLA(true)

        else if (mainContent.scrollTop >= 150) setShowJavascript(true)

        if (mainContent.scrollTop >= 1330) setUserReachBottom(true)
        else setUserReachBottom(false)
    }

    return (
        <div class='col-entire-section'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>

            <Header initialDelay={props.initialDelay} sectionNumber="02." enText="Experience" bnText="কর্মদক্ষতা" hidden={props.hidden} lang={props.lang} actionButton={null}/>

            <OpacityAnimatedText show={!props.hidden} text={<ScrollIndicator signal={userReachedBottom()} hidden={props.hidden}/>} initialDelay={900}/>

            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                    <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                        <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold mr-40">
                            <OpacityAnimatedText show={!props.hidden} text={<div ref={title!}>Independent and Professional Experience</div>} initialDelay={800} />
                        </div>
                        <div class="pb-24">
                            <OpacityAnimatedText show={!props.hidden}
                                                 text={<div ref={subtitle!}>Since commencing my programming journey in high school, I have accumulated extensive experience with diverse programming languages and frameworks highly sought after in the industry. Through numerous personal projects, I familiarized myself with industry standards and best practices, utilizing these ventures as platforms for continuous learning, drawing inspiration, and enhancing my creativity and skill set.</div>} initialDelay={1000} />
                        </div>
                        <div>
                            <div class="grid grid-cols-2 ">
                                <div class="uppercase text-sm">
                                    <OpacityAnimatedText show={showJavascript()} text={"Independent development"} initialDelay={1400}/>
                                </div>
                                <div>
                                    <OpacityAnimatedText show={showJavascript()} text={<div ref={js!}><Javascript palette={props.palette} lang={props.lang} /></div>} initialDelay={1500} />
                                    <OpacityAnimatedText show={showDatabase()} text={<div ref={db!}><Database /></div>} initialDelay={400} />
                                    <OpacityAnimatedText show={showKotlin()} text={<div ref={kotlin!}><Kotlin /></div>} initialDelay={400} />
                                    <OpacityAnimatedText show={showAndroid()} text={<div ref={android!}><Android /></div>} initialDelay={400} />
                                    <OpacityAnimatedText show={showSwift()} text={<div ref={swift!}><Swift /></div>} initialDelay={400} />
                                </div>

                                <div class="uppercase text-sm">
                                    <OpacityAnimatedText show={showMathTA()} text={<div>Teaching assistant in high school</div>} initialDelay={400} />
                                </div>
                                <div class="">
                                    <OpacityAnimatedText show={showMathTA()} text={<div ref={mathTA!}><MathTA /> </div>} initialDelay={400} />
                                </div>

                                <div class="uppercase text-sm">
                                    <OpacityAnimatedText show={showLA()} text={<div>Laboratory assistant in high school</div>} initialDelay={400} />
                                </div>
                                <div class="">
                                    <OpacityAnimatedText show={showLA()} text={<div ref={lA!}><LabAssistant /></div>} initialDelay={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ScrollIndicator(props: {signal: boolean, hidden: boolean}) {
    return (
        <div>
            <div class="absolute right-8 bottom-5"
                 classList={{"scroll-indicator-hide": props.signal, "scroll-indicator-show": !props.signal}}>
                <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>
                    <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>
                </div>
            </div>
        </div>
    )
}