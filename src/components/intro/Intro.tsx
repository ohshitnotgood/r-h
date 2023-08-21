import { Show } from "solid-js";
import langIcon from "../../assets/icons/ic_lang.svg";
import {PageCTAButton, PageDescriptionText, PageSubtitle, PageTitle} from "./Components";
import Section from "../reusable/Section";
import {PrimaryText, SecondaryText} from "../reusable/Texts";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {getAge} from "../../functions/GetAge";
import RightArrow from "../../assets/icons/ic_right.svg";


export default function Intro(props: { palette: number, lang: string, setLang: any, hidden: boolean, onclickAction: any, firstLoadCompleted: boolean }) {
    function LanguageSwitcher() {
        return (
            <div>
                <div class="grid grid-rows-2 border border-gray-400 rounded-lg">
                    <div class="border-b border-gray-400 p-2">
                        <img class="w-6 h-6" src={langIcon} alt="Language icon"/>
                    </div>
                    <button onclick={(e) => {
                        e.stopPropagation()
                        if (props.lang == "en") props.setLang("bn")
                        else props.setLang("en")
                    }} class=" pt-1 cursor-pointer hover:bg-gray-100 rounded-b-lg">
                        <Show when={props.lang == "en"}> bn </Show>
                        <Show when={props.lang == "bn"}> en </Show>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <Section header_en={`Intro`} clickAction={props.onclickAction} header_bn={`suchona`}
                 lang={props.lang} hidden={props.hidden} headerDelay={0} sectionNumber_bn={""} sectionNumber_en={`01.`} palette={props.palette}
                 actionButton={null}>
            <div class="col-text space-y-2.5 lowercase">
                {/*Page Title*/}
                <OpacityAnimatedText show={!props.hidden} initialDelay={props.firstLoadCompleted ? 200 : 1700}>
                    <PrimaryText class={`mb-3 text-6xl xl:text-8xl lg:text-6xl font-bold uppercase`}>
                        Hi! I'm Praanto.
                    </PrimaryText>
                </OpacityAnimatedText>

                {/*Page Subtitle*/}
                <OpacityAnimatedText show={!props.hidden} initialDelay={ props.firstLoadCompleted ? 400 : 1900}>
                    <PrimaryText class={`xl:text-5xl lg:text-4xl`}>comp. eng. student at kth</PrimaryText>
                </OpacityAnimatedText>


                {/*Page description*/}
                <OpacityAnimatedText show={!props.hidden} initialDelay={ props.firstLoadCompleted ? 600 : 2100}>
                    <SecondaryText class={`xl:text-2xl lg:text-lg lg:pr-20`}>
                        {getAge(props.lang)}
                        year old highly skilled software engineer and passionate programmer.
                        Adept at leveraging cutting-edge technologies to deliver efficient and
                        user-centric applications. Committed to continuous learning and seeking
                        new challenges to drive excellence in software development.
                    </SecondaryText>
                </OpacityAnimatedText>

                <OpacityAnimatedText show={!props.hidden} initialDelay={ props.firstLoadCompleted ? 800 : 2300}>
                    <button class="mt-7 border-[color:var(--primary-color-post)] pointer-events-auto z-10 hover:cursor-pointer rounded-full my-4 p-2 px-4 border">
                        <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                            <PrimaryText>get to know me</PrimaryText>
                            {/*<img src={rightArrow} class="w-6 h-6" alt={"Javascript logo in black and white"}/>*/}
                            <div>
                                <RightArrow class={`w-6 h-6 fill-[color:var(--primary-color-post)]`}/>
                            </div>
                        </div>
                    </button>
                </OpacityAnimatedText>
            </div>
        </Section>
    )
}