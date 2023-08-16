import {PrimaryText, SecondaryText} from "../reusable/Texts";
import {Card} from "../volunteering/Components";
import linkIcon from "../../assets/icons/ic_link.svg";
import disableLink from "../../assets/icons/ic_link_off.svg";

export function EmailAndPhone(props: any) {
    return (
        <div class="grid grid-cols-2 ">
            <div class="uppercase text-sm">Emails</div>
            <div class="pb-12">
                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                    <span>praanto@icloud.com (personal)</span>
                </div>
                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                    <a href="mailto:samadder@kth.se">samadder@kth.se (school)</a>
                </div>
            </div>

            <div class="uppercase text-sm">phone</div>
            <div class="pb-12">
                <div>
                    <div class="lowercase text-lg text-left font-medium">
                        +46 70776 2321
                    </div>
                    <div class="pb-6">
                        phone - sweden 🇸🇪
                    </div>
                    <div class="lowercase text-lg text-left font-medium">
                        +880 1766 239267
                    </div>
                    <div>
                        phone - bangladesh 🇧🇩
                    </div>
                </div>
            </div>
            <div class="uppercase text-sm">paper CV</div>
            <div class="pb-12">
                <div>
                    <div class="lowercase text-lg text-left font-medium">
                        Download
                    </div>
                </div>
            </div>
        </div>
    )
}

export function TennisForTwoCard() {
    return (
        <Card>
            <h1>
                <button class={`flex hover:underline items-center flex-row`} onclick={() => window.location.href="https://github.com/ohshitnotgood/ois-hw-tracker"}>
                    <PrimaryText>Tennis For Two</PrimaryText>
                    <img src={linkIcon} alt={"Link icon"} class={`h-5 pl-2`}/>
                </button>

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
                    <a href={'https://github.com/is1200-example-projects/mcb32tools/releases/'}>
                        C++/mips32.h
                    </a>
                    <a href={`https://github.com/me-no-dev/ESPAsyncWebServer`}>
                        ESPAsyncWebServer
                    </a>
                    <a href={`https://github.com/me-no-dev/AsyncTCP`}>
                        AsyncTCP
                    </a>
                    <a href={'https://developer.apple.com/documentation/swiftui/'}>
                        SwiftUI
                    </a>
                    <a href={'https://developer.apple.com/documentation/swiftui/'}>
                        CoreMotion
                    </a>
                    <a href={'https://developer.android.com/docs'}>
                        AndroidSDK
                    </a>
                    <a href={'https://ktor.io/docs/welcome.html'}>
                        Ktor
                    </a>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function SwiftEssentialsCard() {
    return(
        <Card>
            <h1 class={`hover:underline`}>
                <button class={`flex items-center flex-row`} onclick={() => window.location.href="https://github.com/ohshitnotgood/essentials"}>
                    Swift Essentials
                    <img src={linkIcon} alt={"Link icon"} class={`h-5 pl-2`}/>
                </button>
            </h1>
            <p>
                <SecondaryText>
                    A Python script uses the command line to convert binary inputs into
                    their hexadecimal equivalents swiftly and efficiently.
                    While studying in a course involving processor architecture, this Python script
                    was conceived to verify on-paper conversions between hexadecimal and binary codes.
                </SecondaryText>
            </p>
        </Card>
    )
}

export function EyeTrackerCard() {
    return (
        <Card>
            <h1 class={`hover:underline`}>
                <button class={`flex hover:underline items-center flex-row`}
                        onclick={() => window.location.href="https://github.com/ohshitnotgood/eye-allergy.git"}>
                    <PrimaryText>Allergy Tracker</PrimaryText>
                    <img src={linkIcon} alt={"Link icon"} class={`h-5 pl-2`}/>
                </button>
            </h1>
            <p>
                <SecondaryText>
                    A simple macOS app, built using SwiftUI, Swift Graphs and FileManager to track events of itches during a period I contracted eye allergies.
                    This app would log data of eye itches over a period of time to aid in recording the effectiveness of the medicines received from the doctor.
                    The graph displayed was a simple SwiftUI graph
                </SecondaryText>
            </p>

            <PrimaryText>
                <p>
                    <em>Frameworks used</em>
                    <a>SwiftUI</a>
                    <a>Swift Graphs</a>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function MomentumScrollCard() {
    return (
        <Card>
            <h1>
                <button class={`flex hover:underline items-center flex-row`} onclick={() => window.location.href="/"}>
                    <PrimaryText>solid-momentum-scroll</PrimaryText>
                    <img src={disableLink} alt={"Unavailable link icon"} class={`h-5 pl-2`}/>
                </button>
            </h1>

            <p>
                A SolidJS plugin that integrates momentum scrolling and parallax effects into webpage
                scrolling behavior. During website development, innovative approaches were employed
                for momentum scrolling, with ongoing testing prior to its SolidJS Ecosystem release.
            </p>
        </Card>
    )
}

export function SchedulerCard() {
    return (
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
                    <a href={`https://www.solidjs.com/`}>SolidJS</a>
                    <a href={`https://start.solidjs.com/getting-started/what-is-solidstart`}>SolidStart</a>
                    <a href={`https://www.typescriptlang.org/`}>TypeScript</a>
                    <a href={`https://tailwindcss.com/docs/installation`}>TailwindCSS</a>
                    <a href={`https://www.prisma.io/docs`}>Prisma</a>
                    <a href={`https://www.postgresql.org/`}>Postgresql</a>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function HomeworkCard() {
    return (
        <Card>
            <h1>
                <button class={`flex hover:underline items-center flex-row`} onclick={() => window.location.href="https://github.com/ohshitnotgood/ois-hw-tracker"}>
                    <PrimaryText>Homework Tracker</PrimaryText>
                    <img src={linkIcon} alt={"Link icon"} class={`h-5 pl-2`}/>
                </button>
            </h1>
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

            <PrimaryText>
                <p>
                    <em>Frameworks used</em>
                    <a>Android Studio</a>
                    <a href={'https://developer.android.com/docs'}>
                        AndroidSDK
                    </a>
                    <a>Kotlin</a>
                    <a>LiveData</a>
                    <a>MotionLayout</a>
                </p>
            </PrimaryText>
        </Card>
    )
}

export function HexcomCard() {
    return (
        <Card>
            <h1 class={`hover:underline`}>
                <button class={`flex items-center flex-row`} onclick={() => window.location.href="https://github.com/ohshitnotgood/essentials"}>
                    hexcom
                    <img src={linkIcon} alt={"Link icon"} class={`h-5 pl-2`}/>
                </button>
            </h1>
            <p>
                <SecondaryText>
                    A Python script uses the command line to convert binary inputs into
                    their hexadecimal equivalents swiftly and efficiently.
                    While studying in a course involving processor architecture, this Python script
                    was conceived to verify on-paper conversions between hexadecimal and binary codes.
                </SecondaryText>
            </p>

            <p>
                <PrimaryText>
                    <em>Frameworks used</em>
                    <a>Python3</a>
                    <a>rich</a>
                    <a>Python ArgParser</a>
                    <a>Bash Script</a>
                </PrimaryText>
            </p>
        </Card>
    )
}


export function ThisWCard() {
    return (
        <Card>
            <h1>
                <button class={`flex hover:underline items-center flex-row`} onclick={() => window.location.href="https://github.com/ohshitnotgood/r-h"}>
                    <code>
                        <PrimaryText>this.website </PrimaryText>
                    </code>
                    <img src={linkIcon} alt={"Link icon"} class={`h-5 pl-2`}/>
                </button>
            </h1>

            <p>
                praanto.com is a personal portfolio website showing off my programming prowess and capabilities.
                This website was built in three weeks and is being hosted on Vercel. Visit the GitHub page to read more
                about how the app does what is does and to discover the engineering behind it.
            </p>
            <p>
                <em>Frameworks used:</em>
                <a href="https://solidjs.com">SolidJS</a>
                <a href="https://tailwindcss.com">TailwindCSS</a>
                <a href="https://vercel.com">Vercel</a>
            </p>

        </Card>
    )
}