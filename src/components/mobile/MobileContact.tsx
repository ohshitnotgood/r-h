import {PrimaryText, SecondaryText} from "../reusable/Texts";
import downloadIcon from '../../assets/icons/ic_download.svg'

export default function MobileContacts(props: {ref: HTMLDivElement}) {

    let emailClass = ""
    let emailClass_ = ""

    let phoneClass = ""
    let phoneClass_ = ""

    let cvClass = ""
    let cvClass_ = ""

    return (
        <div ref={props.ref} class="bg-[color:var(--bg-color)] py-24 pb-5 border-[color:var(--border-color)]">
            <nav class="h-[7vh] grid content-center border-t px-8">
                05.
            </nav>
            <div class={`px-8`}>
                <div class="uppercase text-6xl font-bold mr-40 pb-12">
                    <PrimaryText>
                        Contact me!
                    </PrimaryText>
                </div>

                <div class={`grid grid-cols-[30%_70%] border border-black rounded-3xl p-4` }>
                    <div class={`lowercase text-lg px-4 py-4`}>
                        <SecondaryText>Email</SecondaryText>
                    </div>
                    <div class={`text-lg m-0 rounded-3xl py-4`}>
                        <PrimaryText>
                            <a class={`text-lg rounded-none border-none p-0 m-0 hover:underline`} href="mailto:praanto@icloud.com">praanto@icloud.com</a>
                        </PrimaryText>
                    </div>

                    <div class={`lowercase text-lg px-4 py-4`}>
                        <SecondaryText>Phone</SecondaryText>
                    </div>
                    <div class={`text-lg py-4`}>
                        <PrimaryText>
                            <a class={`text-lg rounded-none border-none p-0 m-0 hover:underline`} href="tel:0707762321">0707762321</a>
                        </PrimaryText>
                    </div>

                    <div class={`lowercase text-lg px-4 py-4`}>
                        <SecondaryText>paper cv</SecondaryText>
                    </div>
                    <div class={`text-lg py-4`}>
                        <PrimaryText>
                            <a class={`text-lg flex flex-row rounded-none border-none p-0 m-0 hover:underline`} href="">
                                download
                                <img class={`w-8 pl-2`} src={downloadIcon} alt="Icon indicating possible download"/>
                            </a>
                        </PrimaryText>
                    </div>

                </div>
            </div>
        </div>
    )
}