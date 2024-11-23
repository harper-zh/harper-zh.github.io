
export const PhotoService = {
    getImages() {
        return Promise.resolve([
            {
                itemImageSrc: '/images/school.png',
                thumbnailImageSrc: '/images/schools.png',
                alt: 'Primary school design based on educational model innovation',
                title: 'Public Space',
            },
            {
                itemImageSrc: '/images/pav.png',
                thumbnailImageSrc: '/images/pavs.png',
                alt: 'An easy-to-build pavilion that incorporates weaving craftsmanship',
                title: 'Computationla Design and Fabrication',
            },
            {
                itemImageSrc: '/images/city1.jpg',
                thumbnailImageSrc: '/images/city1s.jpg',
                alt: 'Design from an urban morphology perspective to revitalize a historic downtown district',
                title: 'Urban Design',
            },
            {
                itemImageSrc: '/images/house.png',
                thumbnailImageSrc: '/images/houses.png',
                alt: 'Single, family and double rooms for social housing',
                title: 'Apartment Design',
            },
            
            
            {
                itemImageSrc: '/images/rendering.jpg',
                thumbnailImageSrc: '/images/renderings.png',
                alt: 'A space inspired by literature, about perception and emotion',
                title: 'Visual Architecture',
            },
            {
                itemImageSrc: '/images/virtual.png',
                thumbnailImageSrc: '/images/virtuals.png',
                alt: 'Virtual space experience storyboard based on AIGC and image space',
                title: 'Virtual Space',
            },
            
        ]);
    },
};
