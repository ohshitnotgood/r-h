import {PrimaryText, SecondaryText} from "../reusable/Texts";
import { Card} from "../reusable/Card";
import LinkIcon from "../../assets/icons/ic_link.svg";
import DisableLink from "../../assets/icons/ic_link_off.svg";
import {Show} from "solid-js";


export function TennisForTwoCard( props: {xSetter: any, ySetter: any, setTextOnHover: any}) {
    return (
        <Card>
            <h1>
                <A2 href={`https://github.com/ohshitnotgood/ois-hw-tracker`} hoverTextSetter={props.setTextOnHover} xSetter={props.xSetter} ySetter={props.ySetter}>
                    Tennis for Two
                </A2>

            </h1>
            <p>
                <PrimaryText>
                    Tennis-for-Two, an ungraded college project with my colleague Alin-Cristian
                    Serban at KTH, revives the 1958 game on an Arduino microcontroller.
                    Players control in-game rackets via a phone app, tracking gyroscope data
                    sent to an ESP32 and then transmitted to the MIPS-microprocessor. SPI
                    development paused due to hardware constraints; set to resume in November.
                </PrimaryText>
            </p>

            <PrimaryText>
                <p class={`footer`}>
                    <em>
                        Frameworks used:
                    </em>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover} href={'https://github.com/is1200-example-projects/mcb32tools/releases/'}>
                        C++/mips32.h
                    </A>

                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover} href={'https://github.com/me-no-dev/ESPAsyncWebServer'}>
                        ESPAsyncWebServer
                    </A>

                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover} href={`https://github.com/me-no-dev/AsyncTCP`}>
                        AsyncTCP
                    </A>

                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover} href={'https://developer.apple.com/documentation/swiftui/'}>
                        SwiftUI
                    </A>

                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover} href={'https://developer.apple.com/documentation/swiftui/'}>
                        CoreMotion
                    </A>

                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover} href={'https://developer.android.com/docs'}>
                        AndroidSDK
                    </A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover} href={'https://ktor.io/docs/welcome.html'}>
                        Ktor
                    </A>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function SwiftEssentialsCard( props: {xSetter: any, ySetter: any, setTextOnHover: any} ) {
    return(
        <Card>
            <h1 class={`hover:underline`}>
                <A2 href={`https://github.com/ohshitnotgood/essentials`} hoverTextSetter={props.setTextOnHover} xSetter={props.xSetter} ySetter={props.ySetter}>
                    Swift Essentials
                </A2>
            </h1>
            <p>
                <PrimaryText>
                    A Python script uses the command line to convert binary inputs into
                    their hexadecimal equivalents swiftly and efficiently.
                    While studying in a course involving processor architecture, this Python script
                    was conceived to verify on-paper conversions between hexadecimal and binary codes.
                </PrimaryText>
            </p>
        </Card>
    )
}

export function EyeTrackerCard( props: {xSetter: any, ySetter: any, setTextOnHover: any} ) {
    return (
        <Card>
            <h1 class={`hover:underline`}>
                <A2 href={`https://github.com/ohshitnotgood/eye-allergy.git`} hoverTextSetter={props.setTextOnHover} xSetter={props.xSetter} ySetter={props.ySetter}>
                    Tennis for Two
                </A2>
            </h1>

            <p>
                <PrimaryText>
                    A simple macOS app, built using SwiftUI, Swift Graphs and FileManager to track events of itches during a period I contracted eye allergies.
                    This app would log data of eye itches over a period of time to aid in recording the effectiveness of the medicines received from the doctor.
                    The graph displayed was a simple SwiftUI graph
                </PrimaryText>
            </p>

            <PrimaryText>
                <p>
                    <em>Frameworks used</em>
                    <A href={`https://developer.apple.com/SwiftUI`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover}>SwiftUI</A>
                    <A href={`https://developer.apple.com/documentation/charts`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.setTextOnHover}>Swift Graphs</A>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function MomentumScrollCard( props: {xSetter: any, ySetter: any, setTextOnHover: any} ) {
    return (
        <Card>
            <h1>
                <A2 href={`no project link available yet`} hoverTextSetter={props.setTextOnHover} xSetter={props.xSetter} ySetter={props.ySetter}>
                    solid-momentum-scroll
                </A2>

            </h1>

            <p>
                <PrimaryText>
                    A SolidJS plugin that integrates momentum scrolling and parallax effects into webpage
                    scrolling behavior. During website development, innovative approaches were employed
                    for momentum scrolling, with ongoing testing prior to its SolidJS Ecosystem release.
                </PrimaryText>
            </p>
        </Card>
    )
}

export function SchedulerCard( props: { xSetter: any, ySetter: any, textSetter: any}) {
    return (
        <Card>
            <A2 href={`no project link available yet`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>
                Scheduler
            </A2>
            <p>
                <PrimaryText>
                    An exceptionally adaptable and remarkably swift online questionnaire
                    platform for KTH's utilization. The platform will introduce
                    "Routes" that will change subsequent queries based on earlier responses.
                    Form creators will have the ability to not only personalize questions,
                    but also customize prompts, incorporating images
                    into multiple-choice selections. The application is set to feature various
                    themes, with plans to incorporate a SQL-style query language and
                    graphs for enhanced control over data visualization.
                </PrimaryText>
            </p>

            <PrimaryText>
                <p class={`footer`}>
                    <em>
                        Frameworks used:
                    </em>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href={`https://www.solidjs.com/`}>SolidJS</A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href={`https://start.solidjs.com/getting-started/what-is-solidstart`}>SolidStart</A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href={`https://www.typescriptlang.org/`}>TypeScript</A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href={`https://tailwindcss.com/docs/installation`}>TailwindCSS</A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href={`https://www.prisma.io/docs`}>Prisma</A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href={`https://www.postgresql.org/`}>Postgresql</A>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function HomeworkCard(props: {xSetter: any, ySetter: any, textSetter: any}) {
    return (
        <Card>
            <A2 href={`https://github.com/ohshitnotgood/ois-hw-tracker`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>
                Homework Tracker
            </A2>
            <p>
                <PrimaryText>
                    During my time in high school, I developed an Android application aimed at
                    tracking homework tasks. As its name implies, the app's purpose was to
                    maintain a log of assignment deadlines. Additionally, the app would generate
                    personalized automatic alerts for users. What set this application apart from a
                    basic calendar reminder was its incorporation of distinct fields, such as
                    textbook page numbers and dates for referencing past papers.
                </PrimaryText>
            </p>

            <PrimaryText>
                <p>
                    <em>Frameworks used</em>
                    <A href={`https://developer.android.com/studio`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>Android Studio</A>
                    <A href={'https://developer.android.com/docs'} ySetter={props.ySetter} xSetter={props.xSetter} hoverTextSetter={props.textSetter}>
                        AndroidSDK
                    </A>
                    <A href={`https://kotlinlang.org`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>Kotlin</A>
                    <A href={`https://developer.android.com/topic/libraries/architecture/livedata`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>LiveData</A>
                    <A href={`https://developer.android.com/develop/ui/views/animations/motionlayout`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>MotionLayout</A>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function HexcomCard(props: {xSetter: any, ySetter: any, textSetter: any}) {
    return (
        <Card>
            <A2 href={`https://github.com/ohshitnotgood/hexcom`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>
                hexcom
            </A2>
            <p>
                <PrimaryText>
                    A Python script uses the command line to convert binary inputs into
                    their hexadecimal equivalents swiftly and efficiently.
                    While studying in a course involving processor architecture, this Python script
                    was conceived to verify on-paper conversions between hexadecimal and binary codes.
                </PrimaryText>
            </p>

            <p>
                <PrimaryText>
                    <em>Frameworks used</em>
                    <A href={`https://docs.python.org/3/`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>Python3</A>
                    <A href={`https://github.com/Textualize/rich`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>rich</A>
                    <A href={`https://docs.python.org/3/library/argparse.html`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>Python ArgParser</A>
                    <A href={`https://en.wikipedia.org/wiki/Shell_script`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>Bash Script</A>
                </PrimaryText>
            </p>
        </Card>
    )
}


export function ThisWCard(props: {xSetter: any, ySetter: any, textSetter: any}) {
    return (
        <Card>
            <A2 href={`https://github.com/ohshitnotgood/r-h`} xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter}>
                <code>this.website</code>
            </A2>

            <p>
                <PrimaryText>
                    praanto.com is a personal portfolio website showing off my programming prowess and capabilities.
                    This website was built in three weeks and is being hosted on Vercel. Visit the GitHub page to read more
                    about how the app does what is does and to discover the engineering behind it.
                </PrimaryText>
            </p>
            <p>
                <PrimaryText>
                    <em>Frameworks used:</em>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href="https://solidjs.com">SolidJS</A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href="https://tailwindcss.com">TailwindCSS</A>
                    <A xSetter={props.xSetter} ySetter={props.ySetter} hoverTextSetter={props.textSetter} href="https://vercel.com">Vercel</A>
                </PrimaryText>
            </p>

        </Card>
    )
}

function A(props: {href: string, children: any, xSetter: any, ySetter: any, hoverTextSetter: any}) {

    let hoverHref = 'https://' + props.href.split("/")[2]

    function mouseMoveAction(xPosSetter: any, yPosSetter: any, e: any) {
        props.hoverTextSetter(hoverHref)
        xPosSetter(`left: ${e.clientX - 150 - 100 - 100}px;`)
        yPosSetter(`top: ${e.clientY + 20}px;`)
    }

    return (
        <a onmousemove={(e) => mouseMoveAction(props.xSetter, props.ySetter, e)} onmouseleave={() => props.hoverTextSetter('null')} class={`inline-block primary-text cursor-pointer rounded-3xl border border-[color:var(--border-color)] px-2`} href={props.href}>
            <SecondaryText>{props.children}</SecondaryText>
        </a>
    )
}

function A2( props: {href: string, children: any, xSetter: any, ySetter: any, hoverTextSetter: any} ) {

    let hoverHref = props.href
    if (props.href != 'no project link available yet') hoverHref = 'https://' + props.href.split("/")[2]

    function mouseMoveAction(xPosSetter: any, yPosSetter: any, e: any) {
        props.hoverTextSetter(hoverHref)
        xPosSetter(`left: ${e.clientX - 150 - 100 - 100}px;`)
        yPosSetter(`top: ${e.clientY + 20}px;`)
    }

    return (
        <a onmousemove={(e) => mouseMoveAction(props.xSetter, props.ySetter, e)} onmouseleave={() => props.hoverTextSetter('null')} class={`rounded-none primary-text border-none font-medium text-lg p-0 m-0 flex hover:underline items-center flex-row pt-0 decoration-[color:var(--primary-color-post)]`} href={props.href}>
            <SecondaryText>{props.children}</SecondaryText>
            <Show when={props.href === 'no project link available yet'}>
                <DisableLink alt={"Link icon"} class={`h-5 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
            </Show>
            <Show when={props.href != 'no project link available yet'}>
                <LinkIcon alt={"Link icon"} class={`h-5 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
            </Show>
        </a>
    )
}