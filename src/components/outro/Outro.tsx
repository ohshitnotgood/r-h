import {createSignal, Show} from "solid-js";
import Section from "../reusable/Section";
import DownloadIcon from '../../assets/icons/ic_download.svg'


export default function Outro(props: any) {
    const bgColor: {[index: number]: string} = {
        1: "bg-bg-1 z-50 relative",
        2: "bg-bg-2 z-50 relative",
        3: "bg-bg-3 z-50 relative",
        4: "bg-bg-4 z-50 relative",
        5: "bg-bg-5 z-50 relative",
        6: "bg-bg-6 z-50 relative",
        7: "bg-bg-7 z-50 relative",
        8: "bg-bg-8 z-50 relative",
        9: "bg-bg-9 z-50 relative",
        10: "bg-bg-10 z-50 relative",
    }

    const borderColor: {[index: number]: string} = {
        1: "border-contrast-1 border-r",
        2: "border-contrast-2 border-r",
        3: "border-contrast-3 border-r",
        4: "border-contrast-4 border-r",
        5: "border-contrast-5 border-r",
        6: "border-contrast-6 border-r",
        7: "border-contrast-7 border-r",
        8: "border-contrast-8 border-r",
        9: "border-contrast-9 border-r",
        10: "border-contrast-10 border-r",
    }

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
                    <div class="mt-32 pt-24 pb-5 uppercase text-7xl font-bold text-right">Contact Me!</div>
                    <div class="pb-24 text-justify">

                    </div>
                    <div class="grid grid-cols-2 ">
                        <div class="uppercase text-sm">Emails</div>
                        <div class="pb-12">
                            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                <a class={`text-lg border-none p-0 m-0 hover:underline primary-text`} href="mailto:praanto@icloud.com">praanto@icloud.com (personal)</a>
                            </div>
                            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                                <a class={`text-lg border-none p-0 m-0 hover:underline primary-text`} href="mailto:samadder@kth.se">samadder@kth.se (school)</a>
                            </div>
                        </div>

                        <div class="uppercase text-sm primary-text">phone</div>
                        <div class="pb-12">
                            <div>
                                <a class={`text-lg border-none font-medium p-0 m-0 hover:underline primary-text`} href="tel:+46707762321">+46 70776 2321</a>
                                <div class="pb-6 secondary-text">
                                    phone - sweden 🇸🇪
                                </div>
                            </div>
                        </div>
                        <div class="uppercase text-sm primary-text">paper CV</div>
                        <div class="pb-12">
                            <div class={``}>
                                <a class={`flex flex-row text-lg font-medium border-none p-0 m-0 hover:underline primary-text`} download={`paper resume download`} href="https://cdn.discordapp.com/attachments/1084984544144408678/1142520644047745024/ica_cant_handle_long_filenames.pdf">
                                    download
                                    <img class={`w-6 ml-2`} src={DownloadIcon} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
