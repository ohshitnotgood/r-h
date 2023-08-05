export default function Education(props) {
    return (
        <div class='col-entire-section' classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}} onclick={props.onclickAction}>
            <div class="col-header">
                <div class='w-full flex cursor-pointer'>
                    {/* Header Section */}
                    <div class='col-header cursor-pointer'>
                        <div class="col-header-title">
                            Education
                        </div>
                    </div>
                </div>
            </div>
            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content w-full' classList={{"col-content-expand col-content-visible": !props.hidden, "col-content-hidden col-content-shrink": props.hidden}}>
                    <div class="col-text">
                        <div class="text-center pb-56">
                            And I think i can put some text here to fill the void that is here. Perhaps some title
                            Perhaps some subtitles. Perhaps some description.
                        </div>
                        <div class="col-text-grid gap-16 grid place-content-center w-full font-left">
                            <div class="uppercase text-sm font-semibold"
                                 classList={{"col-content-delayed-animation--visible": !props.hidden, "col-content-delayed-animation--hidden": props.hidden}}>
                                Bachelor's of Science
                            </div>
                            <div class="uppercase space-y-2 text-right">
                                <div class="text-4xl font-medium">Kungliga Tekniska Högskolan</div>
                                <div class="text-xl font-normal text-gray-500">BSc in Information and Communication Technology</div>
                                <div class="italic">2022 - Present</div>
                            </div>
                            <div class="text-left uppercase text-sm font-semibold"
                                 classList={{"col-content-delayed-animation--visible": !props.hidden, "col-content-delayed-animation--hidden": props.hidden}}>
                                High School
                            </div>
                            <div class="space-y-2 uppercase text-right">
                                <div class="text-4xl font-medium">Oxford International School</div>
                                <div class="">CAIE GCE O Level and A Level</div>
                                <div class="italic">2022 - Present</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}