import {MScroll} from "./reusable/MScroll";

export default function TestView(props: any) {
    return (
        <MScroll>
            <div class={`bg-red-400 grid place-content-center h-[40vh] w-screen`}>
                Hello World
            </div>
            <div class={`bg-green-400  grid place-content-center h-[40vh] w-screen`}>
                Hello World 2
            </div>

            <div class={`bg-yellow-300  grid place-content-center h-[40vh] w-screen`}>
                Hello World 3
            </div>

            <div class={`bg-pink-400  grid place-content-center h-[40vh] w-screen`}>
                Hello World 4
            </div>

            <div class={`bg-gray-500 grid place-content-center h-[40vh] w-screen`}>
                Hello World 5
            </div>

            <div class={`bg-blue-700 grid place-content-center h-[40vh] w-screen`}>
                Hello World 6
            </div>
        </MScroll>
    )
}