export default function Volunteering(props) {
    return (
        <div class='col-entire-section' classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}} onclick={props.onclickAction}>
            <div class="cursor-pointer">
                <div class='w-full flex cursor-pointer'>
                    {/* Header Section */}
                    <div class='col-header cursor-pointer'>
                        <div class="col-header-title">
                            Volunteering
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