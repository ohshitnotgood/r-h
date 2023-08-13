import jsLogo from "../../assets/img/js_logo_bw.png";

export function MobileEducation(props: any) {
    return(
        <div ref={props.ref} class="bg-[color:var(--bg-color)] my-24 pb-5 px-12 ">
            <nav class="h-[7vh] grid content-center">
                03.
            </nav>
            <div class="uppercase text-4xl font-bold mr-40 mb-12">Academic Pursuits</div>

            <div class="space-y-1 pb-12">
                <div class="font-bold text-3xl lowercase ">
                    kungliga tekniska högskolan
                </div>
                <div class="lowercase text-left flex flex-row items-center space-x-2">
                    <span>bsc in information and communication technology</span>
                    <img src={jsLogo} class="w-5 h-5 hidden" alt={"Javascript logo in black and white"}/>
                </div>
                <div class="font-light ">
                    college <b>·</b> 2022-present
                </div>
            </div>

            <div class="space-y-1 pb-12">
                <div class="font-bold text-3xl lowercase ">
                    oxford international school
                </div>
                <div class="lowercase text-left flex flex-row items-center space-x-2">
                    <span>cambridge gce o level and a level</span>
                    <img src={jsLogo} class="w-5 h-5 hidden" alt={"Javascript logo in black and white"}/>
                </div>
                <div class="font-light ">
                    high school <b>·</b> 2019 - 2022
                </div>
            </div>
        </div>
    )
}