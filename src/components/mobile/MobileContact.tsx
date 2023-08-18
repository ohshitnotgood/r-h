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
            <div class={``}>
                <div class="uppercase text-6xl px-8 font-bold mr-40 pb-12">
                    <PrimaryText>
                        Contact me!
                    </PrimaryText>
                </div>

                <div class={`grid grid-cols-[30%_70%] border border-black rounded-3xl py-4 p-3 mx-5` }>
                    <div class={`lowercase text-lg font-light`}>
                        <SecondaryText>Email</SecondaryText>
                    </div>
                    <div class={`text-lg rounded-3xl pb-4 font-semibold`}>
                        <PrimaryText>
                            <a class={`text-lg py-1 px-4 m-0 hover:underline`} href="mailto:praanto@icloud.com">praanto@icloud.com</a>
                        </PrimaryText>
                    </div>

                    <div class={`lowercase text-lg font-light`}>
                        <SecondaryText>Phone</SecondaryText>
                    </div>
                    <div class={`text-lg pb-4 font-semibold`}>
                        <PrimaryText>
                            <a class={`text-lg py-1 px-4 m-0 hover:underline`} href="mailto:praanto@icloud.com">+46 70776 2321</a>
                        </PrimaryText>
                    </div>

                    <div class={`lowercase text-lg font-light `}>
                        <SecondaryText>paper cv</SecondaryText>
                    </div>
                    <div class={`text-lg font-semibold hover:underline`}>
                        <PrimaryText>
                            <a class={`text-lg rounded-3xl border border-black py-1 px-4 m-0 hover:underline`} href="mailto:praanto@icloud.com">
                                <div class={` flex flex-row`}>
                                    <PrimaryText>download</PrimaryText>
                                    <img class={`w-8 pl-2`} src={downloadIcon} alt="Icon indicating possible download"/>
                                </div>
                            </a>
                        </PrimaryText>
                    </div>

                    <div>

                    </div>
                    <div>
                        <a href="/credits" class={`hover:underline text-lg p-2 m-0 mt-8 lowercase font-semibold`}>
                            <PrimaryText>Credits and Acknowledgements</PrimaryText>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}