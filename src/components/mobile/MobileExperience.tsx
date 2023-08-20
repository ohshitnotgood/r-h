import {Javascript, Database, Android, Kotlin, MathTA, LabAssistant, Swift} from "../experience/Components"
import {createEffect, createSignal, onMount} from "solid-js";
import {createScrollPosition} from "@solid-primitives/scroll";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {PrimaryText} from "../reusable/Texts";



export default function MobileExperience(props: any) {

    const position = createScrollPosition()

    const [showIndiDevText, setShowIndiText] = createSignal(false)
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

    createEffect(() => {
        console.log(position.y)

        if (position.y < 10) hideAllComponents()

        if (position.y > window.outerHeight * 0.4) setShowIndiText(true)
        if (position.y > window.outerHeight * 0.5) setShowJavascript(true)
        if (position.y > window.outerHeight * 0.6) setShowDatabase(true)
        if (position.y > window.outerHeight * 0.7) setShowKotlin(true)
        if (position.y > window.outerHeight * 0.8) setShowAndroid(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight) * 0.70) setShowSwift(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight + swift.clientHeight) * 0.70) setShowMathTA(true)
        if (position.y > (1200 + title.clientHeight + js.clientHeight + kotlin.clientHeight + android.clientHeight + swift.clientHeight + mathTA.clientHeight) * 0.70) setLA(true)
    })

    return (
        <div ref={props.ref} id="experience" class={`bg-[color:var(--bg-color)] duration-700 transition-all py-12 border-t border-black`}>
            <nav class="w-screen px-8 h-[7vh] grid content-center">
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
            <div class="transition-all border-b border-black duration-700 px-8 my-4 font-bold mt-10 text-3xl lowercase sticky top-[7vh] z-20 bg-[color:var(--bg-color)]"
                 classList={{'opacity-1 mt-0': showIndiDevText(), 'opacity-0 mt-32': !showIndiDevText()}}>
                <OpacityAnimatedText show={!props.hidden} initialDelay={800} >
                    <div ref={title!} class={`py-4`}>
                        <PrimaryText>
                            independent development
                        </PrimaryText>
                    </div>
                </OpacityAnimatedText>
            </div>

            <div class="px-8 space-y-8">
                <div ref={js!} class={`transition-all duration-700`} classList={{'mt-0 opacity-1': showJavascript(), 'mt-32 opacity-0': !showJavascript()}}>
                    <Javascript palette={props.palette}/>
                </div>
                <div ref={db!} class={`transition-all duration-700`} classList={{'opacity-0 mt-32': !showDatabase(), 'opacity-1 mt-0': showDatabase()}}>
                    <Database />
                </div>

                <OpacityAnimatedText show={showKotlin()} children={<div ref={kotlin!}><Kotlin/></div>} initialDelay={400} />
                <OpacityAnimatedText show={showAndroid()} children={<div ref={android!}><Android palette={props.palette}/></div>} initialDelay={400} />
                <OpacityAnimatedText show={showSwift()} children={<div ref={swift!}><Swift/></div>} initialDelay={400} />
            </div>

            <div class="transition-all border-b border-black duration-700 px-8 my-4 font-bold mt-10 text-3xl lowercase sticky top-[7vh] z-20 bg-[color:var(--bg-color)]">
                <OpacityAnimatedText show={showMathTA()} children={
                    <div class={`py-4`}>
                        <PrimaryText>
                            Teaching assistant
                        </PrimaryText>
                    </div>} initialDelay={400} />
            </div>

            <div class="px-8 ">
                <OpacityAnimatedText show={showLA()} children={<div ref={mathTA!}><MathTA palette={props.palette}/></div>} initialDelay={400} />
            </div>

            <div class="mx-8 border-b border-black py-4 top-[7vh] bg-[color:var(--bg-color)] sticky font-bold z-20 text-3xl lowercase ">
                <OpacityAnimatedText show={showLA()} children={
                    <div class={`py-4`}>
                        <PrimaryText>
                            Lab assistant
                        </PrimaryText>
                    </div>} initialDelay={400} />
            </div>

            <div class="px-8 ">
                <OpacityAnimatedText show={showLA()} children={<div ref={lA!}><LabAssistant palette={props.palette} /></div>} initialDelay={400} />
            </div>

        </div>
    )
}
