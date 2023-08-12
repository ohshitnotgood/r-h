import {createSignal, onMount} from "solid-js";
import {style} from "solid-js/web";

export function MScroll(props: { class?: string, style?: string }) {
    let root: HTMLDivElement

    let main: HTMLDivElement

    let oldScroll: number = 0

    const [mainStyle, setMainStyle] = createSignal(`top: 0; left: 0;`)


    let dy = 0, dx = 0
    let sx = 0, sy = 0

    function render() {
        // console.log("render")
        dx = linearInterpolate(dx, sx, 0.05);
        dy = linearInterpolate(dy, sy, 0.05);

        dx = Math.floor(dx * 100) / 100;
        dy = Math.floor(dy * 100) / 100;

        // setMainStyle(`position: fixed; top: 0; left: 0; transform: translate(0, -${dy}px)`)

        main.scrollTo(0, dy)

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
        <div class={`relative ${props.class}`}>
            <div id={`scroll-capture`} class={`${props.class} absolute top-0 left-0 overflow-y-scroll opacity-0 z-30`} ref={root} onscroll={onScroll}>
                {props.children}
            </div>

            <div id={`root`} class={`${props.class} overflow-hidden z-20 pointer-events-auto absolute top-0 left-0`} style={mainStyle()}>
                <div class={`${props.class} overflow-y-scroll`} ref={main}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}