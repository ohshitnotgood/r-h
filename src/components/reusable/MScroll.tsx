import {createSignal, onMount} from "solid-js";
import {style} from "solid-js/web";

export function MScroll(props: { class?: string, style?: string }) {
    let root: HTMLDivElement
    let main: HTMLDivElement

    let oldScroll: number = 0

    const [mainStyle, setMainStyle] = createSignal(`position: fixed; top: 0; left: 0;`)


    let dy = 0, dx = 0
    let sx = 0, sy = 0

    function render() {
        // console.log("render")
        dx = linearInterpolate(dx, sx, 0.05);
        dy = linearInterpolate(dy, sy, 0.05);

        dx = Math.floor(dx * 100) / 100;
        dy = Math.floor(dy * 100) / 100;

        setMainStyle(`position: fixed; top: 0; left: 0; transform: translate(0, -${dy}px)`)

        window.requestAnimationFrame(render)
    }


    window.requestAnimationFrame(render)

    function linearInterpolate(a, b, n) {
        return (1 - n) * a + n * b;
    }


    function onScroll(e: Event) {
        console.log(root.scrollTop)
        if (root.scrollTop < oldScroll) console.log("scrolling up")
        if (root.scrollTop > oldScroll) console.log("scrolling down")
        oldScroll = root.scrollTop

        sx = root.scrollLeft
        sy = root.scrollTop
    }

    return (
        <>
            <style>{`
                .adam {
                }
                
                .adam::-webkit-scrollbar {
                    display: none;
                }
                
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>


            <div id={`root-ka-baap`} class={`w-fit border border-black h-screen`}>
                <div id={`root`} class={`w-full h-full overflow-y-scroll relative hide-scrollbar`}  ref={root} onscroll={onScroll} >
                    <div id={`main`} style={mainStyle()} >
                        <div ref={main}>
                            {props.children}
                        </div>
                    </div>
                    <div id={`scroll-capture`} class="adam w-full relative top-0 left-0 opacity-0">
                        r
                        {props.children}
                    </div>
                </div>
            </div>

        </>
    )
}