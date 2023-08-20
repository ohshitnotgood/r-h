import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import {createEffect, createSignal, Show} from "solid-js";
import Header from "../reusable/Header";
import linkIcon from '../../assets/icons/ic_open_link.svg'
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {SecondaryText, PrimaryText} from "../reusable/Texts";
import {Database, Javascript, Kotlin, LabAssistant, MathTA, Swift} from "./Components";
import Section from "../reusable/Section";

export default function Experience(props: {lang: string, palette: number, hidden: boolean, onclickAction: any, initialDelay:number}) {

    const [userReachedBottom, setUserReachBottom] = createSignal(false)

    const [showJavascript, setShowJavascript] = createSignal(false)
    const [showDatabase, setShowDatabase] = createSignal(false)
    const [showKotlin, setShowKotlin] = createSignal(false)
    const [showSwift, setShowSwift] = createSignal(false)
    const [showAndroid, setShowAndroid] = createSignal(false)

    const [showMathTA, setShowMathTA] = createSignal(false)
    const [showLA, setLA] = createSignal(false)


    const [showTitle, setShowTitle] = createSignal(true)
    const [showIndiDevHeader, setIndiDevHeaderVisibility] = createSignal(false)
    const [stickyIndiHeader, setStickyIndiHeader] = createSignal(true)

    const [linkPositionX, setLinkPositionX] = createSignal('left: 0;')
    const [linkPositionY, setLinkPositionY] = createSignal('top: 0;')
    const [linkText, setLinkText] = createSignal('null')

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
            setShowTitle(true)
        else hideAllComponents()
    })

    function hideAllComponents() {
        setShowSwift(false)
        setShowAndroid(false)
        setShowJavascript(false)
        setShowDatabase(false)
        setShowKotlin(false)
        setShowSwift(false)
        setShowMathTA(false)
        setLA(false)
    }

    function onScrollDown(e: any) {
        console.log("Experience scroll position" + mainContent.scrollTop)

        if (mainContent.scrollTop > 240) setShowTitle(false)
        else setShowTitle(true)

        if (mainContent.scrollTop > 0.3 * window.innerHeight) setIndiDevHeaderVisibility(true)
        else setIndiDevHeaderVisibility(false)


        if (mainContent.scrollTop > 0.4 * window.innerHeight && !showJavascript())
            setShowJavascript(true)
        else if (mainContent.scrollTop < 0.4 * window.innerHeight && showJavascript())
            setShowJavascript(false)

        if (mainContent.scrollTop > (window.innerHeight * 0.5) && !showDatabase())
            setShowDatabase(true)
        else if (mainContent.scrollTop < (window.innerHeight * 0.5) && showDatabase())
            setShowDatabase(false)


        if (mainContent.scrollTop > (window.innerHeight * 0.6) * .8 && !showKotlin())
            setShowKotlin(true)
        else if (mainContent.scrollTop < (window.innerHeight * 0.6) && showKotlin())
            setShowKotlin(false)

        if (mainContent.scrollTop > (window.innerHeight * 0.8) + 20)
            setStickyIndiHeader(false)
        else
            setStickyIndiHeader(true)


        if (mainContent.scrollTop > (window.innerHeight * 0.9) && !showSwift())
            setShowSwift(true)
        else if (mainContent.scrollTop < (window.innerHeight * 0.9)  && showSwift())
            setShowSwift(false)

        if (mainContent.scrollTop >= 1330) setUserReachBottom(true)
        else setUserReachBottom(false)
    }

    let tertiaryButton = (
        <div class={`absolute text-[color:var(--bg-color)] bg-[color:var(--primary-color-post)] px-2 text-sm rounded-lg whitespace-nowrap z-30`} classList={{'hidden': linkText() == 'null'}} style={`${linkPositionX()} ${linkPositionY()}`}>
            {linkText()}
        </div>
    )

    return (
        <Section header_en={`Experience`}
                 headerDelay={props.initialDelay} hidden={props.hidden} sectionNumber_en={`02.`} sectionNumber_bn={`০৩.`}
                 palette={props.palette} lang={props.lang} clickAction={props.onclickAction} secondaryActionButton={<ScrollIndicator signal={userReachedBottom()}/>} tertiaryActionButton={tertiaryButton}>
            <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                <div>
                    <div class={`pt-[30vh] transition-all duration-700`} classList={{"opacity-0 mt-[-100px]": !showTitle(), "opacity-1 mt-0": showTitle()}}>
                        <div class={`font-bold text-7xl pb-10 uppercase `}>
                            <OpacityAnimatedText show={!props.hidden} initialDelay={300}>
                                <div ref={title!}>
                                    <PrimaryText children={"Independent and Professional Experience"} lang={props.lang} palette={props.palette} class={""} />
                                </div>
                            </OpacityAnimatedText>
                        </div>
                        <div>
                            <OpacityAnimatedText show={!props.hidden} initialDelay={500} >
                                <div ref={subtitle!}>
                                    <PrimaryText bnT="" lang={props.lang} palette={props.palette} class={`text-xl`}>
                                        Since commencing my programming journey in high school,
                                        I have accumulated extensive experience with diverse programming languages
                                        and frameworks highly sought after in the industry. Through numerous personal projects,
                                        I familiarized myself with industry standards and best practices, utilizing these
                                        ventures as platforms for continuous learning, drawing inspiration, and
                                        enhancing my creativity and skill set.
                                    </PrimaryText>
                                </div>
                            </OpacityAnimatedText>
                        </div>
                    </div>
                    <div class={`text-4xl lowercase font-bold transition-all duration-700`}
                         classList={{"mt-0 opacity-1 sticky top-0": showIndiDevHeader(), "pt-32 opacity-0": !showIndiDevHeader()}}>
                        <PrimaryText lang={props.lang} palette={props.palette} class={`pt-[10vh] bg-[color:var(--bg-color)]`}>
                            Independent development
                        </PrimaryText>
                        <div class={`w-full h-[1vh] bg-gradient-to-b from-[color:var(--bg-color)] to-transparent`}></div>
                    </div>


                    <div class={`space-y-8 py-8`}>
                        {/*Javascript cards*/}
                        <div class={`transition-all duration-700 grid grid-cols-[25%_75%] pt-[5vh] opacity-0`} classList={{"opacity-0 mt-32": !showJavascript(), "opacity-1 pt-0": showJavascript()}}>
                            <div class={`pt-4`}>
                                <SecondaryText>
                                    javascript/typescript
                                </SecondaryText>
                            </div>
                            <div ref={js!}>
                                <PrimaryText>
                                    <Javascript/>
                                </PrimaryText>
                            </div>
                        </div>

                        {/*Database cards*/}
                        <div class={`transition-all duration-700 grid grid-cols-[25%_75%] opacity-0`} classList={{"opacity-0 pt-32": !showDatabase(), "opacity-1 pt-2": showDatabase()}}>
                            <div class={`pt-4`}>
                                <SecondaryText lang={props.lang} palette={props.palette}>
                                    databases
                                </SecondaryText>
                            </div>
                            <div ref={db!}>
                                <PrimaryText lang={props.lang} palette={props.palette}>
                                    <Database />
                                </PrimaryText>
                            </div>
                        </div>

                        {/*Kotlin section*/}
                        <div class={`transition-all duration-700 grid grid-cols-[25%_75%]`} classList={{"opacity-0 pt-32": !showKotlin(), "opacity-1 pt-0": showKotlin()}}>
                            <div class={`pt-4`}>
                                <SecondaryText palette={props.palette}>
                                    kotlin
                                </SecondaryText>
                            </div>
                            <div ref={kotlin!}>
                                <PrimaryText palette={props.palette}>
                                    <Kotlin xPosSetter={setLinkPositionX} yPosSetter={setLinkPositionY} linkSetter={setLinkText}/>
                                </PrimaryText>
                            </div>
                        </div>

                        {/*Swift section*/}
                        <div class={`transition-all duration-700 grid grid-cols-[25%_75%] opacity-0`} classList={{"opacity-0 pt-32": !showSwift(), "opacity-1 pt-0": showSwift()}}>
                            <div class={`pt-4`}>
                                <SecondaryText lang={props.lang} palette={props.palette}>
                                    swift
                                </SecondaryText>
                            </div>
                            <div ref={swift!}>
                                <PrimaryText lang={props.lang} palette={props.palette}>
                                    <Swift />
                                </PrimaryText>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class={`text-4xl lowercase font-bold transition-all duration-700 pt-34`}
                         classList={{"pt-0 opacity-1 sticky top-0": showIndiDevHeader(), "pt-32 opacity-0": !showIndiDevHeader()}}>
                        <PrimaryText class={`pt-[10vh] bg-[color:var(--bg-color)]`}>
                            work in high school
                        </PrimaryText>
                        <div class={`w-full h-[1vh] bg-gradient-to-b from-[color:var(--bg-color)] to-transparent`}></div>
                    </div>

                    <div class={`transition-all duration-700 pt-[5vh] grid grid-cols-[25%_75%] opacity-0`} classList={{"opacity-0 pt-32": !showSwift(), "opacity-1 pt-0": showSwift()}}>
                        <div class={`pt-4`}>
                            <SecondaryText>
                                teaching assistant
                            </SecondaryText>
                        </div>
                        <div ref={mathTA!}>
                            <PrimaryText>
                                <MathTA palette={props.palette}/>
                            </PrimaryText>
                        </div>
                    </div>

                    <div class={`transition-all space-y-8 duration-700 pt-[5vh] grid grid-cols-[25%_75%] pb-64 opacity-0`} classList={{"opacity-0 pt-32": !showSwift(), "opacity-1 pt-0": showSwift()}}>
                        <div class={`pt-4`}>
                            <SecondaryText lang={props.lang} palette={props.palette}>
                                lab assistant
                            </SecondaryText>
                        </div>
                        <div ref={lA!}>
                            <PrimaryText lang={props.lang} palette={props.palette}>
                                <LabAssistant palette={props.palette}/>
                            </PrimaryText>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

function ScrollIndicator(props: {signal: boolean}) {
    return (
        <div classList={{"scroll-indicator-hide": props.signal, "scroll-indicator-show": !props.signal}}>
            <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>
        </div>
    )
}