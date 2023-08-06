import icDownCircled from '../assets/icons/ic_down_circled.svg'
import jsLogo from '../assets/img/js_logo_bw.png'
import ktLogo from '../assets/img/kt_logo_bw.png'
import androidLogoRound from "../assets/img/android_logo_bw_circle.png"
import dbLogo from '../assets/img/database_logo_bw.png'
import androidLogoBlock from '../assets/img/android_logo_bw_block.png'
import swiftLogo from '../assets/img/swift_logo_bw.png'
import {createSignal, Show} from "solid-js";

export default function Experience(props) {
    const [userReachedBottom, setUserReachBottom] = createSignal(false)
    let mainContent: HTMLDivElement

    let counter = 0

    function onScrollDown() {
        console.log(mainContent.scrollTop)
        if (mainContent.scrollTop >= 1330) setUserReachBottom(true)
        else setUserReachBottom(false)
    }

    return (
        <div class='col-entire-section'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/*Header*/}
            <div class='w-full flex cursor-pointer'>
                {/* Header Section */}
                <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer bg-white'>
                    <div class="grid grid-arrangement h-screen place-content-center">
                        <div class="h-fit text-center pt-10">
                            02.
                        </div>
                        <div class="h-fit text-center"></div>
                        <div class="col-header-title" classList={{"col-header-visible": props.hidden, "col-header-hidden": !props.hidden}}>
                            <Show when={props.lang == "en"}>Experience</Show>
                            <Show when={props.lang == "bn"}>কর্মদক্ষতা</Show>
                        </div>
                        <div class="h-fit"></div>
                        <div class="h-full grid place-content-center">
                        </div>
                    </div>
                </div>
            </div>

            {/*Scroll Indicator*/}
            <div class="absolute right-8 bottom-5"
                 classList={{"scroll-indicator-hide": userReachedBottom(), "scroll-indicator-show": !userReachedBottom()}}>
                <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>
                    <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>
                </div>
            </div>

            {/*Main Content*/}
            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                    <div ref={mainContent} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                        <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold mr-40">Independent and Professional Experience</div>
                        <div class="pb-24">
                            Since commencing my programming journey in high school, I have accumulated extensive experience with diverse programming languages and frameworks highly sought after in the industry. Through numerous personal projects, I familiarized myself with industry standards and best practices, utilizing these ventures as platforms for continuous learning, drawing inspiration, and enhancing my creativity and skill set.
                        </div>
                        <div class="grid grid-cols-2 ">
                            <div class="uppercase text-sm">Independent development</div>
                            <div>
                                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>Javascript & Typescript</span>
                                    <img src={jsLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                                <ul class="list-disc pl-4 pb-10 lowercase">
                                    <li>
                                        Experienced with reactive building front-end web applications with ReactJS and, recently with SolidJS
                                    </li>
                                    <li>
                                        Proficient in writing responsive HTML and CSS and using CSS frameworks like SASS and TailwindCSS
                                    </li>
                                    <li>
                                        Building full-stack web applications with SvelteKit and SolidJS
                                    </li>
                                    <li>
                                        Handling server-side RESTful API with ExpressJS.
                                    </li>
                                    <li>
                                        Database management with PostgresQL, MySQL and Prisma
                                    </li>
                                    <li>
                                        Can center element inside a div
                                    </li>
                                </ul>

                                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>Database management</span>
                                    <img src={dbLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                                <ul class="list-disc pl-4 pb-10 lowercase">
                                    <li>
                                        Experienced with reactive building front-end web applications with ReactJS and, recently with SolidJS
                                    </li>
                                    <li>
                                        Proficient in writing responsive HTML and CSS and using CSS frameworks like SASS and TailwindCSS
                                    </li>
                                    <li>
                                        Building full-stack web applications with SvelteKit and SolidJS
                                    </li>
                                    <li>
                                        Handling server-side RESTful API with ExpressJS.
                                    </li>
                                    <li>
                                        Database management with PostgresQL, MySQL and Prisma
                                    </li>
                                    <li>
                                        Can center element inside a div
                                    </li>
                                </ul>


                                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>Kotlin</span>
                                    <img src={ktLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                                <ul class="list-disc pl-4 pb-10 lowercase">
                                    <li>
                                        RESTful Server programming with Ktor
                                    </li>
                                    <li>
                                        Android app development with AndriodSDK
                                    </li>
                                    <li>
                                        Asynchronous programming with Kotlin Coroutines
                                    </li>
                                    <li>
                                        Cross-platform software development with Kotlin Multiplatform
                                    </li>
                                </ul>

                                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>Android</span>
                                    <img src={androidLogoBlock} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                                <ul class="list-disc pl-4 pb-10 lowercase">
                                    <li>
                                        Building reactive UIs using Kotlin LiveData
                                    </li>
                                    <li>
                                        Database management with Room and SQLite
                                    </li>
                                    <li>
                                        Responsive UIs with constraint layout, relative layout, linear layout, etc
                                    </li>
                                    <li>
                                        Handling client-side RESTful requests with Ktor
                                    </li>
                                </ul>

                                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>Swift</span>
                                    <img src={swiftLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                                <ul class="list-disc pl-4 lowercase pb-24">
                                    <li>Declarative UI building with SwiftUI</li>
                                    <li>Cross-platform application for iOS, iPadOS and macOS from a single codebase</li>
                                    <li>Client-side RESTful programming</li>
                                    <li>Reactive state management using StateObjects and ObservableObject</li>
                                    <li>Calling backend API concurrently using URLSessions and async/await.</li>
                                </ul>
                            </div>

                            <div class="uppercase text-sm">Teaching assistant in high school</div>
                            <div class="pb-24">
                                <div>
                                    <div class="lowercase text-lg text-left font-medium">
                                        Faculty of Mathematics
                                    </div>
                                    <div class="lowercase">
                                        Oxford International School
                                    </div>
                                    <div class="pt-2 text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores excepturi perspiciatis ea delectus corrupti cum quae harum? Amet, necessitatibus itaque?
                                    </div>
                                </div>
                            </div>

                            <div class="uppercase text-sm">Laboratory assistant in high school</div>
                            <div class="pb-24">
                                <div>
                                    <div class="lowercase text-lg text-left font-medium">
                                        Faculty of Chemistry
                                    </div>
                                    <div class="lowercase">
                                        Oxford International School
                                    </div>
                                    <div class="pt-2 text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores excepturi perspiciatis ea delectus corrupti cum quae harum? Amet, necessitatibus itaque?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}