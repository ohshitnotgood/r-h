export default function Education(props) {
    return (
        <div class='section'>
            <div class='column-header'>
                <div class='column-header-title'>
                    Education
                </div>
            </div>
            <div classList={{"column-content column-content-hidden": props.hidden, "column-content column-content-visible": !props.hidden}}>
                <div class="text-7xl">
                    <div class="max-w-[500px] overflow-y-scroll">
                        Main Text Main Text Main Text main text main text
                    </div>
                </div>
            </div>
        </div>
    )
}