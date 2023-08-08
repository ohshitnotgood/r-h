import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import tailwindLogo from "../../assets/img/tailwind-logo.jpg"
import solidLogo from "../../assets/img/solidjs_logo.jpg"
import typescriptLogo from "../../assets/img/typescript_logo_bw.png"
import linkIcon from "../../assets/icons/ic_link.svg"
import {createSignal, Show} from "solid-js";
import rightArrow from "../../assets/icons/ic_right.svg";
import languageIcon from "../../assets/icons/ic_lang.svg"
import downIcon from "../../assets/icons/ic_down_circled.svg"
import Header from "../reusable/Header";


export default function Outro(props: any) {
    const [userReachedBottom, setUserReachBottom] = createSignal(false)
    let mainContent: HTMLDivElement

    let counter = 0

    function onScrollDown() {
        console.log(mainContent.scrollTop)
        if (mainContent.scrollTop >= 900) setUserReachBottom(true)
        else setUserReachBottom(false)
    }

    return (
        <div class='col-entire-section'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/*Header*/}
            <Header sectionNumber="05." lang={props.lang} hidden={props.hidden} enText={"Others"} bnText={"অন্যান্য"}/>

            {/*Scroll Indicator*/}
            <div class="absolute right-8 bottom-5"
                 classList={{"scroll-indicator-hide": userReachedBottom(), "scroll-indicator-show": !userReachedBottom()}}>
                <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>
                    <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>
                </div>
            </div>

            {/*Main Content*/}
            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='grid place-content-center h-screen z-50' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                    <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                        <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold text-right">Contact Me!</div>
                        <div class="pb-24 text-justify">

                        </div>
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


                        <div class="mt-12 pt-24 pb-5 uppercase text-7xl font-bold text-right">Credits and Acknowledgements</div>
                        <div class="pb-24 text-justify">

                        </div>
                        <div class="grid grid-cols-2 ">
                            <div class="uppercase text-sm">Frameworks</div>
                            <div>
                                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>Typescript</span>
                                    <img src={typescriptLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>SolidJS</span>
                                    <img src={solidLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                                <div class="pb-24 lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                    <span>TailwindCSS</span>
                                    <img src={tailwindLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                </div>
                            </div>

                            <div class="uppercase text-sm">Design</div>
                            <div class="pb-24">
                                <div>
                                    <div class="lowercase text-lg text-left font-medium">
                                        Design inspiration taken from <a class="text-gray-600 underline" href="https://www.gilhuybrecht.com">https://www.gilhuybrecht.com</a>
                                    </div>
                                </div>
                            </div>

                            <div class="uppercase text-sm">Font</div>
                            <div class="pb-24">
                                <div>
                                    <div class="lowercase text-lg text-left font-medium">
                                        <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-1">
                                            <a href="https://fonts.google.com/specimen/Inter">Inter</a>
                                            <img src={linkIcon} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                        </div>
                                    </div>
                                    <div class="lowercase text-gray-600">
                                        This project makes extensive use of the Inter font made by Rasmus Andersson.
                                    </div>
                                </div>
                            </div>

                            <div class="uppercase text-sm">Icons</div>
                            <div class="pb-24">
                                <div>
                                    <div class="lowercase text-lg text-left font-medium">
                                        <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-1">
                                            <div>Icons</div>
                                            <img src={rightArrow} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                            <img src={languageIcon} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                            <img src={downIcon} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                            <img src={linkIcon} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                                            <div>from </div>
                                            <a rel="noreferrer noopener" target="_blank" href="https://fonts.google.com" class="underline">Google Fonts.</a>

                                        </div>
                                    </div>
                                    <div class="lowercase text-gray-600">
                                        This project makes extensive use of the Material icons from Google Fonts.
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