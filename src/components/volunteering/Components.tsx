import androidLogoBlock from "../../assets/img/android_logo_bw_block.png";
import ktorLogo from "../../assets/img/logo/logo_ktor.png";
import {PrimaryText} from "../reusable/Texts";


const borderColor: {[index: number]: string} = {
    1: "border-contrast-1",
    2: "border-contrast-2 ",
    3: "border-contrast-3 ",
    4: "border-contrast-4 ",
    5: "border-contrast-5 ",
    6: "border-contrast-6 ",
    7: "border-contrast-7 ",
    8: "border-contrast-8 ",
    9: "border-contrast-9 ",
    10: "border-contrast-10 ",
}

export function HomeworkTracker() {
    return (
        <div class={`rounded-3xl border p-4 `}>
            <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                <PrimaryText>Homework Tracmer</PrimaryText>
                <img src={androidLogoBlock} class="w-5" alt={"Javascript logo in black and white"}/>
            </div>
            <ul class="list-disc pl-4 lowercase">
                <li>responsive UI design with RelativeLayout and ConstraintLayout and animations with MotionLayout</li>
                <li>reactive state management with LiveData</li>
                <li>currently working on a mobile app with native front-end for Android with Jetpack Compose</li>
            </ul>

            <div class="pt-2 text-lg text-left font-medium flex flex-row items-center space-x-2">
                <span>Ktor</span>
                <img src={ktorLogo} class="w-5" alt={"Ktor logo"}/>
            </div>
            <ul class="list-disc pl-4">
                <li>server-side request handling with Kotlin coroutines</li>
            </ul>
        </div>
    )
}

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
                
                
                p button, a {
                    display: inline-block;
                    border: 1px;
                    border-style: solid;
                    border-color: var(--border-color);
                    padding-left: 0.5rem;
                    padding-right: 0.5rem;
                    padding-top: 0.15rem;
                    padding-bottom: 0.15rem;
                    margin-bottom: 0.4rem;
                    align-items: center;
                    font-size: 0.875rem; 
                    line-height: 1.25rem;
                    margin-left: 0.5rem;
                    border-radius: 999px;
                }
                
                p a:hover {
                    background-color: var(--secondary-color)
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