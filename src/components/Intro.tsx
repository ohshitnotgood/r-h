import { Show } from "solid-js"

export default function Intro(props) {
    return (
        <div class='section relative'>
            <div class='column-header'>
                <div class='column-header-title'>
                    INTRO
                </div>
            </div>
            <div class="column-content" classList={{"column-content-hidden": props.hidden, "column-content-visible": !props.hidden}}>
            </div>

            <div class="space-y-4 column-content"  classList={{"column-content-hidden": props.hidden, "column-content-visible": !props.hidden}}>
                    <div class="font-inter text-8xl font-bold">
                        I'm Praanto!
                    </div>
                    <div class="font-inter text-7xl font-medium">
                        CompEng student at KTH
                    </div>
            </div>

            <div classList={{"absolute right-0 bottom-0": !props.hidden, "hidden": props.hidden}}>
                <button class="rounded-full dark:bg-slate-700 w-16 h-16 mb-2 mr-2">
                    Button
                </button>
            </div>
        </div>
    )
}

function EnglishText() {
    return (
        <div class="space-y-4">
            <div class="font-inter text-8xl font-bold">
                I'm Praanto!
            </div>
            <div class="font-inter text-7xl font-medium">
                CompEng student at KTH
            </div>
        </div>
    )
}

function BengaliText() {
    return(
        <div>
            <div>
                সাগতম!
            </div>
            <div>
                আমি প্রান্ত!
            </div>
            <div>
                সুইডেন অবস্থিত KTH বিশ্ববিদ্যালয়ের ছাত্র
            </div>
        </div>
    )
}