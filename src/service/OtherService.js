
export const OtherService = {
    getImages() {
        return Promise.resolve([
            {
                itemImageSrc: '/images/vr1.png',
                thumbnailImageSrc: '/images/vr1s.png',
                alt: 'Primary school design based on educational model innovation',
                title: 'Public Space',
            },
            {
                itemImageSrc: '/images/vr2.png',
                thumbnailImageSrc: '/images/2small.png',
                alt: 'An easy-to-build pavilion that incorporates weaving craftsmanship',
                title: 'Computationla Design and Fabrication',
            },
            {
                itemImageSrc: '/images/vr3.png',
                thumbnailImageSrc: '/images/vr3s.png',
                alt: 'Design from an urban morphology perspective to revitalize a historic downtown district',
                title: 'Urban Design',
            },
            
        ]);
    },
};