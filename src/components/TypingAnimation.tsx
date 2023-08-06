export default function TypingAnimation(props) {
    let reference: HTMLDivElement;
    let itemizedText = props.text.split('')
    let counter = 0;

    setTimeout(() => {
        reference.innerHTML = itemizedText[0]
        let typingInterval = setInterval(() => {
            counter += 1
            if (itemizedText[counter] === " ") reference.innerHTML += "\u2009"
            if (itemizedText[counter] === " ") reference.innerHTML += "\u2009"
            if (itemizedText[counter] === " ") reference.innerHTML += "\u2009"
            reference.innerText += itemizedText[counter]
            if (counter === itemizedText.length - 1) clearInterval(typingInterval)
        }, props.delay)
    }, props.initialDelay)

    return(
        <div ref={reference} class={props.class}>
            &nbsp
        </div>
    )
}