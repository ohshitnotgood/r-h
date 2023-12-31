import ScrollIndicatorIcon from '../../assets/icons/ic_down_circled.svg'
import {createEffect, createSignal } from "solid-js";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {SecondaryText, PrimaryText} from "../reusable/Texts";
import Section from "../reusable/Section";
import {
    SchedulerCard,
    EyeTrackerCard,
    MomentumScrollCard,
    TennisForTwoCard,
    HomeworkCard,
    HexcomCard, SwiftEssentialsCard, ThisWCard
} from "./Components";


export default function Projects(props: {lang: string, palette: number, hidden: boolean, onclickAction: any, initialDelay:number}) {

    const [userReachedBottom, setUserReachBottom] = createSignal(false)

    
    const [showTitle, setShowTitle] = createSignal(true)
    const [showSubtitle, setShowSubtitle] = createSignal(true)

    const [showCurrentProjectTitle, setShowCurrentProjectTitle] = createSignal(false)

    const [showSchedulerProject, setShowSchedulerProject] = createSignal(false)
    const [showPastProjectTitle, setShowPastProjectTitle] = createSignal(false)
    const [showTFT, setShowTFT] = createSignal(false)
    const [showHomeworkProject, setShowHomeworkProject] = createSignal(false)
    const [showEyeTracker, setShowEyeTracker] = createSignal(false)
    const [showHEXCOM, setShowHEXCOM] = createSignal(false)
    const [showEssential, setShowEssentials] = createSignal(false)


    const [showThisW, setShowThisW] = createSignal(true)

    const [showUpcomingProjectTitle, setShowUpcomingProjectTitle] = createSignal(false)
    const [showMomentumScroll, setShowMomentumScroll] = createSignal(false)

    let mainContent: HTMLDivElement

    /**
     * Reference for the page title
     */
    let title: HTMLDivElement

    /**
     * Reference for the page subtitle
     */
    let subtitle: HTMLDivElement

    /**
     * Reference for _Homework_ card
     */
    let hw: HTMLDivElement

    /**
     * Reference for THIS website
     */
    let thisW: HTMLDivElement

    /**
     * Reference for _hexcom_ card
     */
    let hexcom: HTMLDivElement

    /**
     * Reference for _Eye Tracker_ card
     */
    let eyeTracker: HTMLDivElement

    /**
     * Reference for _Tennis for Two_
     */
    let tft: HTMLDivElement

    /**
     * Reference for _KTH scheduler_.
     */
    let scheduler: HTMLDivElement

    /**
     * Reference for _Current projects_ title
     */
    let cpTitle: HTMLDivElement

    /**
     * Reference for _Past projects_ title
     */
    let ppTitle: HTMLDivElement

    /**
     * Reference for _Upcoming projects_ title
     */
    let upTitle: HTMLDivElement

    let mScroll: HTMLDivElement

    let essentials: HTMLDivElement


    createEffect(() => {
        if (!props.hidden)
            setShowTitle(true)
        else hideAllComponents()
    })

    function hideAllComponents() {
        // setShowCurrentProjectTitle(false)
        // setShowMomentumScroll(false)
    }

    function onScrollDown(e: any) {
        console.log("Experience scroll position" + mainContent.scrollTop)

        let height = title.clientHeight + subtitle.clientHeight

        // Toggle page subtitle
        if (mainContent.scrollTop > (height) * 0.8) setShowSubtitle(true)
        else setShowSubtitle(false)

        // Toggle current project title
        if (mainContent.scrollTop > (height) * 0.8) setShowCurrentProjectTitle(true)
        else setShowCurrentProjectTitle(false)

        // Toggle tennis for two
        height += cpTitle.clientHeight
        if (mainContent.scrollTop > (height) * 0.8) {
            setShowTFT(true)
            console.log("Setting tft to visible")
        } else setShowTFT(false)

        // Toggle Scheduler
        height += tft.clientHeight
        if (mainContent.scrollTop > (height) * 0.8) {
            setShowSchedulerProject(true)
            console.log("Setting Scheduler to visible")
        } else setShowPastProjectTitle(false)

        // Toggle ppTitle
        height += scheduler.clientHeight
        if (mainContent.scrollTop > height * 0.8) {
            setShowPastProjectTitle(true)
            console.log("Setting past project title to visible")
        } else setShowPastProjectTitle(false)

        // toggle hw tracker
        height += ppTitle.clientHeight
        if (mainContent.scrollTop > height * 0.8) {
            setShowHomeworkProject(true)
            console.log("Setting homework project visibility")
        } else setShowHomeworkProject(false)

        // toggle eye tracker
        height += hw.clientHeight
        if (mainContent.scrollTop > height * 0.8) {
            setShowEyeTracker(true)
            console.log("Setting eye tracker visibility")
        } else setShowEyeTracker(false)

        // toggle hexcom
        height += eyeTracker.clientHeight
        if (mainContent.scrollTop > height * 0.8) {
            setShowHEXCOM(true)
            console.log("Setting hexcom visibility")
        } else setShowHEXCOM(false)

        // toggle essential
        height += hexcom.clientHeight
        if (mainContent.scrollTop > height * 0.8) {
            setShowEssentials(true)
            console.log("Setting hexcom visibility")
        } else setShowEssentials(false)

        // toggle upcoming project titles
        height += essentials.clientHeight
        if (mainContent.scrollTop > height * 0.8) {
            setShowUpcomingProjectTitle(true)
            console.log("Setting upcoming project titles visibility")
        } else setShowUpcomingProjectTitle(false)

        height += upTitle.clientHeight
        if (mainContent.scrollTop > height * 0.8) {
            setShowMomentumScroll(true)
            console.log("Setting essentials visibility")
        } else setShowMomentumScroll(false)
    }

    const [linkPositionX, setLinkPositionX] = createSignal('left: 0;')
    const [linkPositionY, setLinkPositionY] = createSignal('top: 0;')
    const [linkText, setLinkText] = createSignal('null')


    let tertiaryButton = (
        <div class={`absolute text-[color:var(--bg-color)] bg-[color:var(--primary-color-post)] px-2 text-sm rounded-lg whitespace-nowrap z-30`} classList={{'hidden': linkText() == 'null'}} style={`${linkPositionX()} ${linkPositionY()}`}>
            {linkText()}
        </div>
    )

    return (
        <Section header_en={`Projects`}
                 headerDelay={props.initialDelay} hidden={props.hidden} sectionNumber_en={`04.`} sectionNumber_bn={`০৪.`}
                 palette={props.palette} lang={props.lang} clickAction={props.onclickAction} tertiaryActionButton={tertiaryButton} secondaryActionButton={<ScrollIndicator signal={userReachedBottom()}/>}>
            <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">

                <div>
                    <div class={`pt-[30vh] transition-all duration-700`} classList={{"opacity-0 mt-[-100px]": !showTitle(), "opacity-1 mt-0": showTitle()}}>
                        <div class={`font-bold text-7xl pb-10 uppercase `}>
                            <OpacityAnimatedText show={!props.hidden} initialDelay={800}>
                                <div ref={title!}>
                                    <PrimaryText>Personal and school projects</PrimaryText>
                                </div>
                            </OpacityAnimatedText>
                        </div>
                        <div>
                            <OpacityAnimatedText show={!props.hidden} initialDelay={1000} >
                                <div ref={subtitle!}>
                                    <PrimaryText class={`text-xl`}>
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

                    {/*Current project*/}
                    <div ref={cpTitle!} class={`text-4xl lowercase font-bold transition-all duration-700 bg-[color:var(--bg-color)] z-20`}
                         classList={{"mt-0 opacity-1 sticky top-0": showCurrentProjectTitle(), "pt-32 opacity-0": !showCurrentProjectTitle()}}>
                        <PrimaryText class={`pt-[10vh] bg-[color:var(--bg-color)]`}>
                            Current Projects
                        </PrimaryText>
                        <div class={`w-full h-[1vh] bg-gradient-to-b from-[color:var(--bg-color)] to-transparent`}></div>
                    </div>

                    <div class={`space-y-8 py-8`}>
                        {/* tennis for two */}
                        <CardColumns classList={{"mt-0 opacity-1 ": showTFT(), "pt-32 opacity-0": !showTFT()}} ref={tft!} title={`android`}>
                            <TennisForTwoCard setTextOnHover={setLinkText} xSetter={setLinkPositionX} ySetter={setLinkPositionY} />
                        </CardColumns>


                        {/* Scheduler */}
                        <CardColumns classList={{"mt-0 opacity-1": showSchedulerProject(), "pt-32 opacity-0": !showSchedulerProject()}}
                                     ref={scheduler!} title={`javascript`}>
                            <SchedulerCard textSetter={setLinkText} xSetter={setLinkPositionX} ySetter={setLinkPositionY}/>
                        </CardColumns>
                    </div>
                </div>

                {/*Past project*/}
                <div>
                    <div ref={ppTitle!} class={`text-4xl lowercase font-bold transition-all duration-700 bg-[color:var(--bg-color)] z-20`}
                         classList={{"mt-0 opacity-1 sticky top-0": showPastProjectTitle(), "pt-32 opacity-0": !showPastProjectTitle()}}>
                        <PrimaryText class={`pt-[10vh] bg-[color:var(--bg-color)]`}>
                            Past projects
                        </PrimaryText>
                        <div class={`w-full h-[1vh] bg-gradient-to-b from-[color:var(--bg-color)] to-transparent`}></div>
                    </div>

                    <div class={`space-y-8 py-8`}>
                        {/*Homework section*/}
                        <CardColumns classList={{"mt-0 opacity-1 ": showHomeworkProject(), "pt-32 opacity-0": !showHomeworkProject()}}
                                     ref={hw!} title={`android`}>
                            <HomeworkCard textSetter={setLinkText} xSetter={setLinkPositionX} ySetter={setLinkPositionY}/>
                        </CardColumns>

                        {/*This.Website*/}
                        <CardColumns classList={{"mt-0 opacity-1 ": showThisW(), "pt-32 opacity-0": !showThisW()}}
                                     ref={thisW!} title={`typescript/css`}>
                            <ThisWCard textSetter={setLinkText} xSetter={setLinkPositionX} ySetter={setLinkPositionY}/>
                        </CardColumns>

                        {/*Eye tracker*/}
                        <CardColumns classList={{"mt-0 opacity-1 ": showEyeTracker(), "pt-32 opacity-0": !showEyeTracker()}}
                                     ref={eyeTracker!} title={`swift`}>
                            <EyeTrackerCard xSetter={setLinkPositionX} ySetter={setLinkPositionY} setTextOnHover={setLinkText}/>
                        </CardColumns>

                        {/*hexcom*/}
                        <CardColumns classList={{"mt-0 opacity-1 ": showHEXCOM(), "pt-32 opacity-0": !showHEXCOM()}}
                                     ref={hexcom!} title={`python & bash`}>
                            <HexcomCard textSetter={setLinkText} xSetter={setLinkPositionX} ySetter={setLinkPositionY} />
                        </CardColumns>

                        {/*Swift Essentials*/}
                        <CardColumns classList={{"mt-0 opacity-1 ": showEssential(), "pt-32 opacity-0": !showEssential()}}
                                     ref={essentials!} title={`swift`}>
                            <SwiftEssentialsCard xSetter={setLinkPositionX} ySetter={setLinkPositionY} setTextOnHover={setLinkText} />
                        </CardColumns>
                    </div>
                </div>

                {/*Upcoming projects*/}
                <div>
                    <div ref={upTitle!} class={`text-4xl lowercase font-bold transition-all duration-700 bg-[color:var(--bg-color)] z-20`}
                         classList={{"mt-0 opacity-1 sticky top-0": showUpcomingProjectTitle(), "pt-32 opacity-0": !showUpcomingProjectTitle()}}>
                        <PrimaryText class={`pt-[10vh] bg-[color:var(--bg-color)]`}>
                            Upcoming projects
                        </PrimaryText>
                        <div class={`w-full h-[5vh] bg-gradient-to-b from-[color:var(--bg-color)] to-transparent`}></div>
                    </div>

                    <CardColumns ref={mScroll!} title={`typescript`}
                                 classList={{"mt-0 opacity-1 ": showMomentumScroll(), "pt-32 opacity-0": !showMomentumScroll()}}>
                        <MomentumScrollCard setTextOnHover={setLinkText} xSetter={setLinkPositionX} ySetter={setLinkPositionY}/>
                    </CardColumns>
                    <div class={`h-[30vh]`}> </div>
                </div>
            </div>
        </Section>
    )
}

function ScrollIndicator(props: {signal: boolean}) {
    return (
        <div classList={{"scroll-indicator-hide": props.signal, "scroll-indicator-show": !props.signal}}>
            <ScrollIndicatorIcon class="w-8 h-8 fill-[color:var(--primary-color-post)]" alt="Down scroll indicator"/>
        </div>
    )
}

function CardColumns( props: { classList: any, ref: HTMLDivElement, title: string, children: any}) {
    return (
        <div ref={props.ref} classList={props.classList} class={`transition-all duration-700 grid grid-cols-[25%_75%]`}>
            <div class={`pt-4`}>
                <SecondaryText>
                    {props.title}
                </SecondaryText>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}