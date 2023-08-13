import jsLogo from "../../assets/img/js_logo_bw.png";
import dbLogo from "../../assets/img/logo_db.jpeg";
import ktLogo from "../../assets/img/kt_logo_bw.png";
import androidLogoBlock from "../../assets/img/android_logo_bw_block.png";
import swiftLogo from "../../assets/img/logo_swift.png";
import psqlLogo from "../../assets/img/psql_logo_alt.svg";
import dgLogo from "../../assets/img/logo_datagrip.png"
import prismaLogo from "../../assets/img/prisma_logo.png";
import androidStudio from "../../assets/img/jetpack_logo.png"
import solidJSLogo from "../../assets/img/logo/logo_solidjs.svg"
import expressJSLogo from "../../assets/img/logo/logo_expressjs.png"
import svelteLogo from "../../assets/img/logo/logo_svelte.png"
import ktorLogo from "../../assets/img/logo/logo_ktor.png"
import tailwindLogo from "../../assets/img/logo/logo_tailwind.svg"
import {PrimaryText} from "../reusable/Texts";

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
        <div class={`${borderColor[props.palette]} text-primary-${props.palette} rounded-3xl border p-4`}>
            <div class=" text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>SolidJS and SolidStart</span>
                <img src={solidJSLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4">
                <li>building reactive web pages with responsive design that can update view based on state change</li>
                <li>handle server-side logic and front-end logic, managing database with Postgresql/MySQL and PrismaORM</li>
            </ul>

            <div class="pt-2 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>TailwindCSS</span>
                <img src={tailwindLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 ">
                <li>experienced with Tailwind class names and the Tailwind documentation</li>
            </ul>

            <div class="pt-2 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>ExpressJS</span>
                <img src={expressJSLogo} class="h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 ">
                <li>handling RESTful HTTP requests from clients, authenticating users with Auth2 and JWT</li>
                <li>fetching data from a database and sending response to client with fetched data</li>
                <li>testing servers with Postman and cURL</li>
            </ul>

            {/*<div class="pt-2 text-lg text-left font-medium flex flex-row items-center space-x-2">*/}
            {/*    <span>Svelte and SvelteKit</span>*/}
            {/*    <img src={svelteLogo} class="w-5" alt={"Javascript logo in black and white"}/>*/}
            {/*</div>*/}
            {/*<ul class="list-disc pl-4">*/}
            {/*    <li>Experienced with reactive building front-end web applications with ReactJS and, recently with SolidJS</li>*/}
            {/*    <li>Proficient in writing responsive HTML and CSS and using CSS frameworks like SASS and TailwindCSS</li>*/}
            {/*</ul>*/}

            <div class="pt-4 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <div class="text-sm">
                    Others:
                </div>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>ReactJS</span>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>SvelteKit</span>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>SASS</span>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>Pug</span>
                {/*<img src={""} class="w-5" alt={"Javascript logo in black and white"}/>*/}
            </div>
        </div>
    )
}


export function Database(props: {palette: number}) {
    return (
        <div class={`${borderColor[props.palette]} text-primary-${props.palette} rounded-3xl border p-4 `}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Postgresql</span>
                <img src={psqlLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 ">
                <li>creating tables, roles, databases, etc from psql commandline interface</li>
                <li>inserting and querying database with ORMs (such as Prisma and Ktorm)</li>
                <li>Inspecting databases with <span class="inline-flex items-center">DataGrip <DatagripLogo /></span></li>
                <li>SQLite databasing on Android with <span class="inline-flex items-center">RoomDB <AndroidStudioLogo /> </span></li>
            </ul>
        </div>
    )
}

export function Kotlin(props: {palette: number}) {
    return (
        <div class={`${borderColor[props.palette]} text-primary-${props.palette} rounded-3xl border p-4 `}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>android</span>
                <img src={androidLogoBlock} class="w-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <li>responsive UI design with RelativeLayout and ConstraintLayout and animations with MotionLayout</li>
                <li>reactive state management with LiveData</li>
                <li>currently working on a mobile app with native front-end for Android with Jetpack Compose</li>
            </ul>

            <div class="pt-2 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Ktor</span>
                <img src={ktorLogo} class="w-5" alt={"Ktor logo"}/>
            </div>
            <ul class="list-disc pl-4">
                <li>server-side request handling with Kotlin coroutines</li>
            </ul>

            <div class="pt-4 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <div class="text-sm">

                </div>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>Ktorm</span>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>Jetpack Compose</span>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>SASS</span>
                <span class={`rounded-3xl border ${borderColor[props.palette]} px-2 py-1 text-sm`}>Pug</span>
                {/*<img src={""} class="w-5" alt={"Javascript logo in black and white"}/>*/}
            </div>
        </div>
    )
}

export function Android(props: {palette: any}) {
    return(
        <div class={`${borderColor[props.palette]} text-primary-${props.palette} rounded-3xl border p-4 `}>
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
        <div class={`${borderColor[props.palette]} text-primary-${props.palette} rounded-3xl border p-4 `}>
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
        <div class={`${borderColor[props.palette]} text-primary-${props.palette} rounded-3xl border p-4 `}>
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
        <div class={`${borderColor[props.palette]} text-primary-${props.palette} rounded-3xl border p-4 `}>
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