export default function Outro(props) {
    return (
        <div class='section'>
            <div class='column-header'>
                <div class='column-header-title'>
                    Outro
                </div>
            </div>
            <div classList={{"column-content column-content-hidden": props.hidden, "column-content column-content-visible": !props.hidden}}>
                Content
            </div>
        </div>
    )
}