import androidLogoBlock from "../../assets/img/android_logo_bw_block.png";
import swiftLogo from "../../assets/img/logo_swift.png";
import PsqlLogo from "../../assets/img/psql_logo_alt.svg";
import dgLogo from "../../assets/img/logo_datagrip.png"
import prismaLogo from "../../assets/img/prisma_logo.png";
import androidStudio from "../../assets/img/jetpack_logo.png"
import SolidJSLogo from "../../assets/img/logo/logo_solidjs.svg"
import expressJSLogo from "../../assets/img/logo/logo_expressjs.png"
import ktorLogo from "../../assets/img/logo/logo_ktor.png"
import TailwindLogo from "../../assets/img/logo/logo_tailwind.svg"
import {PrimaryText, SecondaryText} from "../reusable/Texts";
import {Card} from "../reusable/Card";
import {A} from '../reusable/Card'

const borderColor: {[index: number]: string} = {
    1: "border-contrast-1",
    2: "border-contrast-2 ",
    3: "border-contrast-3 ",
    4: "border-contrast-4 ",
    5: "border-contrast-5 ",
    6: "border-contrast-6 ",
    7: "border-contrast-7 ",
    8: "border-contrast-8 ",
    9: "border-contrast-9 ",
    10: "border-contrast-10 ",
}

function mouseMoveAction(xPosSetter: any, yPosSetter: any, e: any) {
    xPosSetter(`left: ${e.clientX - 150}px;`)
    yPosSetter(`top: ${e.clientY + 20}px;`)
}

export function Javascript(props: {palette?: number}){
    return(
        <div class={`border-[color:var(--border-color)] text-[color:var(--primary-color)] rounded-3xl border p-4`}>
            <div class=" text-lg text-left font-medium flex flex-row items-center space-x-2">
                <PrimaryText>SolidJS and SolidStart</PrimaryText>
                <SolidJSLogo class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc secondary-text">
                <li>building reactive web pages with responsive design that can update view based on state change</li>
                <li>handle server-side logic and front-end logic, managing database with Postgresql/MySQL and PrismaORM</li>
            </ul>

            <div class="pt-2 text-lg  text-left font-medium flex flex-row items-center space-x-2">
                <PrimaryText>TailwindCSS</PrimaryText>
                <TailwindLogo class="w-5 h-5"/>
            </div>
            <ul class="list-disc secondary-text">
                <li>experienced with Tailwind class names and the Tailwind documentation</li>
            </ul>

            <div class="pt-2 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <PrimaryText>ExpressJS</PrimaryText>
                <img src={expressJSLogo} class="h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pb-4 secondary-text">
                <li>handling RESTful HTTP requests from clients, authenticating users with Auth2 and JWT</li>
                <li>fetching data from a database and sending response to client with fetched data</li>
                <li>testing servers with Postman and cURL</li>
            </ul>

            <p class={`pb-0`}>
                <span class={`primary-text`}>
                    Framework experiences:
                </span>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://www.solidjs.com/guides/getting-started">SolidJS</a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://react.dev/">ReactJS</a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://expressjs.com/">ExpressJS</a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://tailwindcss.com/docs/installation">TailwindCSS</a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://sass-lang.com/">SASS</a>
            </p>
        </div>
    )
}


export function Database() {
    // @ts-ignore
    return (
        <div class={`border-[color:var(--border-color)] text-[color:var(--primary-color)] rounded-3xl border p-4 `}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <PrimaryText>Postgresql</PrimaryText>
                <PsqlLogo class="w-5 h-5" />
            </div>
            <ul class="list-disc pl-4 pb-4 secondary-text">
                <li>creating tables, roles, databases, etc from psql commandline interface</li>
                <li>inserting and querying database with ORMs (such as Prisma and Ktorm)</li>
                <li>Inspecting databases with <span class="inline-flex items-center">DataGrip <DatagripLogo /></span></li>
                <li>SQLite databasing on Android with <span class="inline-flex items-center">RoomDB <AndroidStudioLogo /> </span></li>
            </ul>

            <p class={`pb-0`}>
                <span class={`primary-text`}>
                    Databases used:
                </span>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://www.solidjs.com/guides/getting-started">PostgresQL</a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://prisma.io/">PrismaORM</a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] secondary-text px-2`} href="https://expressjs.com/">Ktorm</a>
            </p>
        </div>
    )
}

export function Kotlin( props: {xPosSetter: any, yPosSetter: any, linkSetter: any}) {
    return (
        <div class={`border-[color:var(--border-color)] text-[color:var(--primary-color)] rounded-3xl border p-4 `}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <PrimaryText>android</PrimaryText>
                <img src={androidLogoBlock} class="w-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <SecondaryText>
                    <li>responsive UI design with RelativeLayout and ConstraintLayout and animations with MotionLayout</li>
                    <li>Model-View-ViewModel reactivity architecture with Android LiveData</li>
                </SecondaryText>
            </ul>

            <div class="pt-2 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <PrimaryText>Ktor</PrimaryText>
                <img src={ktorLogo} class="w-5" alt={"Ktor logo"}/>
            </div>
            <ul class="list-disc pl-4 pb-4">
                <SecondaryText>
                    <li>asynchronous server-side request handling with Kotlin coroutines</li>
                </SecondaryText>
            </ul>

            <p class={`pb-0`}>
                <span class={`primary-text`}>
                    Framework experiences:
                </span>
                <A href={`https://developer.android.com`} ySetter={props.yPosSetter} hoverTextSetter={props.linkSetter} xSetter={props.xPosSetter}>AndroidSDK</A>
                <A href={`https://kotlinlang.org/docs/coroutines-overview.html`} ySetter={props.yPosSetter} hoverTextSetter={props.linkSetter} xSetter={props.xPosSetter}>Kotlin Coroutines</A>
                <A href="https://developer.android.com/topic/libraries/architecture/livedata" ySetter={props.yPosSetter} hoverTextSetter={props.linkSetter} xSetter={props.xPosSetter}>Android LiveData</A>
                <A href="https://ktor.io/docs/welcome.html" ySetter={props.yPosSetter} hoverTextSetter={props.linkSetter} xSetter={props.xPosSetter}>Ktor</A>
                <A href="https://www.ktorm.org/" ySetter={props.yPosSetter} hoverTextSetter={props.linkSetter} xSetter={props.xPosSetter}>Ktorm</A>
            </p>
        </div>
    )
}

export function Android(props: {palette: any}) {
    return(
        <Card>
            <h1>
                Android
                <img src={androidLogoBlock} class="ml-2 w-5 h-5" alt={"Javascript logo in black and white"}/>
            </h1>
            <ul>
                <li>Building reactive UIs using Kotlin LiveData</li>
                <li>Database management with Room and SQLite</li>
                <li>Responsive UIs with constraint layout, relative layout, linear layout, etc</li>
                <li>Handling client-side RESTful requests with Ktor</li>
            </ul>
        </Card>
    )
}

// export function Swift() {
//     return (
//         <div class={`border-[color:var(--border-color)] text-[color:var(--primary-color)] rounded-3xl border p-4 `}>
//             <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
//                 <span><PrimaryText>Swift</PrimaryText></span>
//                 <img src={swiftLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
//             </div>
//             <ul class="list-disc lowercase">
//                 <PrimaryText>
//                     <li>Declarative UI building with SwiftUI</li>
//                     <li>Cross-platform application for iOS, iPadOS and macOS from a single codebase</li>
//                     <li>Reactive state management using StateObjects and ObservableObject</li>
//                     <li>Concurrent network calls, data fetches, etc using Task and async/await.</li>
//                     <li>Client-side RESTful programming with Swift concurrency and URLSession</li>
//                     <li>Data visualisation with Swift Charts</li>
//                 </PrimaryText>
//             </ul>
//
//             <p class={`pb-0`}>
//                 <span class={`primary-text`}>
//                     Framework experiences:
//                 </span>
//                 <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://developer.apple.com/xcode/swiftui/"><SecondaryText>SwiftUI</SecondaryText></a>
//                 <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://github.com/siteline/SwiftUI-Introspect"><SecondaryText>Swift Introspect</SecondaryText></a>
//                 <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://developer.apple.com/documentation/swift/concurrency"><SecondaryText>Swift Concurrency</SecondaryText></a>
//                 <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://developer.apple.com/documentation/charts"><SecondaryText>Swift Charts</SecondaryText></a>
//             </p>
//         </div>
//     )
// }

export function Swift() {
    return (
        <Card>
            <h1>
                <PrimaryText>Swift</PrimaryText>
                <img src={swiftLogo} class="ml-2 w-5 h-5" alt={"Javascript logo in black and white"}/>
            </h1>

            <SecondaryText>
                <ul>
                    <li>Declarative UI building with SwiftUI</li>
                    <li>Cross-platform application for iOS, iPadOS and macOS from a single codebase</li>
                    <li>Client-side RESTful programming</li>
                    <li>Reactive state management using StateObjects and ObservableObject</li>
                    <li>Calling backend API concurrently using URLSessions and async/await.</li>
                </ul>
            </SecondaryText>

            <p class={`pb-0 text-justify`}>
                <span class={`primary-text inline-block`}>
                    Framework experiences:
                </span>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://developer.apple.com/xcode/swiftui/"><SecondaryText>SwiftUI</SecondaryText></a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://github.com/siteline/SwiftUI-Introspect"><SecondaryText>Swift Introspect</SecondaryText></a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://developer.apple.com/documentation/swift/concurrency"><SecondaryText>Swift Concurrency</SecondaryText></a>
                <a class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href="https://developer.apple.com/documentation/charts"><SecondaryText>Swift Charts</SecondaryText></a>
            </p>
        </Card>
    )
}

export function MathTA(props: {palette: any}) {
    return (
        <div class={`border-[color:var(--border-color)] rounded-3xl border p-4 `}>
            <div class="lowercase text-lg text-left primary-text font-medium">
                Faculty of Mathematics
            </div>
            <div class="lowercase primary-text">
                Oxford International School
            </div>
            <div class="pt-2 lowercase secondary-text">
                I generated and formulated practice test papers along with their corresponding answer key for younger grade levels. Additionally, I evaluated assignments and provided assistance to students in grasping concepts through online sessions after regular class hours.
            </div>
        </div>
    )
}

export function LabAssistant(props: {palette: any}) {
    return (
        <div class={`border-[color:var(--border-color)] rounded-3xl border p-4 `}>
            <div class="lowercase text-lg text-left font-medium primary-text">
                Faculty of Chemistry
            </div>
            <div class="lowercase primary-text">
                Oxford International School
            </div>
            <div class="pt-2 lowercase secondary-text">
                I readied laboratory equipment and reagents in advance for practical examinations for junior classes,
                aided the teacher in tidying up the apparatuses post-experiment. I also readied reagents
                and provided guidance on procedures to those students who required assistance.
            </div>
        </div>
    )
}

function PrismaLogo() {
    return (
        <img class="w-5 h-5 ml-1" src={prismaLogo} alt="Postgres logo"/>
    )
}

function DatagripLogo() {
    return (
        <img class="w-5 h-5 ml-1" src={dgLogo} alt="DataGrip logo" />
    )
}


function AndroidStudioLogo() {
    return (
        <img class="w-5 h-5 ml-1" src={androidStudio} alt="Postgres logo"/>
    )
}