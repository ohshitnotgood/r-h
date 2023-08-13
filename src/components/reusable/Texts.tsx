import {createEffect, createSignal, Show} from "solid-js";

/**
 *
 * @param props.enT
 * @param props.bnT
 * @param props.lang
 * @param props.palette
 * @param props.class
 * @constructor
 */
export function PrimaryText(props: {children: any, bnT?: any, lang?: string, palette: number, class?: string}) {
    return (
        <div class={props.class}>
            {/*<div class={`text-[color:var(--primary-color)]`}>*/}
            <div class={`primary-text`}>
                <Show when={props.lang == "" || props.lang == null}>
                    {props.children}
                </Show>
                <Show when={props.lang == "en"}>
                    {props.children}
                </Show>
                <Show when={props.lang == "bn"}>
                    {props.bnT}
                </Show>
            </div>
        </div>
    )
}

export function SecondaryText(props: {children: any, bnT?: any, lang?: string, palette: number, class?: string}) {
    return (
        <div class={props.class}>
            {/*<div class={`text-[color:var(--secondary-color)]`}>*/}
            <div class={`secondary-text`}>
                <Show when={props.lang == "" || props.lang == null}>
                    {props.children}
                </Show>
                <Show when={props.lang == "en"}>
                    {props.children}
                </Show>
                <Show when={props.lang == "bn"}>
                    {props.bnT}
                </Show>
            </div>
        </div>
    )
}

export function TertiaryText(props: {lang?: string, palette: number, children: any, bnT?: string, class?: string}) {
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

    return (
        <div class={props.class}>
            <div class={c[props.palette]}>
                <Show when={props.lang == "" || props.lang == null}>
                    {props.children}
                </Show>
                <Show when={props.lang == "en"}>
                    {props.children}
                </Show>
                <Show when={props.lang == "bn"}>
                    {props.bnT}
                </Show>
            </div>
        </div>
    )
}
