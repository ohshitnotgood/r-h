export default function TypingAnimation(props) {
    let reference: HTMLDivElement;
    let itemizedText = props.text.split('')
    var counter = 0

    setTimeout(() => {
        let typingInterval = setInterval(() => {
            if (itemizedText[counter] === " ") reference.innerHTML += "\u2009"
            else reference.innerText += itemizedText[counter]
            counter += 1
            if (counter === itemizedText.length) clearInterval(typingInterval)
        }, props.delay)
    }, props.initialDelay)

    return(
        <div ref={reference} class={props.class}>
        </div>
    )
}