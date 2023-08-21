import {Design, Fonts, Frameworks, Icons} from "./Components";
import LinkIcon from "../../assets/icons/ic_link.svg";
import typescriptLogo from "../../assets/img/typescript_logo_bw.png";
import solidLogo from "../../assets/img/solidjs_logo.jpg";
import tailwindLogo from "../../assets/img/tailwind-logo.jpg";
import TWLogo from '../../assets/img/tw_logo.svg'
import {createSignal, onMount, Show} from "solid-js";
import {randomizePalette} from "../reusable/ColorPalettes";
import {PrimaryText, SecondaryText} from "../reusable/Texts";
import DisableLink from "../../assets/icons/ic_link_off.svg";

export default function Acknowledgements() {
    onMount(() => {
        randomizePalette()
    })

    const [linkPositionX, setLinkPositionX] = createSignal('left: 0;')
    const [linkPositionY, setLinkPositionY] = createSignal('top: 0;')
    const [linkText, setLinkText] = createSignal('null')


    let tertiaryButton = (
        <div class={`absolute text-[color:var(--bg-color)] bg-[color:var(--primary-color-post)] px-2 text-sm rounded-lg whitespace-nowrap z-30`} classList={{'hidden': linkText() == 'null'}} style={`${linkPositionX()} ${linkPositionY()}`}>
            {linkText()}
        </div>
    )

    function A(props: {href: string, class?: string, children: any, img?: any}) {

        let hoverHref = 'https://' + props.href.split("/")[2]

        function mouseMoveAction(e: any) {
            setLinkText(hoverHref)
            setLinkPositionX(`left: ${e.clientX - 50}px;`)
            setLinkPositionY(`top: ${e.clientY - 20}px;`)
        }

        console.log("img is: " + props.img)

        return (
            <a onmousemove={(e) => mouseMoveAction(e)} onmouseleave={() => setLinkText('null')} class={`flex flex-row items-center hover:underline font-semibold`} href={props.href}>
                <PrimaryText>{props.children}</PrimaryText>
                <Show when={props.href === 'no project link available yet' && (props.img == null || false)}>
                    <DisableLink alt={"Link icon"} class={`h-6 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
                </Show>
                <Show when={props.href !== 'no project link available yet' && (props.img == null || false)}>
                    <LinkIcon alt={"Link icon"} class={`h-6 ml-[-5px] fill-[color:var(--primary-color-post)]`}/>
                </Show>
                <Show when={props.img != null || false}>
                    {props.img}
                </Show>
            </a>
        )
    }

    return(
        <div class={`relative`}>
            {tertiaryButton}

            <div class={`font-bold uppercase text-5xl mt-12 px-4 lg:text-7xl lg:text-right lg:mt-32 primary-text gap-y-5`}>Credits and Acknowled&shygements</div>

            {/*Grid layout*/}
            <div class={`grid w-fit grid-cols-[30%_70%] pt-12 px-4`}>
                <div class={`secondary-text`}>
                    frameworks
                </div>
                <div class={`text-lg primary-text font-medium pb-24`}>
                    <A href={`https://typescriptlang.org/`} img={<img src={typescriptLogo} class="w-5 h-5 ml-3" alt={"Typescript logo"}/>}>Typescript</A>
                    <A href={`https://solidjs.com/`} img={<img src={solidLogo} class="w-5 h-5 ml-2" alt={"SolidJS logo"}/>}>SolidJS</A>
                    <A href={`https://tailwindcss.com/`} img={<TWLogo class="w-5 h-5 ml-2" alt={"SolidJS logo"}/>}>TailwindCSS</A>
                    <A href={`https://www.npmjs.com/package/vite-plugin-solid-svg`}>vite-solidjs-svg-plugin</A>
                </div>
                <div class={`secondary-text`}>
                    design
                </div>
                <div class={`text-lg primary-text font-medium pb-24`}>
                    design inspiration from <A href="https://www.gilhuybrecht.com/">https://www.gilhuybrecht.com</A>
                </div>

                <div class={`secondary-text`}>
                    fonts
                </div>
                <div class={`text-lg primary-text font-medium`}>
                    <div class={`hover:underline font-semibold`}>
                        <A href="https://fonts.google.com/specimen/Inter">inter</A>
                    </div>
                    <div class={`text-sm secondary-text`}>
                        This project makes extensive use of the Inter font by Rasmus Andersson.
                    </div>

                </div>
            </div>
        </div>
    )
}

function DesktopAcknowledgement() {
    return (
        <div class="flex flex-row h-full">
            <div class="border-r border-black w-[100px] h-full">

            </div>

            <div class="h-screen text-7xl text-right font-bold mt-32 mx-32 uppercase w-full">
                Credits and Acknowledgements
            </div>
        </div>
    )
}

function MobileAcknowledgement() {
    return (
        <div>
            <nav class="w-screen">
                <div class="font-semibold underline text-xl p-4 lowercase">
                    <a href="/">back</a>
                </div>
            </nav>
            <div class="px-8 pt-20 w-screen">
                <div class="w-full hyphens-manual text-left font-bold text-5xl">
                    Credits and Acknowledge&shyments
                </div>
            </div>

            <div class="grid grid-cols-[40%_55%] px-8 pt-12 ">
                <div class="uppercase text-sm">Frameworks</div>
                <Frameworks />

                <div class="uppercase text-sm">Design</div>
                <Design />

                <div class="uppercase text-sm">Font</div>
                <Fonts />

                <div class="uppercase text-sm">Icons</div>
                <Icons />
            </div>
        </div>
    )
}


function Credits(props: any) {
    return (
        <div>
            <div class="mt-12 pt-24 pb-5 uppercase text-7xl font-bold text-right">Credits and Acknowledgements</div>
            <div class="pb-24 text-justify">

            </div>
            <div class="grid grid-cols-2 ">
                <div class="uppercase text-sm">Frameworks</div>
                <Frameworks />

                <div class="uppercase text-sm">Design</div>
                <Design />

                <div class="uppercase text-sm">Font</div>
                <Fonts />

                <div class="uppercase text-sm">Icons</div>
                <Icons />
            </div>
        </div>
    )
}

