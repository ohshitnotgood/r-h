import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import {createEffect, createSignal, Show} from "solid-js";
import Header from "../reusable/Header";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {SecondaryText, PrimaryText} from "../reusable/Texts";
import {Database, Javascript, Kotlin, MathTA, Swift} from "../experience/Components";
import Section from "../reusable/Section";
import {Card, HomeworkTracker} from "./Components";

export default function Projects(props: {lang: string, palette: number, hidden: boolean, onclickAction: any, initialDelay:number}) {

    const [userReachedBottom, setUserReachBottom] = createSignal(false)

    
    const [showTitle, setShowTitle] = createSignal(true)

    const [showCurrentProjectTitle, setShowCurrentProjectTitle] = createSignal(false)
    const [showHomeworkProject, setShowHomeworkProject] = createSignal(false)

    const [showPastProjectTitle, setShowPastProjectTitle] = createSignal(false)
    const [showMomentumScroll, setShowMomentumScroll] = createSignal(false)


    const [showUpcomingProjectTitle, setShowUpcomingProjectTitle] = createSignal(false)

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

    createEffect(() => {
        if (!props.hidden)
            setShowTitle(true)
        else hideAllComponents()
    })

    function hideAllComponents() {
        setShowCurrentProjectTitle(false)
        setShowMomentumScroll(false)
    }

    function onScrollDown(e: any) {
        console.log("Experience scroll position" + mainContent.scrollTop)

        // Toggle project title
        if (mainContent.scrollTop > title.clientHeight + subtitle.clientHeight) setShowCurrentProjectTitle(true)
    }

    return (
        <Section header_en={`Projects`}
                 headerDelay={props.initialDelay} hidden={props.hidden} sectionNumber_en={`04.`} sectionNumber_bn={`০৪.`}
                 palette={props.palette} lang={props.lang} clickAction={props.onclickAction} secondaryActionButton={<ScrollIndicator signal={userReachedBottom()}/>}>
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
                    <div class={`text-4xl lowercase font-bold transition-all duration-700`}
                         classList={{"mt-0 opacity-1 sticky top-0": showCurrentProjectTitle(), "pt-32 opacity-0": !showCurrentProjectTitle()}}>
                        <PrimaryText class={`pt-[1vh] bg-[color:var(--bg-color)]`}>
                            Current projects
                        </PrimaryText>
                        <div class={`w-full h-[1vh] bg-[color:var(--bg-color)]`}></div>
                    </div>


                    <div class={`space-y-8 py-8`}>
                        {/*Android section*/}
                        <CardColumns title={`android`}>
                            <Card>
                                <h1>
                                    <PrimaryText>Tennis for Two</PrimaryText>
                                </h1>
                                <p>
                                    <SecondaryText>
                                        Tennis-for-Two, an ungraded college project with my colleague Alin-Cristian
                                        Serban at KTH, revives the 1958 game on an Arduino microcontroller.
                                        Players control in-game rackets via a phone app, tracking gyroscope data
                                        sent to an ESP32 and then transmitted to the MIPS-microprocessor. SPI
                                        development paused due to hardware constraints; set to resume in November.
                                    </SecondaryText>
                                </p>

                                <PrimaryText>
                                    <p class={`footer`}>
                                        <em>
                                            Frameworks used:
                                        </em>
                                        <span>C++/mips32.h</span>
                                        <span>ESPAsyncWebServer</span>
                                        <span>AsyncTCP</span>
                                        <span>SwiftUI</span>
                                        <span>CoreMotion</span>
                                        <span>AndroidSDK</span>
                                        <span>Ktor</span>
                                    </p>
                                </PrimaryText>
                            </Card>
                        </CardColumns>
                        
                        <CardColumns title={`javascript`}>
                            <Card>
                                <h1>
                                    <PrimaryText>Scheduler</PrimaryText>
                                </h1>
                                <p>
                                    <SecondaryText>
                                        An exceptionally adaptable and remarkably swift online questionnaire
                                        platform for KTH's utilization. The platform will introduce
                                        "Routes" that will change subsequent queries based on earlier responses.
                                        Form creators will have the ability to not only personalize questions,
                                        but also customize prompts, incorporating images
                                        into multiple-choice selections. The application is set to feature various
                                        themes, with plans to incorporate a SQL-style query language and
                                        graphs for enhanced control over data visualization.
                                    </SecondaryText>
                                </p>

                                <PrimaryText>
                                    <p class={`footer`}>
                                        <em>
                                            Frameworks used:
                                        </em>
                                        <span>SolidJS</span>
                                        <span>SolidStart</span>
                                        <span>TypeScript</span>
                                        <span>TailwindCSS</span>
                                        <span>Prisma</span>
                                        <span>Postgresql</span>
                                    </p>
                                </PrimaryText>
                            </Card>
                        </CardColumns>
                    </div>
                </div>

                {/*Past project*/}
                <div>
                    <div class={`text-4xl lowercase font-bold transition-all duration-700 pt-34`}
                         classList={{"mt-0 opacity-1 sticky top-0": showCurrentProjectTitle(), "pt-32 opacity-0": !showCurrentProjectTitle()}}>
                        <PrimaryText class={`pt-[1vh] bg-[color:var(--bg-color)]`}>
                            Past projects
                        </PrimaryText>
                        <div class={`w-full h-[1vh] bg-gradient-to-b from-[color:var(--bg-color)] to-transparent`}></div>
                    </div>

                    <div class={`space-y-8 py-8`}>
                        {/*Kotlin section*/}
                        <CardColumns title={`android`}>
                            <Card>
                                <h1>Homework Tracker</h1>
                                <p>
                                    <SecondaryText>
                                        During my time in high school, I developed an Android application aimed at
                                        tracking homework tasks. As its name implies, the app's purpose was to
                                        maintain a log of assignment deadlines. Additionally, the app would generate
                                        personalized automatic alerts for users. What set this application apart from a
                                        basic calendar reminder was its incorporation of distinct fields, such as
                                        textbook page numbers and dates for referencing past papers.
                                    </SecondaryText>
                                </p>

                                <p>
                                    <em>Frameworks used</em>
                                    <span>Android Studio</span>
                                    <span>AndroidSDK</span>
                                    <span>Kotlin</span>
                                    <span>LiveData</span>
                                    <span>MotionLayout</span>
                                </p>
                            </Card>
                        </CardColumns>

                        <CardColumns title={`swift`}>
                            <Card>
                                <h1>Eye Allergy Tracker</h1>
                                <p>
                                    <SecondaryText>
                                        A simple macOS app, built using SwiftUI, Swift Graphs and FileManager to track events of itches during a period I contracted eye allergies.
                                        This app would log data of eye itches over a period of time to aid in recording the effectiveness of the medicines received from the doctor.
                                        The graph displayed was a simple SwiftUI graph
                                    </SecondaryText>
                                </p>

                                <p>
                                    <em>Frameworks used</em>
                                    <span>SwiftUI</span>
                                    <span>Swift Graphs</span>
                                </p>
                            </Card>
                        </CardColumns>

                        <CardColumns title={`python & bash`}>
                            <Card>
                                <h1>hexcom</h1>
                                <p>
                                    <SecondaryText>
                                        A Python script uses the command line to convert binary inputs into
                                        their hexadecimal equivalents swiftly and efficiently.
                                        While studying in a course involving processor architecture, this Python script
                                        was conceived to verify on-paper conversions between hexadecimal and binary codes.
                                    </SecondaryText>
                                </p>

                                <p>
                                    <em>Frameworks used</em>
                                    <span>Python3</span>
                                    <span>rich</span>
                                    <span>Python ArgParser</span>
                                    <span>Bash Script</span>
                                </p>
                            </Card>
                        </CardColumns>
                    </div>
                </div>

                {/*Upcoming projects*/}
                <div>
                    <div class={`text-4xl lowercase font-bold transition-all duration-700 pt-34`}
                         classList={{"mt-0 opacity-1 sticky top-0": showCurrentProjectTitle(), "pt-32 opacity-0": !showCurrentProjectTitle()}}>
                        <PrimaryText class={`pt-[1vh] bg-[color:var(--bg-color)]`}>
                            Upcoming projects
                        </PrimaryText>
                        <div class={`w-full h-[1vh] bg-gradient-to-b from-[color:var(--bg-color)] to-transparent`}></div>
                    </div>

                    <CardColumns title={`typescript`}>
                        <Card>
                            <h1>solid-momentum-scroll</h1>

                            <p>
                                A SolidJS plugin that integrates momentum scrolling and parallax effects into webpage
                                scrolling behavior. During website development, innovative approaches were employed
                                for momentum scrolling, with ongoing testing prior to its SolidJS Ecosystem release.
                            </p>
                        </Card>
                    </CardColumns>
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

function CardColumns( props: { title: string, children: any}) {
    return (
        <div class={`transition-all duration-700 grid grid-cols-[25%_75%]`}>
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