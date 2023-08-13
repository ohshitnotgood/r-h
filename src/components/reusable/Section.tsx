import Header from "./Header";

export default function Section(props: {
    header_en: string,
    header_bn?: string,
    children: any,
    headerDelay: number,
    actionButton?: any,
    hidden: boolean,
    sectionNumber_en: string,
    sectionNumber_bn: string,
    palette: number,
    lang: string,
    clickAction: any,
    secondaryActionButton?: any
}) {

    const bgColor: {[index: number]: string} = {
        1: "bg-bg-1",
        2: "bg-bg-2",
        3: "bg-bg-3",
        4: "bg-bg-4",
        5: "bg-bg-5",
        6: "bg-bg-6",
        7: "bg-bg-7",
        8: "bg-bg-8",
        9: "bg-bg-9",
        10: "bg-bg-10",
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
        <div class={`bg-[color:var(--bg-color)] relative z-50 transition-all duration-700`}
         classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}>
        <div class={borderColor[props.palette]}>
            <Header onclick={props.clickAction}
                palette={props.palette}
                bnSectionNumber={props.sectionNumber_bn}
                lang={props.lang} enText={props.header_en}
                bnText={props.header_bn ?? ""}
                sectionNumber={props.sectionNumber_en}
                hidden={props.hidden}
                actionButton={props.actionButton}
                initialDelay={props.headerDelay}/>

            <div class="absolute right-8 bottom-5">
                <div class="flex justify-center items-center flex-col" classList={{"col-content-visible": !props.hidden, "col-content-hidden": props.hidden}}>
                    {props.secondaryActionButton}
                </div>
            </div>

            <div classList={{'z-10 absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='grid place-content-center h-screen z-50'
                     classList={{"col-content-expand col-content-visible": !props.hidden, "col-content-hidden col-content-shrink": props.hidden}}>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    )
}