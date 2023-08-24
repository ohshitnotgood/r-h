import androidLogoBlock from "../../assets/img/android_logo_bw_block.png";
import ktorLogo from "../../assets/img/logo/logo_ktor.png";
import {PrimaryText, SecondaryText} from "./Texts";
import {Show} from "solid-js";
import DisableLink from "../../assets/icons/ic_link_off.svg";
import LinkIcon from "../../assets/icons/ic_link.svg";


/**
 * Displays content in a card that has reactive (not currently working) rounded borders.
 *
 *
 * A few things must be ensured when using this element:
 * - Title of the card **must** be wrapped in an `h1` tag.
 * - Contents **must** be wrapped in a `p` tag.
 * - Frameworks used **must** be wrapped in an `<em>` tag
 * @param props.cardImage Image if the card must have one
 * @param props.children Can either be passed as a parameter or element can be wrapped around any children
 */
export function Card( props: { cardImage?: any, children: any}) {
    return (
        <>
            <style>{`
                h1 {
                    text-align: start;
                    font-size: 1.125rem;
                    line-height: 1.5rem;
                    font-weight: 500;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding-bottom: 0.75rem;
                }
            
                ul {
                    list-style: inside;
                    padding-left: 4px;
                    text-transform: lowercase;
                }
                
                p {
                   padding-bottom: 1rem; 
                }
                
                em {
                    font-weight: 600;
                    font-style: normal;
                }
                
                
                p > button, a {
                    display: inline-block;
                    border: 1px;
                    border-style: solid;
                    border-color: var(--border-color);
                    padding-left: 0.5rem;
                    padding-right: 0.5rem;
                    padding-top: 0.15rem;
                    padding-bottom: 0.15rem;
                    margin-top: 0.4rem;
                    align-items: center;
                    font-size: 0.875rem; 
                    line-height: 1.25rem;
                    margin-left: 0.5rem;
                    border-radius: 999px;
                }
                
                
            `}</style>
            <div>
                <div class={`rounded-3xl border p-4 border-[color:var(--border-color)]`}>
                    { props.children }
                </div>
            </div>
        </>
    )
}

export function A(props: {href: string, children: any, xSetter: any, ySetter: any, hoverTextSetter: any}) {

    let hoverHref = 'https://' + props.href.split("/")[2]

    function mouseMoveAction(xPosSetter: any, yPosSetter: any, e: any) {
        props.hoverTextSetter(hoverHref)
        xPosSetter(`left: ${e.clientX - 150}px;`)
        yPosSetter(`top: ${e.clientY + 20}px;`)
    }

    return (
        <a onmousemove={(e) => mouseMoveAction(props.xSetter, props.ySetter, e)} onmouseleave={() => props.hoverTextSetter('null')} class={`inline-block rounded-3xl border border-[color:var(--border-color)] px-2`} href={props.href}>
            <SecondaryText>{props.children}</SecondaryText>
        </a>
    )
}


export function A2( props: {href: string, children: any, xSetter: any, ySetter: any, hoverTextSetter: any} ) {

    let hoverHref = props.href
    if (props.href != 'no project link available yet') hoverHref = 'https://' + props.href.split("/")[2]

    function mouseMoveAction(xPosSetter: any, yPosSetter: any, e: any) {
        props.hoverTextSetter(hoverHref)
        xPosSetter(`left: ${e.clientX - 150 - 100 - 100}px;`)
        yPosSetter(`top: ${e.clientY + 20}px;`)
    }

    return (
        <a onmousemove={(e) => mouseMoveAction(props.xSetter, props.ySetter, e)} onmouseleave={() => props.hoverTextSetter('null')} class={`rounded-none primary-text border-none font-medium text-lg p-0 m-0 flex hover:underline items-center flex-row pt-0 decoration-[color:var(--primary-color-post)]`} href={props.href}>
            <SecondaryText>{props.children}</SecondaryText>
            <Show when={props.href === 'no project link available yet'}>
                <DisableLink alt={"Link icon"} class={`h-5 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
            </Show>
            <Show when={props.href != 'no project link available yet'}>
                <LinkIcon alt={"Link icon"} class={`h-5 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
            </Show>
        </a>
    )
}

export function A3( props: {href: string, children: any, xSetter: any, ySetter: any, hoverTextSetter: any, img?: any} ) {

    let hoverHref = props.href
    if (props.href != 'no project link available yet') hoverHref = 'https://' + props.href.split("/")[2]

    function mouseMoveAction(xPosSetter: any, yPosSetter: any, e: any) {
        props.hoverTextSetter(hoverHref)
        xPosSetter(`left: ${e.clientX - 150}px;`)
        yPosSetter(`top: ${e.clientY + 20}px;`)
    }

    return (
        <a onmousemove={(e) => mouseMoveAction(props.xSetter, props.ySetter, e)} onmouseleave={() => props.hoverTextSetter('null')} class={`rounded-none primary-text border-none font-medium text-lg p-0 m-0 flex hover:underline items-center flex-row pt-0 decoration-[color:var(--primary-color-post)]`} href={props.href}>
            <PrimaryText>{props.children}</PrimaryText>
            <Show when={props.href === 'no project link available yet' && props.img == null || false || undefined}>
                <DisableLink alt={"Link icon"} class={`h-5 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
            </Show>
            <Show when={props.href != 'no project link available yet' && props.img == null || false || undefined}>
                <LinkIcon alt={"Link icon"} class={`h-5 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
            </Show>
            <Show when={props.img != null || false}>
                {props.img}
            </Show>
        </a>
    )
}


