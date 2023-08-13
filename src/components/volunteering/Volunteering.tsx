import {Show} from "solid-js";
import Header from "../reusable/Header";
import Section from "../reusable/Section";

export default function Volunteering(props: { onclickAction: any, palette: number, hidden: boolean, initialDelay: number, lang: string }) {
    const bgColor: {[index: number]: string} = {
        1: "bg-bg-1 z-50 relative",
        2: "bg-bg-2 z-50 relative",
        3: "bg-bg-3 z-50 relative",
        4: "bg-bg-4 z-50 relative",
        5: "bg-bg-5 z-50 relative",
        6: "bg-bg-6 z-50 relative",
        7: "bg-bg-7 z-50 relative",
        8: "bg-bg-8 z-50 relative",
        9: "bg-bg-9 z-50 relative",
        10: "bg-bg-10 z-50 relative",
    }

    const borderColor: {[index: number]: string} = {
        1: "border-contrast-1 border-r",
        2: "border-contrast-2 border-r",
        3: "border-contrast-3 border-r",
        4: "border-contrast-4 border-r",
        5: "border-contrast-5 border-r",
        6: "border-contrast-6 border-r",
        7: "border-contrast-7 border-r",
        8: "border-contrast-8 border-r",
        9: "border-contrast-9 border-r",
        10: "border-contrast-10 border-r",
    }

    return (
        <Section header_en={`Projects`} headerDelay={props.initialDelay} hidden={props.hidden} sectionNumber_en={`02.`} sectionNumber_bn={`03.`} palette={props.palette} lang={props.lang} clickAction={props.onclickAction}>
            <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden, "col-content-hidden col-content-shrink": props.hidden}}>
                <div class="col-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque praesentium eveniet unde! Dolor, cupiditate a. Fugiat voluptatibus in reprehenderit error quos a ipsum nam, facere beatae dolor quae tempore labore quia. Expedita, quis praesentium. Sed amet consectetur maxime pariatur laboriosam est praesentium quaerat distinctio aliquam tempore? Fuga, debitis dolorem.
                </div>
            </div>
        </Section>

        // <div class={bgColor[props.palette]}
        //      classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}>
        //     <div class={borderColor[props.palette]}>
        //         <div class='w-full flex cursor-pointer'>
        //             <Header palette={props.palette} bnSectionNumber="০২." initialDelay={props.initialDelay} hidden={props.hidden} lang={props.lang} sectionNumber="02." enText="Projects" bnText="প্রজেক্টসমূহ" actionButton={null} onclick={props.onclickAction}/>
        //         </div>
        //         <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
        //             <div class='col-content' classList={{"col-content-expand col-content-visible": !props.hidden, "col-content-hidden col-content-shrink": props.hidden}}>
        //                 <div class="col-text">
        //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque praesentium eveniet unde! Dolor, cupiditate a. Fugiat voluptatibus in reprehenderit error quos a ipsum nam, facere beatae dolor quae tempore labore quia. Expedita, quis praesentium. Sed amet consectetur maxime pariatur laboriosam est praesentium quaerat distinctio aliquam tempore? Fuga, debitis dolorem.
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}