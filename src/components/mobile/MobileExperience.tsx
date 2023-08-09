import {Javascript, Database, Android, Kotlin, Swift, MathTA, LabAssistant} from "../experience/Components"
import {createEffect, createSignal, onMount} from "solid-js";
import {createScrollPosition} from "@solid-primitives/scroll";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";



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
        <div ref={props.ref} id="experience" class="py-12 border-t border-black">
            <nav class="w-screen px-12 h-[7vh] grid content-center">
                02.
            </nav>


            <div class="">
                <div class="text-6xl px-8 hyphens-manual font-bold uppercase">
                    <OpacityAnimatedText show={!props.hidden} text={<div ref={title!}>Work Experie&shynce</div>} initialDelay={800} />
                </div>
            </div>

            {/*<div class="pt-6 text-sm px-12 hidden">*/}
            {/*    <OpacityAnimatedText show={!props.hidden}*/}
            {/*                         text={<div ref={subtitle!}>Since commencing my programming journey in high school, I have accumulated extensive experience with diverse programming languages and frameworks highly sought after in the industry. Through numerous personal projects, I familiarized myself with industry standards and best practices, utilizing these ventures as platforms for continuous learning, drawing inspiration, and enhancing my creativity and skill set.</div>} initialDelay={1000} />*/}
            {/*</div>*/}


            <div class="mx-8 my-4 font-bold mt-10 text-3xl lowercase ">
                <OpacityAnimatedText show={!props.hidden} text={<div ref={title!}>independent development</div>} initialDelay={800} />
            </div>

            <div class="px-8">
                <OpacityAnimatedText show={showJavascript()} text={<div ref={js!}><Javascript /></div>} initialDelay={1500} />
                <OpacityAnimatedText show={showDatabase()} text={<div ref={db!}><Database /></div>} initialDelay={400} />
                <OpacityAnimatedText show={showKotlin()} text={<div ref={kotlin!}><Kotlin /></div>} initialDelay={400} />
                <OpacityAnimatedText show={showAndroid()} text={<div ref={android!}><Android /></div>} initialDelay={400} />
                <OpacityAnimatedText show={showSwift()} text={<div ref={swift!}><Swift /></div>} initialDelay={400} />
            </div>

            <div class="mx-8 my-4 font-bold mt-10 text-3xl lowercase ">
                <OpacityAnimatedText show={showMathTA()} text={<div>Teaching assistant</div>} initialDelay={400} />
            </div>

            <div class="px-8 ">
                <OpacityAnimatedText show={showLA()} text={<div ref={mathTA!}><MathTA/></div>} initialDelay={400} />
            </div>

            <div class="px-8 my-4 font-bold mt-10 text-3xl lowercase ">
                <OpacityAnimatedText show={showLA()} text={<div>Lab assistant</div>} initialDelay={400} />
            </div>

            <div class="px-8 ">
                <OpacityAnimatedText show={showLA()} text={<div ref={lA!}><LabAssistant /></div>} initialDelay={400} />
            </div>

        </div>
    )
}
