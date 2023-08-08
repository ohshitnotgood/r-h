import {createEffect} from "solid-js";

export default function MobileNavBar(props: any) {
    let r: HTMLDivElement

    createEffect(() => {
        console.log("detecting change from mobilenavbar")

        if (props.currentPosition == "intro")
            r.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        else if (props.currentPosition == "experience")
            r.scrollTo({top: 0, left: 150, behavior: 'smooth'})
        else if (props.currentPosition == "education")
            r.scrollTo({top: 0, left: 300, behavior: 'smooth'})
        else if (props.currentPosition == "volunteering")
            r.scrollTo({top: 0, left: 450, behavior: 'smooth'})
        else if (props.currentPosition == "outro")
            r.scrollTo({top: 0, left: 600, behavior: 'smooth'})
    })

    return (
            <nav class="sticky z-50 top-0 w-screen min-h-[7vh] border-b border-black grid bg-white overflow-x-clip">
                <div class="grid grid-cols-[auto_150px] w-screen relative">
                    <div>
                    </div>
                    <div class="max-w-[150px]">
                        <div class="max-w-[150px] h-full relative">
                            <div class="bg-gradient-to-r from-white to-transparent w-[20px] h-full absolute left-0 top-0 z-30">

                            </div>
                            <div ref={r!} class="lowercase font-semibold text-xl overflow-x-scroll z-10 hide-scrollbar h-full flex flex-row">
                                <div class="min-w-[150px] grid place-content-center">
                                    <a href="#intro">Intro</a>
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    <a href="#experience">Experience</a>
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    <a href="#education">Education</a>
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    <a href="#volunteering">Volunteering</a>
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    <a href="#outro">Others</a>
                                </div>
                            </div>
                            <div class="bg-gradient-to-l from-white to-transparent w-[20px] h-full absolute top-0 right-0 z-30">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )

}