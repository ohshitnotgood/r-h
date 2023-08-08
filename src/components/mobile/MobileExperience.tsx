import {Javascript, Database, Android, Kotlin, Swift, MathTA, LabAssistant} from "../experience/Components"
import {onMount} from "solid-js";


export default function MobileExperience(props: any) {
    return (
        <div ref={props.ref} id="experience" class="py-12 border-t border-black">
            <nav class="w-screen px-12 h-[7vh] grid content-center">
                02.
            </nav>


            <div class="">
                <div class="text-6xl px-8 md:px-0 font-bold uppercase">
                    Work Experience
                </div>
            </div>

            <div class="pt-6 text-sm px-12 hidden">
                Since commencing my programming journey in high school, I have accumulated extensive experience with diverse programming languages and frameworks highly sought after in the industry. Through numerous personal projects, I familiarized myself with industry standards and best practices, utilizing these ventures as platforms for continuous learning, drawing inspiration, and enhancing my creativity and skill set.
            </div>


            <div class="mx-8 my-4 font-bold mt-10 text-3xl lowercase ">
                Independent Development
            </div>

            <div class="px-8">
                <Javascript />
                <Database />
                <Android />
                <Kotlin />
                {/*<Swift />*/}
            </div>

            <div class="mx-8 my-4 font-bold mt-10 text-3xl lowercase ">
                teaching assistant
            </div>

            <div class="px-8 ">
                <MathTA />
            </div>

            <div class="px-8 my-4 font-bold mt-10 text-3xl lowercase ">
                lab assistant
            </div>

            <div class="px-8 ">
                <LabAssistant />
            </div>

        </div>
    )
}
