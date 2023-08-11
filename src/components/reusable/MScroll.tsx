import {onMount} from "solid-js";

export function MScroll(props: { class?: string, style?: string }) {
    let main: HTMLDivElement
    let oldScroll: number = 0

    // onMount (() => {
    //     main.style.position = 'fixed'
    //     main.style.top = 0
    //     main.style.left = 0
    // })


    let dy = 0, dx = 0

    function render() {
        // We calculate our container position by using our Linear Interpolation method.
        dx = lerp(dx, sx, 0.05);
        dy = lerp(dy, sy, 0.05);

        dx = Math.floor(dx * 100) / 100;
        dy = Math.floor(dy * 100) / 100;

        console.log(dy);

        // Finally we translate our container to its new positions.
        // Don't forget to add a minus sign because the container needs to move in
        // the opposite direction of the window scroll.
        main.style.transform = `translate(-${dx}px, -${dy}px)`;
    }

// This is our Linear Interpolation method.
    function linearInterpolate(a, b, n) {
        return (1 - n) * a + n * b;
    }


    function onScroll(e: Event) {
        console.log("scrolling")
        if (main.scrollTop < oldScroll) console.log("scrolling up")
        if (main.scrollTop > oldScroll) console.log("scrolling down")
        oldScroll = main.scrollTop

        // dx = linearInterpolate(dx, sx, 0.05);
        // dy = linearInterpolate(dy, sy, 0.05);
        //
        // dx = Math.floor(dx * 100) / 100;
        // dy = Math.floor(dy * 100) / 100;
        //
        // main.style.transform = `translate(-${dx}px, -${dy}px)`;
    }

    return (
        <div class={`w-screen h-screen overflow-scroll relative`} onscroll={onScroll} >
            <div class={`fixed top-0 left-0`} ref={main}>
                {props.children}
            </div>
            <div class={`z-20 absolute top-0 left-0 opacity-0`}>
                f
                {props.children}
            </div>
        </div>
    )
}