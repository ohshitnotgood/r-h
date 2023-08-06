import icDownCircled from '../../assets/icons/ic_down_circled.svg'
import jsLogo from '../../assets/img/js_logo_bw.png'
import ktLogo from '../../assets/img/kt_logo_bw.png'
import androidLogoRound from "../../assets/img/android_logo_bw_circle.png"
import dbLogo from '../../assets/img/database_logo_bw.png'
import androidLogoBlock from '../../assets/img/android_logo_bw_block.png'
import swiftLogo from '../../assets/img/swift_logo_bw.png'
import {createSignal, Show} from "solid-js";
import Header from "./Header";
import Body from "./Body";

export default function Experience(props) {
    const [userReachedBottom, setUserReachBottom] = createSignal(false)
    let mainContent: HTMLDivElement

    let counter = 0

    return (
        <div class='col-entire-section'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>

            <Header props={props}/>

            <div class="absolute right-8 bottom-5"
                 classList={{"scroll-indicator-hide": userReachedBottom(), "scroll-indicator-show": !userReachedBottom()}}>
                <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>
                    <img class="w-8 h-8" src={icDownCircled} alt="Down scroll indicator"/>
                </div>
            </div>

            <Body props={props} userReachSetter={setUserReachBottom}/>
        </div>
    )
}