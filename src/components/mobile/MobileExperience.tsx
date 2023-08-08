import {Javascript, Database, Android, Kotlin, Swift, MathTA, LabAssistant} from "../experience/Components"
import {onMount} from "solid-js";


export default function MobileExperience(props: any) {
    return (
        <div ref={props.ref} class="py-12 border-t border-black">
            <nav class="w-screen px-12 h-[7vh] grid content-center">
                02.
            </nav>


            <div class="px-12">
                <div class="text-4xl font-bold uppercase">
                    Independent and Professional Experience
                </div>
            </div>

            <div class="pt-6 text-sm px-12">
                Since commencing my programming journey in high school, I have accumulated extensive experience with diverse programming languages and frameworks highly sought after in the industry. Through numerous personal projects, I familiarized myself with industry standards and best practices, utilizing these ventures as platforms for continuous learning, drawing inspiration, and enhancing my creativity and skill set.
            </div>


            <div class="mx-12 my-4 font-bold mt-10 text-3xl lowercase ">
                Independent Development
            </div>

            <div class="grid grid-cols-[auto_7vw] pl-12 ">
                <div class="pr-12">
                    <Javascript />
                    <Database />
                    <Android />
                    <Kotlin />
                    {/*<Swift />*/}
                </div>
                <div class="w-full hidden">
                    <div class="w-full pointer-events-none font-bold text-2xl bg-black text-white flex content-start uppercase writing-mode-rl orientation-mixed">
                        Independent Development
                    </div>
                </div>
            </div>

            <div class="mx-12 my-4 font-bold mt-10 text-3xl lowercase ">
                teaching assistant
            </div>

            <div class="grid grid-cols-[auto_7vw] pl-12 ">
                <div class="pr-12">
                    <MathTA />
                </div>
                <div class="w-full hidden">
                    <div class="w-full pointer-events-none font-bold text-2xl bg-black text-white flex content-start uppercase writing-mode-rl orientation-mixed">
                        teaching assistant
                    </div>
                </div>
            </div>

            <div class="mx-12 my-4 font-bold mt-10 text-3xl lowercase ">
                lab assistant
            </div>

            <div class="grid grid-cols-[auto_7vw] pl-12 ">
                <div class="pr-12">
                    <LabAssistant />
                </div>
                <div class="w-full hidden">
                    <div class="w-full pointer-events-none font-bold text-2xl bg-black text-white flex content-start uppercase writing-mode-rl orientation-mixed">
                        teaching assistant
                    </div>
                </div>
            </div>

        </div>
    )
}
