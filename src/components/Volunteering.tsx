import {Show} from "solid-js";

export default function Volunteering(props: any) {
    return (
        <div class='col-entire-section' classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}} onclick={props.onclickAction}>
            <div class='w-full flex cursor-pointer'>
                {/* Header Section */}
                <div class='h-screen place-content-center w-[100px] z-10 cursor-pointer bg-white'>
                    <div class="grid grid-arrangement h-screen place-content-center">
                        <div class="h-fit text-center pt-10">
                            04.
                        </div>
                        <div class="h-fit text-center"></div>
                        <div class="col-header-title" classList={{"col-header-visible": props.hidden, "col-header-hidden": !props.hidden}}>
                            <Show when={props.lang == "en"}>Volunteering</Show>
                            <Show when={props.lang == "bn"}>স্বেচ্ছাসেবক কর্মসূচি</Show>
                        </div>
                        <div class="h-fit"></div>
                        <div class="h-full grid place-content-center">
                        </div>
                    </div>
                </div>
            </div>
            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden, "col-content-hidden col-content-shrink": props.hidden}}>
                    <div class="col-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque praesentium eveniet unde! Dolor, cupiditate a. Fugiat voluptatibus in reprehenderit error quos a ipsum nam, facere beatae dolor quae tempore labore quia. Expedita, quis praesentium. Sed amet consectetur maxime pariatur laboriosam est praesentium quaerat distinctio aliquam tempore? Fuga, debitis dolorem.
                    </div>
                </div>
            </div>
        </div>
    )
}