import jsLogo from "../../assets/img/js_logo_bw.png";
import {SecondaryText} from "../reusable/Texts";

export function MobileEducation(props: any) {
    return(
        <div ref={props.ref} class="bg-[color:var(--bg-color)] py-24 pb-5 px-8 ">
            <nav class="h-[7vh] grid content-center">
                03.
            </nav>
            <div class="uppercase text-6xl font-bold mr-40 mb-12">Academic Pursuits</div>

            <div class={`pb-2 text-xl `}>
                <SecondaryText>college</SecondaryText>
            </div>
            <div class="space-y-1 mb-12  border-[color:var(--border-color)] rounded-3xl">
                <div class="font-semibold text-3xl lowercase ">
                    kungliga tekniska högskolan
                </div>
                <div class="lowercase text-left flex flex-row items-center space-x-2">
                    <span>bsc in information and communication technology</span>
                    <img src={jsLogo} class="w-5 h-5 hidden" alt={"Javascript logo in black and white"}/>
                </div>
                <div class="font-light ">
                    2022-present
                </div>
            </div>

            <div class={`pb-2  text-xl`}>
                <SecondaryText>high school </SecondaryText>
            </div>
            <div class="space-y-1 mb-12  border-[color:var(--border-color)] rounded-3xl">
                <div class="font-semibold text-3xl lowercase ">
                    oxford international school
                </div>
                <div class="lowercase text-left flex flex-row items-center space-x-2">
                    <span>cambridge gce o level and a level</span>
                    <img src={jsLogo} class="w-5 h-5 hidden" alt={"Javascript logo in black and white"}/>
                </div>
                <div class="font-light ">
                    2019 - 2022
                </div>
            </div>
        </div>
    )
}