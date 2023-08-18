import jsLogo from "../../assets/img/js_logo_bw.png";
import {PrimaryText, SecondaryText} from "../reusable/Texts";

export function MobileEducation(props: any) {
    return(
        <div ref={props.ref} class="bg-[color:var(--bg-color)] py-24 pb-5">
            <nav class="h-[7vh] grid content-center px-8">
                <PrimaryText>
                    03.
                </PrimaryText>
            </nav>
            <div class="uppercase text-6xl font-bold mr-40 mb-12 px-8">
                <PrimaryText>Academic Pursuits</PrimaryText>
            </div>

            <div class={`border border-black rounded-3xl m-4 p-4`}>
                <div class={`pb-2 text-xl`}>
                    <SecondaryText>college</SecondaryText>
                </div>
                <div class="space-y-1 mb-12  border-[color:var(--border-color)] rounded-3xl">
                    <div class="font-semibold text-3xl lowercase ">
                        <PrimaryText>kungliga tekniska högskolan </PrimaryText>
                    </div>
                    <div class="lowercase text-left flex flex-row items-center space-x-2">
                        <span>
                            <PrimaryText>
                                bsc in information and communication technology
                            </PrimaryText>
                        </span>
                    </div>
                    <div class="font-light ">
                        <SecondaryText>
                            2022-present
                        </SecondaryText>
                    </div>
                </div>

                <div class={`pb-2  text-xl`}>
                    <SecondaryText>high school </SecondaryText>
                </div>
                <div class="space-y-1 mb-4  border-[color:var(--border-color)] rounded-3xl">
                    <div class="font-semibold text-3xl lowercase ">
                        <PrimaryText>oxford international school</PrimaryText>
                    </div>
                    <div class="lowercase text-left flex flex-row items-center space-x-2">
                        <span>
                            <PrimaryText>
                                cambridge gce o level and a level
                            </PrimaryText>
                        </span>
                        <img src={jsLogo} class="w-5 h-5 hidden" alt={"Javascript logo in black and white"}/>
                    </div>
                    <div class="font-light ">
                        <SecondaryText>
                            2019 - 2022
                        </SecondaryText>
                    </div>
                </div>
            </div>
        </div>
    )
}