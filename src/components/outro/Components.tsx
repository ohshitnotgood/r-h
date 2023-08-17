export function EmailAndPhone(props: any) {
    return (
        <div class="grid grid-cols-2 ">
            <div class="uppercase text-sm">Emails</div>
            <div class="pb-12">
                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                    <span>praanto@icloud.com (personal)</span>
                </div>
                <div class="lowercase text-lg text-left font-medium flex flex-row items-center space-x-2">
                    <a href="mailto:samadder@kth.se">samadder@kth.se (school)</a>
                </div>
            </div>

            <div class="uppercase text-sm">phone</div>
            <div class="pb-12">
                <div>
                    <div class="lowercase text-lg text-left font-medium">
                        +46 70776 2321
                    </div>
                    <div class="pb-6">
                        phone - sweden 🇸🇪
                    </div>
                    <div class="lowercase text-lg text-left font-medium">
                        +880 1766 239267
                    </div>
                    <div>
                        phone - bangladesh 🇧🇩
                    </div>
                </div>
            </div>
            <div class="uppercase text-sm">paper CV</div>
            <div class="pb-12">
                <div>
                    <div class="lowercase text-lg text-left font-medium">
                        Download
                    </div>
                </div>
            </div>
        </div>
    )
}