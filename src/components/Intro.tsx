import "animate.css"
import TypingAnimation from "./TypingAnimation";

export default function Intro(props) {
    return (
        <div class='col-entire-section z-50 bg-white'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/* Header Section */}
            <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer bg-white'>
                <div class="grid grid-arrangement h-screen place-content-center">
                    <div class="w-full text-center">
                        blank
                    </div>
                    <div class="font-inter text-3xl font-bold rotate-[270deg] uppercase bg-white">
                        Intro
                    </div>
                    <div>
                    </div>
                </div>
            </div>

            <div classList={{'z-10 absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden, "col-content-hidden col-content-shrink": props.hidden}}>
                    <div class="col-text">
                        <div class="text-4xl font-medium mb-3">
                            <TypingAnimation text="Hi! I'm Praanto" delay={100} initialDelay={400} />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}