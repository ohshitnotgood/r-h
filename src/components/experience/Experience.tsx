import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import {createEffect, createSignal, Show} from "solid-js";
import Header from "../reusable/Header";
import {Android, Database, Javascript, Kotlin, LabAssistant, MathTA, Swift} from "./Components";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {Text} from "../reusable/Texts";
import AnimatedText from "../reusable/AnimatedText";

export default function Experience(props: {lang: string, palette: number, hidden: boolean, onclickAction: any, initialDelay:number}) {

    const bgColor: {[index: number]: string} = {
        1: "bg-bg-1 z-50 relative",
        2: "bg-bg-2 z-50 relative",
        3: "bg-bg-3 z-50 relative",
        4: "bg-bg-4 z-50 relative",
        5: "bg-bg-5 z-50 relative",
        6: "bg-bg-6 z-50 relative",
        7: "bg-bg-7 z-50 relative",
        8: "bg-bg-8 z-50 relative",
        9: "bg-bg-9 z-50 relative",
        10: "bg-bg-10 z-50 relative",
    }

    const borderColor: {[index: number]: string} = {
        1: "border-contrast-1 border-r",
        2: "border-contrast-2 border-r",
        3: "border-contrast-3 border-r",
        4: "border-contrast-4 border-r",
        5: "border-contrast-5 border-r",
        6: "border-contrast-6 border-r",
        7: "border-contrast-7 border-r",
        8: "border-contrast-8 border-r",
        9: "border-contrast-9 border-r",
        10: "border-contrast-10 border-r",
    }

    const [userReachedBottom, setUserReachBottom] = createSignal(false)

    const [showJavascript, setShowJavascript] = createSignal(false)
    const [showDatabase, setShowDatabase] = createSignal(false)
    const [showKotlin, setShowKotlin] = createSignal(false)
    const [showSwift, setShowSwift] = createSignal(false)
    const [showAndroid, setShowAndroid] = createSignal(false)

    const [showMathTA, setShowMathTA] = createSignal(false)
    const [showLA, setLA] = createSignal(false)


    const [animClass, setAnimClass] = createSignal(false)

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

    function onScrollDown(e: any) {
        console.log("Experience scroll position" + mainContent.scrollTop)

        console.log(mainContent.clientHeight)

        if (mainContent.scrollTop > 20) setAnimClass(true)
        else setAnimClass(false)

        if (mainContent.scrollTop >= 1330) setUserReachBottom(true)
        else setUserReachBottom(false)
    }


    let animTitle = (
        <OpacityAnimatedText show={!props.hidden} text={
            <div ref={title!}>
                <Text enT={"Independent and Professional Experience"} bnT="" lang={props.lang} palette={props.palette} class={""} />
            </div>
        } initialDelay={800} />
    )

    let animSub = (
        <OpacityAnimatedText show={!props.hidden}
                             text={
                                 <div ref={subtitle!}>
                                     <Text
                                         enT={"Since commencing my programming journey in high school, " +
                                             "I have accumulated extensive experience with diverse programming languages " +
                                             "and frameworks highly sought after in the industry. Through numerous personal projects, " +
                                             "I familiarized myself with industry standards and best practices, utilizing these" +
                                             " ventures as platforms for continuous learning, drawing inspiration, and " +
                                             "enhancing my creativity and skill set."}
                                         bnT=""
                                         lang={props.lang}
                                         palette={props.palette}
                                         class={""} />
                                 </div>
                             } initialDelay={1000} />
    )

    return (
        <div class={bgColor[props.palette]}
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>

            <div class={borderColor[props.palette]}>
                <Header palette={props.palette} initialDelay={props.initialDelay} sectionNumber="02." bnSectionNumber="০২." enText="Experience" bnText="কর্মদক্ষতা" hidden={props.hidden} lang={props.lang} actionButton={null}/>

                <OpacityAnimatedText show={!props.hidden} text={<ScrollIndicator signal={userReachedBottom()} hidden={props.hidden}/>} initialDelay={900}/>

                <div class={``} classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                    <div class='' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                        <div class="col-text">
                            <div class={`pt-[40vh]`}>
                                <div class={`font-bold text-7xl uppercase `}>
                                    {animTitle}
                                </div>
                                <div>
                                    {animSub}
                                </div>
                            </div>
                            <div class='independent-anim transition-all duration-700' classList={{"mt-0 opacity-1": animClass(), "mt-32 opacity-0": !animClass()}}>
                                independent development
                            </div>
                        </div>
                    </div>
                </div>

                <div classList={{'absolute  top-0 left-0 w-full h-full ': !props.hidden, "hidden": props.hidden}}>
                    <div class='col-content' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                        <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                            <div class={`h-[50vh] sticky top-[50vh] bg-green-200`}></div>
                            <div class={`h-screen bg-red-400`}></div>
                            <div class={`h-screen bg-transparent`}></div>
                            <div class={`h-screen bg-transparent`}></div>
                        </div>
                    </div>
                </div>

                                {/*Second layout*/}

                            {/*    <div class={`relative`}>*/}
                            {/*        <div class={`absolute top-0 left-0`}>*/}
                            {/*            <div class={"lowercase text-3xl font-bold"}>*/}
                            {/*                <OpacityAnimatedText show={showJavascript()} text={<Text enT="Independent development" bnT="একাকী প্রোগ্রামিং" lang={props.lang} palette={props.palette} class={""}/>} initialDelay={1400}/>*/}
                            {/*            </div>*/}
                            {/*            <div class={"grid space-y-8 grid-cols-[40%_60%]"}>*/}
                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showJavascript()} text={*/}
                            {/*                        <Text enT={"Javascript/Typescript"} class={"uppercase text-sm py-4"} palette={props.palette} lang={props.lang} bnT={"জাভা-স্ক্রিপ্ট/টাইপ-স্ক্রিপ্ট"}/>*/}
                            {/*                    } initialDelay={400} />*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showJavascript()} text={*/}
                            {/*                        <div ref={js!}>*/}
                            {/*                            <Text enT={<Javascript palette={props.palette} />} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                        </div>*/}
                            {/*                    } initialDelay={1500} />*/}
                            {/*                </div>*/}

                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showDatabase()} text={*/}
                            {/*                        <Text enT={"Databases"} class={"uppercase text-sm pt-4"} palette={props.palette} lang={props.lang} bnT={"ডাটাবেস"}/>*/}
                            {/*                    } initialDelay={400} />*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showDatabase()} text={*/}
                            {/*                        <div ref={js!}>*/}
                            {/*                            <Text enT={<Database palette={props.palette} />} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                        </div>*/}
                            {/*                    } initialDelay={400} />*/}
                            {/*                </div>*/}

                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showKotlin()} text={*/}
                            {/*                        <Text enT={"Kotlin"} class={"uppercase text-sm pt-4"} palette={props.palette} lang={props.lang} bnT={"কোটলিন"}/>*/}
                            {/*                    } initialDelay={400} />*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showKotlin()} text={*/}
                            {/*                        <div ref={js!}>*/}
                            {/*                            <Text enT={<Kotlin palette={props.palette} />} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                        </div>*/}
                            {/*                    } initialDelay={400} />*/}
                            {/*                </div>*/}

                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showAndroid()} text={*/}
                            {/*                        <Text enT={"Android"} class={"uppercase text-sm pt-4"} palette={props.palette} lang={props.lang} bnT={"এন্ড্রোইড"}/>*/}
                            {/*                    } initialDelay={400} />*/}
                            {/*                </div>*/}
                            {/*                <div>*/}
                            {/*                    <OpacityAnimatedText show={showAndroid()} text={*/}
                            {/*                        <div ref={js!}>*/}
                            {/*                            <Text enT={<Android palette={props.palette} />} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                        </div>*/}
                            {/*                    } initialDelay={400} />*/}
                            {/*                </div>*/}


                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div class={`h-screen w-screen absolute top-0 left-0`}>*/}

                            {/*        </div>*/}

                            {/*    </div>*/}

                            {/*    /!*Original layout*!/*/}
                            {/*    <div class="grid grid-cols-[20%_80%] ">*/}
                            {/*        <div class="uppercase text-sm">*/}
                            {/*            <OpacityAnimatedText show={showMathTA()} text={*/}
                            {/*                <div>*/}
                            {/*                    <Text enT={"Teaching assistant in high school"} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                </div>*/}
                            {/*            } initialDelay={400} />*/}
                            {/*        </div>*/}
                            {/*        <div class="">*/}
                            {/*            <OpacityAnimatedText show={showMathTA()} text={*/}
                            {/*                <div ref={mathTA!}>*/}
                            {/*                    <Text enT={<MathTA palette={props.palette}/>} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                </div>*/}
                            {/*            } initialDelay={400} />*/}
                            {/*        </div>*/}

                            {/*        <div class="uppercase text-sm">*/}
                            {/*            <OpacityAnimatedText show={showLA()} text={*/}
                            {/*                <div>*/}
                            {/*                    <Text enT={"Lab assistant in high school"} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                </div>*/}
                            {/*            } initialDelay={400} />*/}
                            {/*        </div>*/}
                            {/*        <div class="">*/}
                            {/*            <OpacityAnimatedText show={showLA()} text={*/}
                            {/*                <div ref={lA!}>*/}
                            {/*                    <Text enT={<LabAssistant palette={props.palette}/>} bnT={""} lang={props.lang} palette={props.palette} class={""} />*/}
                            {/*                </div>} initialDelay={400} />*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
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