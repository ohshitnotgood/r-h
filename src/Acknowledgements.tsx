import {MobileEducation} from "./components/mobile/MobileEducation";

export default function Acknowledgements() {
    return(
        <div>
            <div class={"max-md:hidden"}>
                <DesktopAcknowledgement />
            </div>
            <div class={"lg:hidden"}>
                <MobileAcknowledgement />
            </div>
        </div>
    )
}

function DesktopAcknowledgement() {
    return (
        <div class="flex flex-row h-full">
            <div class="border-r border-black w-[100px] h-full">

            </div>

            <div class="h-screen text-7xl text-right font-bold mt-32 mx-32 uppercase w-full">
                Credits and Acknowledgements
            </div>
        </div>
    )
}

function MobileAcknowledgement() {
    return (
        <div>

        </div>
    )
}