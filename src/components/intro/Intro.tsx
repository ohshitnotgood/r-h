import rightArrow from "../../assets/icons/ic_right.svg"
import {Show} from "solid-js";
import fire from "../../assets/img/fire-fireball.gif"
import { getAge } from "../../functions/GetAge";
import Header from "./Header";
import Body from "./Body";

export default function Intro(props) {
    return (
        <div class='col-entire-section z-50 bg-white'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            {/* Header Section */}
            <Header props={props}/>
            <Body props={props}/>
        </div>
    )
}