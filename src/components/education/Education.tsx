import {Show} from "solid-js";
import Header from "../reusable/Header";
import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {PrimaryText} from "../reusable/Texts";
import Section from "../reusable/Section";

export default function Education(props: { palette: number, hidden: boolean, lang: string, onclickAction: any, initialDelay: number }) {
    return (
        <Section header_en={`Education`} headerDelay={props.initialDelay} hidden={props.hidden} sectionNumber_en={`03.`} sectionNumber_bn={`04.`}
                 palette={props.palette} lang={props.lang} clickAction={props.onclickAction}>
            <div class='col-content' classList={{"col-content-visible": !props.hidden, "col-content-shrink": props.hidden}}>
                <div class="col-text overflow-y-scroll pr-20">
                    <OpacityAnimatedText show={!props.hidden} children={
                        <div>
                            <PrimaryText children={<PageTitle />} bnT={""} lang={props.lang} palette={props.palette} class={""}/>
                        </div>
                    } initialDelay={500} />
                    <OpacityAnimatedText show={!props.hidden} children={
                        <div>
                            <PrimaryText>
                                <PageSubtitle/>
                            </PrimaryText>
                        </div>
                    } initialDelay={700} />

                    <div class="grid grid-cols-2 ">
                        <OpacityAnimatedText show={!props.hidden} initialDelay={700}>
                            <div class="uppercase text-sm secondary-text">high school</div>
                        </OpacityAnimatedText>
                        <OpacityAnimatedText show={!props.hidden} initialDelay={700}>
                            <HighSchool />
                        </OpacityAnimatedText>


                        <OpacityAnimatedText show={!props.hidden} initialDelay={900}>
                            <div class="uppercase text-sm secondary-text">Bachelor's of Science</div>
                        </OpacityAnimatedText>
                        <OpacityAnimatedText show={!props.hidden} initialDelay={900}>
                            <College />
                        </OpacityAnimatedText>
                    </div>
                </div>
            </div>
        </Section>
    )
}

function PageTitle() {
    return (
        <div class="mt-24 pt-24 pb-5 uppercase text-8xl primary-text font-bold mr-40">Academic Pursuits</div>
    )
}


function PageSubtitle() {
    return (
        <div class="pb-24 primary-text">
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
            <div class="lowercase text-lg text-left font-medium primary-text">
                Oxford International School
            </div>
            <div class="lowercase primary-text">
                cambridge gce <i>o level</i> and <i>a level</i>
            </div>
            <div class="lowercase italic text-gray-600 text-sm pt-1.5 secondary-text">
                2019 - 2021
            </div>
            <ul class="list-disc pb-10 pt-2 text-gray-500 lowercase secondary-text">
                <li>Graduated with 5A*/4A in the O Level and 3A* in the A Level.</li>
            </ul>
        </div>
    )
}

function College() {
    return (
        <div class="pb-24">
            <div>
                <div class="lowercase text-lg text-left font-medium primary-text">
                    Kungliga Tekniska Högskolan
                </div>
                <div class="lowercase primary-text">
                    bsc in information and communication technology
                </div>
                <ul class="list-disc pb-10 pt-2 text-gray-500 lowercase secondary-text">
                    <li>Graduated with 5A*/4A in the O Level and 3A* in the A Level.</li>
                </ul>
            </div>
        </div>
    )
}