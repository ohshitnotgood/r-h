import rightArrow from "../../assets/icons/ic_right.svg";
import languageIcon from "../../assets/icons/ic_lang.svg";
import downIcon from "../../assets/icons/ic_down_circled.svg";
import LinkIcon from "../../assets/icons/ic_link.svg";
import typescriptLogo from "../../assets/img/typescript_logo_bw.png";
import solidLogo from "../../assets/img/solidjs_logo.jpg";
import tailwindLogo from "../../assets/img/tailwind-logo.jpg";


export function Icons() {
    return (
        <div class="pb-24">
            <div>
                <div class="lowercase text-lg text-left font-medium">
                    <div class="lowercase flex flex-row items-center align-middle text-lg space-x-1 ">
                        Icons
                        <img src={rightArrow} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                        <img src={languageIcon} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                        <img src={downIcon} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                        <img src={linkIcon} class="w-5 h-5" alt={"Javascript logo in black and white"}/> from
                        <a rel="noreferrer noopener" target="_blank" href="https://fonts.google.com" class="underline max-sm:hidden">Google Fonts.</a>
                    </div>
                    <a rel="noreferrer noopener" target="_blank" href="https://fonts.google.com" class="sm:hidden mb-4 underline">Google Fonts.</a>
                </div>
                <div class="lowercase text-gray-600">
                    This project makes extensive use of the Material icons from Google Fonts.
                </div>
            </div>
        </div>
    )
}
export function Frameworks() {
    return (
        <div>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Typescript</span>
                <img src={typescriptLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>SolidJS</span>
                <img src={solidLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
            <div class="pb-24 lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>TailwindCSS</span>
                <img src={tailwindLogo} class="w-5 h-5" alt={"Javascript logo in black and white"}/>
            </div>
        </div>
    )
}

export function Design() {
    return (
        <div class="pb-24">
            <div>
                <div class="lowercase text-lg text-left font-medium">
                    Design inspiration taken from <a class="text-gray-600 underline hyphens-manual" href="https://www.gilhuybrecht.com">https://www.gilhuy&shybrecht.com</a>
                </div>
            </div>
        </div>
    )
}

export function Fonts() {
    return (
        <div class="pb-24">
            <div>
                <div class="lowercase text-lg text-left font-medium">
                    <div class="lowercase text-lg text-left font-medium flex flex-row items-center">
                        <a href="https://fonts.google.com/specimen/Inter">Inter</a>
                        <LinkIcon class="w-5 h-5" alt={"Javascript logo in black and white"}/>
                    </div>
                </div>
                <div class="lowercase text-gray-600">
                    This project makes extensive use of the Inter font made by Rasmus Andersson.
                </div>
            </div>
        </div>
    )
}
