import OpacityAnimatedText from "../reusable/OpacityAnimatedText";
import {PrimaryText} from "../reusable/Texts";
import jsLogo from "../../assets/img/js_logo_bw.png";
import {
    EyeTrackerCard, HexcomCard,
    HomeworkCard, MomentumScrollCard,
    SchedulerCard,
    SwiftEssentialsCard,
    TennisForTwoCard,
    ThisWCard
} from "../outro/Components";

export default function MobileProjects(props: {ref: HTMLDivElement}) {
    return (
        <div ref={props.ref} class="bg-[color:var(--bg-color)] py-24 pb-5 border-[color:var(--border-color)]">
            <nav class="h-[7vh] grid content-center border-t px-8">
                04.
            </nav>
            <div class={`px-8`}>
                <div class="uppercase text-6xl font-bold mr-40">
                    <PrimaryText>
                        Projects
                    </PrimaryText>
                </div>

                <div class="space-y-1 pb-12">
                    <div class={`text-3xl lowercase font-bold pt-32`}>
                        <PrimaryText>
                            Current Projects
                        </PrimaryText>
                    </div>

                    <div class={`space-y-8`}>
                        <TennisForTwoCard />
                        <SchedulerCard />
                    </div>

                    <div class={`text-3xl lowercase font-bold pt-14`}>
                        <PrimaryText >
                            Past Projects
                        </PrimaryText>
                    </div>

                    <div class={`space-y-8`}>
                        <HomeworkCard />
                        <EyeTrackerCard />
                        <SwiftEssentialsCard />
                        <ThisWCard />
                        <HexcomCard />
                    </div>

                    <div class={`text-3xl lowercase font-bold pt-14`}>
                        <PrimaryText>
                            Planned Projects
                        </PrimaryText>
                    </div>

                    <div>
                        <MomentumScrollCard />
                    </div>
                </div>
            </div>
        </div>
    )
}