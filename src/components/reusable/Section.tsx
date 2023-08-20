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
    secondaryActionButton?: any,
    tertiaryActionButton?: any
}) {

    return (
        <div class={`bg-[color:var(--bg-color)] relative z-50 transition-all duration-700`}
         classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}>
        <div class={`border border-[color:var(--border-color)] transition-all duration-700`}>
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

            {props.tertiaryActionButton}

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