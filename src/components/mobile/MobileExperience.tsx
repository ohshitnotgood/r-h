import {Javascript, Database, Android, Kotlin, Swift} from "../experience/Components"


export default function MobileExperience(props: {lang: string}) {
    return (
        <div class="py-12 border-t border-black">
            <nav class="w-screen px-12 h-[7vh] grid content-center">
                02.
            </nav>
            <div class="px-12">
                <div class="text-4xl font-bold uppercase">
                    Independent and Professional Experience
                </div>
            </div>

            <div class="grid grid-cols-[auto_5vw] px-12 mt-12">
                <div>
                    <Javascript />
                    <Database />
                    <Android />
                    <Kotlin />
                    <Swift />
                </div>
                <div class="pointer-events-none flex content-start uppercase text-sm writing-mode-rl orientation-mixed">
                    Independent Development
                </div>
            </div>

            <div class="pt-6 text-sm px-12">
                Since commencing my programming journey in high school, I have accumulated extensive experience with diverse programming languages and frameworks highly sought after in the industry. Through numerous personal projects, I familiarized myself with industry standards and best practices, utilizing these ventures as platforms for continuous learning, drawing inspiration, and enhancing my creativity and skill set.
            </div>
        </div>
    )
}
