export default function Experience(props) {
    return (
        <div class='col-entire-section' classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}} onclick={props.onclickAction}>
            <div class="cursor-pointer">
                <div class='w-full flex cursor-pointer'>
                    {/* Header Section */}
                    <div class='col-header cursor-pointer'>
                        <div class="col-header-title">
                            Experience
                        </div>
                    </div>
                </div>
            </div>
            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                    <div class="col-text overflow-y-scroll pr-20">
                        <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold mr-40">About my experience</div>
                        <div class="pb-24">
                            And some text goes here describing <i>how</i> i got my experience.
                        </div>
                        <div class="grid grid-cols-2 ">
                            <div class="uppercase text-sm">Independent development</div>
                            <div>
                                <div class="lowercase text-lg text-left font-medium">
                                    Javascript & Typescript
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
                                        Can center element inside a div
                                    </li>
                                </ul>

                                <div class="lowercase text-lg text-left font-medium">
                                    Kotlin
                                </div>
                                <ul class="list-disc pl-4 pb-10 lowercase">
                                    <li>
                                        RESTful Server programming with Ktor
                                    </li>
                                    <li>
                                        Android app development with AndriodSDK
                                    </li>
                                    <li>
                                        Reactive UIs for Android using Kotlin LiveData
                                    </li>
                                    <li>
                                        Asynchronous programming with Kotlin Coroutines
                                    </li>
                                    <li>
                                        Cross-platform software development with Kotlin Multiplatform
                                    </li>
                                </ul>

                                <div class="lowercase text-lg text-left font-medium">
                                    Android
                                </div>
                                <ul class="list-disc pl-4 pb-10">
                                    <li>some text</li>
                                    <li>some more text</li>
                                </ul>

                                <div class="lowercase text-lg text-left font-medium">
                                    Swift
                                </div>
                                <ul class="list-disc pl-4 pb-10 lowercase pb-24">
                                    <li>Cross-platform application for iOS, iPadOS and macOS using SwiftUI</li>
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