import {createSignal, Show} from "solid-js";
import Section from "../reusable/Section";
import DownloadIcon from '../../assets/icons/ic_download.svg'


export default function Outro(props: any) {
    const [userReachedBottom, setUserReachBottom] = createSignal(false)
    let mainContent: HTMLDivElement

    let counter = 0

    function onScrollDown() {
        console.log(mainContent.scrollTop)
        if (mainContent.scrollTop >= 900) setUserReachBottom(true)
        else setUserReachBottom(false)
    }
    {/*Scroll Indicator*/}
    {/*<div class="absolute right-8 bottom-5"*/}
    {/*     classList={{"scroll-indicator-hide": userReachedBottom(), "scroll-indicator-show": !userReachedBottom()}}>*/}
    {/*    <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>*/}
    {/*        <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>*/}
    {/*    </div>*/}
    {/*</div>*/}


    return (

        <Section header_en={`Contact`} headerDelay={props.initialDelay} hidden={props.hidden} sectionNumber_en={"05."} sectionNumber_bn={"05."} palette={props.palette} lang={props.lang} clickAction={props.onclickAction}>
            <div class='grid place-content-center h-screen z-50' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                <div ref={mainContent!} onscroll={onScrollDown} class="col-text overflow-y-scroll pr-20">
                    <div class="my-12 pt-24 pb-5 uppercase text-7xl font-bold text-right primary-text">Contact Me!</div>
                    <div class="pb-24 text-justify">

                    </div>
                    <div class="grid grid-cols-2 ">
                        <div class="uppercase text-sm secondary-text">Emails</div>
                        <div class="pb-12">
                            <div class="lowercase text-xl text-left font-medium flex flex-row items-center space-x-2">
                                <a class={`text-xl border-none p-0 m-0 hover:underline primary-text`} href="mailto:praanto@icloud.com">praanto@icloud.com (personal)</a>
                            </div>
                            <div class="lowercase text-xl text-left font-medium flex flex-row items-center space-x-2">
                                <a class={`text-xl border-none p-0 m-0 hover:underline primary-text`} href="mailto:samadder@kth.se">samadder@kth.se (school)</a>
                            </div>
                        </div>

                        <div class="uppercase text-sm secondary-text">phone</div>
                        <div class="pb-12">
                            <div>
                                <a class={`text-xl border-none font-medium p-0 m-0 hover:underline primary-text`} href="tel:+46707762321">+46 70776 2321</a>
                                <div class="pb-6 secondary-text">
                                    phone - sweden 🇸🇪
                                </div>
                            </div>
                        </div>
                        <div class="uppercase text-sm secondary-text">paper CV</div>
                        <div class="pb-12 ">
                            <div class={``}>
                                <a class={`flex flex-row text-xl font-medium border-none p-0 m-0 hover:underline primary-text`} download={`paper resume download`} href="https://cdn.discordapp.com/attachments/1084984544144408678/1142520644047745024/ica_cant_handle_long_filenames.pdf">
                                    download
                                    <DownloadIcon class={`w-6 ml-2`} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div class="uppercase text-sm secondary-text">linkedin</div>
                        <div class="pb-12 ">
                            <div class={``}>
                                <a class={`flex flex-row text-xl font-medium border-none p-0 m-0 hover:underline primary-text`} download={`paper resume download`} href="https://www.linkedin.com/in/praanto-samadder-4347b5287/">
                                    Praanto Samadder
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
