import jsLogo from "../../assets/img/js_logo_bw.png";
import dbLogo from "../../assets/img/logo_db.jpeg";
import ktLogo from "../../assets/img/kt_logo_bw.png";
import androidLogoBlock from "../../assets/img/android_logo_bw_block.png";
import swiftLogo from "../../assets/img/logo_swift.png";
import psqlLogo from "../../assets/img/psql_logo_alt.svg";
import dgLogo from "../../assets/img/logo_datagrip.png"
import prismaLogo from "../../assets/img/prisma_logo.png";
import androidStudio from "../../assets/img/jetpack_logo.png"
import {Text} from "../reusable/Texts";

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

export function Javascript(props: {palette: number}){
    return(
        <div class={`${borderColor[props.palette]} rounded-3xl border p-4 mb-8`}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Javascript & Typescript</span>
                <img src={jsLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <li>Experienced with reactive building front-end web applications with ReactJS and, recently with SolidJS</li>
                <li>Proficient in writing responsive HTML and CSS and using CSS frameworks like SASS and TailwindCSS</li>
                <li>Building full-stack web applications with SvelteKit and SolidJS</li>
                <li>Handling server-side RESTful API with ExpressJS.</li>
                <li>Database management with PostgresQL, MySQL and Prisma</li>
                <li>Can center element inside a div</li>
            </ul>
        </div>
    )
}


export function Database(props: {palette: number}) {
    return (
        <div class={`${borderColor[props.palette]} rounded-3xl border p-4 mb-8`}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Database management</span>
                <img src={dbLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <li>
                    Database management with <span class="inline-flex items-center">PostgresQL <PostgresLogo /></span><span class="inline-flex items-center"> and Prisma <PrismaLogo /></span>
                </li>
                <li>Inspecting databases with <span class="inline-flex items-center">DataGrip <DatagripLogo /></span></li>
                <li>SQLite databasing on Android with <span class="inline-flex items-center">RoomDB <AndroidStudioLogo /> </span></li>
            </ul>
        </div>
    )
}

export function Kotlin(props: {palette: number}) {
    return (
        <div class={`${borderColor[props.palette]} rounded-3xl border p-4 mb-8`}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Kotlin</span>
                <img src={ktLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <li>RESTful Server programming with Ktor</li>
                <li>Android app development with AndriodSDK</li>
                <li>Asynchronous programming with Kotlin Coroutines</li>
                <li>Cross-platform software development with Kotlin Multiplatform</li>
            </ul>
        </div>
    )
}

export function Android(props: {palette: any}) {
    return(
        <div class={`${borderColor[props.palette]} rounded-3xl border p-4 mb-8`}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Android</span>
                <img src={androidLogoBlock} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <li>Building reactive UIs using Kotlin LiveData</li>
                <li>Database management with Room and SQLite</li>
                <li>Responsive UIs with constraint layout, relative layout, linear layout, etc</li>
                <li>Handling client-side RESTful requests with Ktor</li>
            </ul>
        </div>
    )
}

export function Swift(props: {palette: any}) {
    return (
        <div class={`${borderColor[props.palette]} rounded-3xl border p-4 mb-8`}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Swift</span>
                <img src={swiftLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <li>Declarative UI building with SwiftUI</li>
                <li>Cross-platform application for iOS, iPadOS and macOS from a single codebase</li>
                <li>Client-side RESTful programming</li>
                <li>Reactive state management using StateObjects and ObservableObject</li>
                <li>Calling backend API concurrently using URLSessions and async/await.</li>
            </ul>
        </div>
    )
}

export function MathTA(props: {palette: any}) {
    return (
        <div class={`${borderColor[props.palette]} rounded-3xl border p-4 mb-8`}>
            <div class="lowercase text-lg text-left font-medium">
                Faculty of Mathematics
            </div>
            <div class="lowercase">
                Oxford International School
            </div>
            <div class="pt-2 lowercase">
                I generated and formulated practice test papers along with their corresponding answer key for younger grade levels. Additionally, I evaluated assignments and provided assistance to students in grasping concepts through online sessions after regular class hours.
            </div>
        </div>
    )
}

export function LabAssistant(props: {palette: any}) {
    return (
        <div class={`${borderColor[props.palette]} rounded-3xl border p-4 mb-8`}>
            <div class="lowercase text-lg text-left font-medium">
                Faculty of Chemistry
            </div>
            <div class="lowercase">
                Oxford International School
            </div>
            <div class="pt-2 lowercase">
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

function PostgresLogo() {
    return (
        <img class="w-5 h-5 mx-1" src={psqlLogo} alt="Postgres logo"/>
    )
}

function AndroidStudioLogo() {
    return (
        <img class="w-5 h-5 ml-1" src={androidStudio} alt="Postgres logo"/>
    )
}