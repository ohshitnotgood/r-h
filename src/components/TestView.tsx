import {MScroll} from "./reusable/MScroll";

export default function TestView(props: any) {
    return (
        <div id={`sab-ka-baap`} class={`max-w-[10vw]`}>
            <MScroll>
                <div class={`bg-red-400 grid place-content-center h-[40vh] w-full`}>
                    Hello World
                </div>
                <div class={`bg-green-400  grid place-content-center h-[40vh] w-full`}>
                    Hello World 2
                </div>

                <div class={`bg-yellow-300  grid place-content-center h-[40vh] w-full`}>
                    Hello World 3
                </div>

                <div class={`bg-pink-400  grid place-content-center h-[40vh] w-full`}>
                    Hello World 4
                </div>

                <div class={`bg-gray-500 grid place-content-center h-[40vh] w-full`}>
                    Hello World 5
                </div>

                <div class={`bg-blue-700 grid place-content-center h-[40vh] w-full`}>
                    Hello World 6
                </div>
            </MScroll>
        </div>
    )
}