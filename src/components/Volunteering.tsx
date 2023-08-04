export default function Volunteering(props) {
    return (
        <div class='section'>
            <div class='column-header'>
                <div class='column-header-title'>
                    Experience
                </div>
            </div>
            <div classList={{"column-content column-content-hidden": props.hidden, "column-content column-content-visible": !props.hidden}}>
                Content
            </div>
        </div>
    )
}