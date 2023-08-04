import { createSignal, type Component } from 'solid-js';

import Intro from './components/Intro';
import Education from "./components/Education";
import Experience from "./components/Experience";
import Volunteering from "./components/Volunteering";
import Outro from "./components/Outro";
import ColumnSpacer from "./components/ColumnSpacer";

const App: Component = () => {
    const [d1Class, setD1Class] = createSignal("col col-full")
    const [d2Class, setD2Class] = createSignal("col col-fit")
    const [d3Class, setD3Class] = createSignal("col col-fit")
    const [d4Class, setD4Class] = createSignal("col col-fit")
    const [d5Class, setD5Class] = createSignal("col col-fit")


    const [d1Hidden, setD1Hidden] = createSignal(false);
    const [d2Hidden, setD2Hidden] = createSignal(true);
    const [d3Hidden, setD3Hidden] = createSignal(true);
    const [d4Hidden, setD4Hidden] = createSignal(true);
    const [d5Hidden, setD5Hidden] = createSignal(true);

    function resetAllWidthToDefault() {
        setD1Class("col col-fit")
        setD2Class("col col-fit")
        setD3Class("col col-fit")
        setD4Class("col col-fit")
        setD5Class("col col-fit")

        setD1Hidden(true)
        setD2Hidden(true)
        setD3Hidden(true)
        setD4Hidden(true)
        setD5Hidden(true)
    }

    function onClickD1() {
        resetAllWidthToDefault()
        setD1Hidden(false)
        setD1Class("col col-full")
    }

    function onClickD2() {
        resetAllWidthToDefault()
        setD2Hidden(false)
        setD2Class("col col-full")
    }

    function onClickD3() {
        resetAllWidthToDefault()
        setD3Hidden(false)
        setD3Class("col col-full")
    }

    function onClickD4() {
        resetAllWidthToDefault()
        setD4Hidden(false)
        setD4Class("col col-full")
    }

    function onClickD5() {
        resetAllWidthToDefault()
        setD5Hidden(false)
        setD5Class("col col-full")
    }


    return (
        <div class='flex flex-row w-screen'>
            <div class='col-entire-section'
                 classList={{"col-spacer-visible": !d1Hidden(), "col-spacer-hidden": d1Hidden()}} onclick={onClickD1}>
                {/* Header Section */}
                <div class='col-header cursor-pointer'>
                    <div class="col-header-title">
                        Intro
                    </div>
                </div>

                <div classList={{'absolute top-0 left-0 w-full h-full': !d1Hidden(), "hidden": d1Hidden()}}>
                    <div class='col-content' classList={{"col-spacer-visible col-content-visible": !d1Hidden(), "col-content-hidden col-spacer-hidden": d1Hidden()}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque praesentium eveniet unde! Dolor, cupiditate a. Fugiat voluptatibus in reprehenderit error quos a ipsum nam, facere beatae dolor quae tempore labore quia. Expedita, quis praesentium. Sed amet consectetur maxime pariatur laboriosam est praesentium quaerat distinctio aliquam tempore? Fuga, debitis dolorem.
                    </div>
                </div>
            </div>

            <div class='col-entire-section' classList={{"w-full col-spacer-visible": !d2Hidden(), "w-fit col-spacer-hidden": d2Hidden()}} onclick={onClickD2}>
                <div class="cursor-pointer">
                    <div class='w-full flex cursor-pointer'>
                        {/* Header Section */}
                        <div class='col-header cursor-pointer'>
                            <div class="col-header-title">
                                Education
                            </div>
                        </div>
                    </div>
                </div>
                <div classList={{'absolute top-0 left-0 w-full h-full': !d2Hidden(), "hidden": d2Hidden()}}>
                    <div class='col-content' classList={{"col-spacer-visible col-content-visible": !d2Hidden(), "col-content-hidden col-spacer-hidden": d2Hidden()}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque praesentium eveniet unde! Dolor, cupiditate a. Fugiat voluptatibus in reprehenderit error quos a ipsum nam, facere beatae dolor quae tempore labore quia. Expedita, quis praesentium. Sed amet consectetur maxime pariatur laboriosam est praesentium quaerat distinctio aliquam tempore? Fuga, debitis dolorem.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
