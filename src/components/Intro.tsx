import { Show } from "solid-js"
import ColumnSpacer from "./ColumnSpacer";

export default function Intro(props) {
    return (
        <div class='col-entire-section'
             classList={{"col-content-expand": !props.hidden, "col-content-shrink": props.hidden}} onclick={props.onclickAction}>
            {/* Header Section */}
            <div class='col-header cursor-pointer'>
                <div class="col-header-title">
                    Intro
                </div>
            </div>

            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden, "col-content-hidden col-content-shrink": props.hidden}}>
                    <div class="col-text">
                        <div class="text-4xl font-medium mb-3">
                            Hi! I'm Praanto
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
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