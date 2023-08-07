export default function MobileNavBar() {
    return (
            <nav class="sticky top-0 w-screen min-h-[7vh] border-b border-black grid bg-white">
                <div>
                    <div class="w-screen items-center h-[7vh] overflow-y-scroll hide-scrollbar font-bold text-sm uppercase flex flex-row space-x-5">
                        <div>
                            Intro
                        </div>
                        <div>
                            Experience
                        </div>
                        <div>
                            Education
                        </div>
                        <div>
                            Volunteering
                        </div>
                        <div>
                            Contact
                        </div>
                    </div>
                </div>
            </nav>
    )

}