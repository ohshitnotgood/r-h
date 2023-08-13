import {Javascript, Database, Android, Kotlin, Swift, MathTA, LabAssistant} from "../experience/Components"
import {createEffect, createSignal, onMount} from "solid-js";
import {createScrollPosition} from "@solid-primitives/scroll";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {PrimaryText} from "../reusable/Texts";



export default function MobileExperience(props: any) {

    const position = createScrollPosition()

    const [showJavascript, setShowJavascript] = createSignal(false)
    const [showDatabase, setShowDatabase] = createSignal(false)
    const [showKotlin, setShowKotlin] = createSignal(false)
    const [showSwift, setShowSwift] = createSignal(false)
    const [showAndroid, setShowAndroid] = createSignal(false)

    const [showMathTA, setShowMathTA] = createSignal(false)
    const [showLA, setLA] = createSignal(false)

    let title: HTMLDivElement
    let subtitle: HTMLDivElement
    let js: HTMLDivElement
    let db: HTMLDivElement
    let kotlin: HTMLDivElement
    let swift: HTMLDivElement
    let android: HTMLDivElement

    let mathTA: HTMLDivElement
    let lA: HTMLDivElement

    function hideAllComponents() {
        setShowSwift(false)
        setShowAndroid(false)
        setShowJavascript(false)
        setShowDatabase(false)
        setShowKotlin(false)

        setShowMathTA(false)
        setLA(false)
    }

    setShowJavascript(true)

    createEffect(() => {
        console.log(position.y)
        if (position.y > (1200 + title.clientHeight) * 0.50) setShowDatabase(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight) * 0.50) setShowKotlin(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight + kotlin.clientHeight) * 0.60) setShowAndroid(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight) * 0.70) setShowSwift(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight + swift.clientHeight) * 0.70) setShowMathTA(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight + swift.clientHeight + mathTA.clientHeight) * 0.70) setLA(true)
    })

    return (
        <div ref={props.ref} id="experience" class={`bg-bg-${props.palette} duration-700 transition-all py-12 border-t border-black`}>
            <nav class="w-screen px-12 h-[7vh] grid content-center">
                02.
            </nav>
            <div class="">
                <div class="text-6xl px-8 hyphens-manual font-bold uppercase">
                    <OpacityAnimatedText show={!props.hidden} children={
                        <div ref={title!}>
                            <PrimaryText children={<div>Work Experie&shynce</div>} bnT={""} lang={props.lang} palette={props.palette} class={""} />
                        </div>
                    } initialDelay={800} />
                </div>
            </div>
            <div class="mx-8 my-4 font-bold mt-10 text-3xl lowercase ">
                <OpacityAnimatedText show={!props.hidden} children={
                    <div ref={title!}>
                        <PrimaryText children={"independent development"} bnT={""} lang={props.lang} palette={props.palette} class={""} />
                    </div>} initialDelay={800} />
            </div>

            <div class="px-8">
                <OpacityAnimatedText show={showJavascript()} children={<div ref={js!}><Javascript palette={props.palette}/></div>} initialDelay={1500} />
                <OpacityAnimatedText show={showDatabase()} children={<div ref={db!}><Database palette={props.palette}/></div>} initialDelay={400} />
                <OpacityAnimatedText show={showKotlin()} children={<div ref={kotlin!}><Kotlin palette={props.palette}/></div>} initialDelay={400} />
                <OpacityAnimatedText show={showAndroid()} children={<div ref={android!}><Android palette={props.palette}/></div>} initialDelay={400} />
                <OpacityAnimatedText show={showSwift()} children={<div ref={swift!}><Swift palette={props.palette}/></div>} initialDelay={400} />
            </div>

            <div class="mx-8 my-4 font-bold mt-10 text-3xl lowercase ">
                <OpacityAnimatedText show={showMathTA()} children={
                    <div>
                        <PrimaryText children={"Teaching assistant"} bnT={""} lang={props.lang} palette={props.palette} class={""} />
                    </div>} initialDelay={400} />
            </div>

            <div class="px-8 ">
                <OpacityAnimatedText show={showLA()} children={<div ref={mathTA!}><MathTA palette={props.palette}/></div>} initialDelay={400} />
            </div>

            <div class="px-8 my-4 font-bold mt-10 text-3xl lowercase ">
                <OpacityAnimatedText show={showLA()} children={
                    <div>
                        <PrimaryText children={"Lab assistant"} bnT={""} lang={props.lang} palette={props.palette} class={""} />
                    </div>} initialDelay={400} />
            </div>

            <div class="px-8 ">
                <OpacityAnimatedText show={showLA()} children={<div ref={lA!}><LabAssistant palette={props.palette} /></div>} initialDelay={400} />
            </div>

        </div>
    )
}
