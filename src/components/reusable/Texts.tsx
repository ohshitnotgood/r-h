import {createEffect, createSignal, Show} from "solid-js";

export function Text(props: {text: {en: string, bn: string}, lang: string, palette: number, accent: string, class: string}) {

    const [className, setClassName] = createSignal("")

    const c: {[index: number]: string} = {
        1: "text-primary-1",
        2: "text-primary-2",
        3: "text-primary-3",
        4: "text-primary-4",
        5: "text-primary-5",
        6: "text-primary-6",
        7: "text-primary-7",
        8: "text-primary-8",
        9: "text-primary-9",
        10: "text-primary-10",
    }
    
    return (
        <div class={props.class}>
            <div class={c[props.palette]}>
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

export function SecondaryText() {
    const c: {[index: number]: string} = {
        1: "text-secondary-1",
        2: "text-secondary-2",
        3: "text-secondary-3",
        4: "text-secondary-4",
        5: "text-secondary-5",
        6: "text-secondary-6",
        7: "text-secondary-7",
        8: "text-secondary-8",
        9: "text-secondary-9",
        10: "text-secondary-10",
    }
}

export function TertiaryText() {
    const c: {[index: number]: any} = {
        1: "text-tertiary-1",
        2: "text-tertiary-2",
        3: "text-tertiary-3",
        4: "text-tertiary-4",
        5: "text-tertiary-5",
        6: "text-tertiary-6",
        7: "text-tertiary-7",
        8: "text-tertiary-8",
        9: "text-tertiary-9",
        10: "text-tertiary-10",
    }
}
