export default function Intro(props) {
    return (
        <div class='section relative'>
            <div class='column-header'>
                <div class='header-text rotate-[270deg] font-inter text-3xl font-bold'>
                    INTRO
                </div>
            </div>
            <div classList={{"column-content column-content-hidden": props.hidden, "column-content column-content-visible": !props.hidden}}>
                <Show when={props.lang === "en"}>
                    <EnglishText />
                </Show>
                <Show when={props.lang === "bn"}>
                    <BengaliText />
                </Show>
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
        <div>
            <div>
                Hi there.
            </div>
            <div>
                I'm Praanto!
            </div>
            <div>
                Comp Eng. student at KTH
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