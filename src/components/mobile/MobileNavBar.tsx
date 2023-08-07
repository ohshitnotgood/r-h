export default function MobileNavBar() {
    return (
            <nav class="sticky top-0 w-screen min-h-[7vh] border-b border-black grid bg-white overflow-x-clip">
                <div class="grid grid-cols-[auto_150px] w-screen relative">
                    <div>
                    </div>
                    <div class="max-w-[150px]">
                        <div class="max-w-[150px] h-full relative">
                            <div class="bg-gradient-to-r from-white to-transparent w-[20px] h-full absolute left-0 top-0 z-30">

                            </div>
                            <div class="lowercase font-semibold text-xl overflow-x-scroll z-10 hide-scrollbar h-full flex flex-row">
                                <div class="min-w-[150px] grid place-content-center">
                                    Intro
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    Experience
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    Education
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    Volunteering
                                </div>
                                <div class="min-w-[150px] grid place-content-center">
                                    Others
                                </div>
                            </div>
                            <div class="bg-gradient-to-l from-white to-transparent w-[20px] h-full absolute top-0 right-0 z-30">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )

}