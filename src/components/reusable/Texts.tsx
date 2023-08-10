import {createEffect, Show} from "solid-js";

export function Text(props: {text: {en: string, bn: string}, lang: string, palette: string, class: string}) {
    return (
        <div class={props.class}>
            <div class={`text-primary-${props.palette}`}>
                <Show when={props.lang == "en"}>
                    {props.text.en}
                </Show>
                <Show when={props.lang == "bn"}>
                    {props.text.en}
                </Show>
            </div>
        </div>
    )
}
