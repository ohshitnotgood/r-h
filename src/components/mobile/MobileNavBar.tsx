import {createEffect} from "solid-js";

export default function MobileNavBar(props: any) {
    let navBar_Intro: HTMLDivElement
    let navBar_Experience: HTMLDivElement
    let navBar_Education: HTMLDivElement
    let navBar_Volunteering: HTMLDivElement
    let navBar_Outro: HTMLDivElement

    createEffect(() => {
        console.log("detecting change from mobilenavbar")
        if (props.currentPosition == "intro") navBar_Intro.scrollIntoView({behavior: 'smooth'})
        else if (props.currentPosition == "experience") navBar_Experience.scrollIntoView({behavior: 'smooth'})
        else if (props.currentPosition == "education") navBar_Education.scrollIntoView({behavior: 'smooth'})
        else if (props.currentPosition == "volunteering") navBar_Volunteering.scrollIntoView({behavior: 'smooth'})
        else if (props.currentPosition == "outro") navBar_Outro.scrollIntoView({behavior: 'smooth'})
    })

    return (
            <nav class="sticky top-0 w-screen min-h-[7vh] border-b border-black grid bg-white overflow-x-clip">
                <div class="grid grid-cols-[auto_150px] w-screen relative">
                    <div>
                    </div>
                    <div class="max-w-[150px]">
                        <div class="max-w-[150px] h-full relative">
                            <div class="bg-gradient-to-r from-white to-transparent w-[20px] h-full absolute left-0 top-0 z-30">

                            </div>
                            <div class="lowercase font-semibold text-xl overflow-x-scroll z-10 hide-scrollbar h-full flex flex-row">
                                <div ref={navBar_Intro!} class="min-w-[150px] grid place-content-center">
                                    Intro
                                </div>
                                <div ref={navBar_Experience!}  class="min-w-[150px] grid place-content-center">
                                    Experience
                                </div>
                                <div ref={navBar_Education!} class="min-w-[150px] grid place-content-center">
                                    Education
                                </div>
                                <div ref={navBar_Volunteering!} class="min-w-[150px] grid place-content-center">
                                    Volunteering
                                </div>
                                <div ref={navBar_Outro!} class="min-w-[150px] grid place-content-center">
                                    Others
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