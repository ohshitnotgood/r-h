import {MobileEducation} from "../mobile/MobileEducation";
import {EmailAndPhone} from "../outro/Components";
import typescriptLogo from "../../assets/img/typescript_logo_bw.png";
import solidLogo from "../../assets/img/solidjs_logo.jpg";
import tailwindLogo from "../../assets/img/tailwind-logo.jpg";
import linkIcon from "../../assets/icons/ic_link.svg";
import rightArrow from "../../assets/icons/ic_right.svg";
import languageIcon from "../../assets/icons/ic_lang.svg";
import downIcon from "../../assets/icons/ic_down_circled.svg";
import {Design, Fonts, Frameworks, Icons} from "./Components";

export default function Acknowledgements() {
    return(
        <div>
            <div class={"max-md:hidden"}>
                <DesktopAcknowledgement />
            </div>
            <div class={"lg:hidden"}>
                <MobileAcknowledgement />
            </div>
        </div>
    )
}

function DesktopAcknowledgement() {
    return (
        <div class="flex flex-row h-full">
            <div class="border-r border-black w-[100px] h-full">

            </div>

            <div class="h-screen text-7xl text-right font-bold mt-32 mx-32 uppercase w-full">
                Credits and Acknowledgements
            </div>
        </div>
    )
}

function MobileAcknowledgement() {
    return (
        <div>
            <nav class="w-screen">
                <div class="font-semibold underline text-xl p-4 lowercase">
                    <a href="/">back</a>
                </div>
            </nav>
            <div class="px-8 pt-20 w-screen">
                <div class="w-full hyphens-manual text-left font-bold text-5xl">
                    Credits and Acknowledge&shyments
                </div>
            </div>

            <div class="grid grid-cols-[40%_55%] px-8 pt-12 ">
                <div class="uppercase text-sm">Frameworks</div>
                <Frameworks />

                <div class="uppercase text-sm">Design</div>
                <Design />

                <div class="uppercase text-sm">Font</div>
                <Fonts />

                <div class="uppercase text-sm">Icons</div>
                <Icons />
            </div>
        </div>
    )
}


function Credits(props: any) {
    return (
        <div>
            <div class="mt-12 pt-24 pb-5 uppercase text-7xl font-bold text-right">Credits and Acknowledgements</div>
            <div class="pb-24 text-justify">

            </div>
            <div class="grid grid-cols-2 ">
                <div class="uppercase text-sm">Frameworks</div>
                <Frameworks />

                <div class="uppercase text-sm">Design</div>
                <Design />

                <div class="uppercase text-sm">Font</div>
                <Fonts />

                <div class="uppercase text-sm">Icons</div>
                <Icons />
            </div>
        </div>
    )
}

