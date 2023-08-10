import {Show} from "solid-js";
import Header from "../reusable/Header";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";

export default function Education(props: any) {
    return (
        <div class='col-entire-section'
             classList={{"w-full col-content-expand": !props.hidden, "w-fit col-content-shrink": props.hidden}}
             onclick={props.onclickAction}>
            <div class='w-full flex cursor-pointer'>
                <Header initialDelay={props.initialDelay} hidden={props.hidden} lang={props.lang} enText="Education" bnText="শিক্ষাগত যোগ্যতা" sectionNumber="03." actionButton={null}/>
            </div>
            <div classList={{'absolute top-0 left-0 w-full h-full': !props.hidden, "hidden": props.hidden}}>
                <div class='col-content' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                    <div class="col-text overflow-y-scroll pr-20">
                        <OpacityAnimatedText show={!props.hidden} text={<PageTitle />} initialDelay={500} />
                        <OpacityAnimatedText show={!props.hidden} text={<PageSubtitle />} initialDelay={700} />
                        <div class="grid grid-cols-2 ">
                            <div class="uppercase text-sm">high school</div>
                            <HighSchool />

                            <div class="uppercase text-sm">Bachelor's of Science</div>
                            <College />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PageTitle() {
    return (
        <div class="mt-24 pt-24 pb-5 uppercase text-7xl font-bold mr-40">Academic Pursuits</div>
    )
}


function PageSubtitle() {
    return (
        <div class="pb-24 ">
            As mentioned earlier, my passion for computer programming began in high school, and thus I
            decided to carry that on through university. During my time at university, I delved into
            challenging coursework, engaging projects, and collaborative coding clubs. Internships at a
            tech startup further solidified my passion, emphasizing teamwork and adaptability. As I
            neared graduation, I contemplated career opportunities and postgraduate studies to explore
            specialized areas. Regardless of the path ahead, my unwavering passion for computer
            programming will continue driving me towards a fulfilling and impactful career in the
            world of technology.
        </div>
    )
}
function HighSchool() {
    return (
        <div>
            <div class="lowercase text-lg text-left font-medium">
                Oxford International School
            </div>
            <div class="lowercase">
                cambridge gce <i>o level</i> and <i>a level</i>
            </div>
            <div class="lowercase italic text-gray-600 text-sm pt-1.5">
                2019 - 2021
            </div>
            <ul class="list-disc pb-10 pt-2 pl-4 text-gray-500 lowercase">
                <li>Graduated with 5A*/4A in the O Level and 3A* in the A Level.</li>
            </ul>
        </div>
    )
}

function College() {
    return (
        <div class="pb-24">
            <div>
                <div class="lowercase text-lg text-left font-medium">
                    Kungliga Tekniska Högskolan
                </div>
                <div class="lowercase">
                    bsc in information and communication technology
                </div>
                <ul class="list-disc pb-10 pt-2 pl-4 text-gray-500 lowercase">
                    <li>Graduated with 5A*/4A in the O Level and 3A* in the A Level.</li>
                </ul>
            </div>
        </div>
    )
}