<!-- <Accordion value="[0,1]"  multiple="true">
    <AccordionPanel value="0">
        <AccordionHeader>Front-end Deisgn and Development </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                <span class="my-5">• Collaboratively developed a website tailored for managing employment
                    recruitment events
                    for faculty staff in School of
                    Architecture. </span><br />
                <span class="font-bold">Webiste Link:</span> <a href="https://www.seuarchjob.com/manage/"
                    class="underline">Digital
                    Employment Platform for Southeast University School of Architecture</a>
                <img src="/public/images/jobweb.jpg" alt="Image">

                <span class="my-5">• Collaborated on the development of an AI poetry website and an
                    AI-driven epitaph
                    information extraction website using
                    Vue.js, focusing on front-end design and functionality. </span><br />
                <span class="font-bold">Webiste Link: Waiting for online</span> <br />
                <img src="/public/images/epitaph.jpg" alt="Image" >

                <span class="my-5">• Prototyped an interactive VR Home Tour System for a real estate app.
                    The UI interaction encompasses
                    the design and optimization of all user interactions and visual elements leading up to
                    the
                    VR experience.</span><br />
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"
                    :showItemNavigatorsOnHover="true" :showItemNavigators="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            style="height: 100%; display: block" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"
                            style="display: block" />
                    </template>
                    
                </Galleria>

            </p>

        </AccordionContent>
    </AccordionPanel>



    <AccordionPanel value="1">
        <AccordionHeader>Illustrations and Comics</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Drawing inspiration from my life and perception, I have developed a collection of sketches, comics, and emojis, which I share on my personal platform. My emoji stickers has gained significant popularity, with over 100,000 downloads and more than 5 million shares.
            </p>
            <Galleria :value="comicImages" :responsiveOptions="responsiveOptions" :numVisible="4"
                    :showItemNavigatorsOnHover="true" :showItemNavigators="true"  >
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            style="height: 100%; display: block" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"
                            style="display: block" />
                    </template>
                    
                </Galleria>
        </AccordionContent>
    </AccordionPanel>
    
</Accordion> -->
<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row">
                            <p class="font-bold">My Artwork Account:
                                <a
                                    href="https://www.xiaohongshu.com/user/profile/5fe15f78000000000101c1a9?xsec_token=&xsec_source=pc_note">
                                    <i class="pi pi-instagram" style="font-size: 1rem"> </i>
                                </a>
                            </p>
                        </div>
        <div>
            <p>Drawing inspiration from my life and perception, I have developed a collection of sketches, comics, and
                emojis.<br /> My emoji stickers, which can be used on Wechat,  has gained significant popularity, with
                over 14,000 downloads and more than 758,000 shares.</p>
        </div>
        <!-- <img src="/images/sticker.png" alt=""> -->
        <img src="/images/comic4.png" alt="">
        <img src="/images/profile.jpg" alt="">
        <!-- <img src="/images/comic1.png" alt="">
        <img src="/images/comic2.png" alt="">
        <img src="/images/comic3.png" alt=""> -->
        

    </div>
</template>