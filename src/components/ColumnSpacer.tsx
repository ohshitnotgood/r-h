export default function ColumnSpacer(props)  {
    return (
        <div class='col-spacer' classList={{"col-spacer-visible": !props.hidden, "col-spacer-hidden": props.hidden}}>
        </div>
    )
}