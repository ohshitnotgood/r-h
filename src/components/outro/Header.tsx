import {Show} from "solid-js";

export default function Header(props) {
    let _props = props.props
    return (
        <div>
            <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer bg-white'>
                <div class="grid grid-arrangement h-screen place-content-center">
                    <div class="h-fit text-center pt-10">
                        05.
                    </div>
                    <div class="h-fit text-center"></div>
                    <div class="col-header-title" classList={{"col-header-visible": _props.hidden, "col-header-hidden": !_props.hidden}}>
                        <Show when={_props.lang == "en"}>Others</Show>
                        <Show when={_props.lang == "bn"}>কর্মদক্ষতা</Show>
                    </div>
                    <div class="h-fit"></div>
                    <div class="h-full grid place-content-center">
                    </div>
                </div>
            </div>
        </div>
    )
}