
export const PhotoService = {
    getImages() {
        return Promise.resolve([
            {
                itemImageSrc: '/images/school.png',
                thumbnailImageSrc: '/images/schools.png',
                title: 'Primary School Design',
                concept: 'Concept: space based on education innovation',
                area:'Area: 13,770 ㎡',
                year: 'Year: 2021',
                teacher: 'Instructor: Prof. Ma Jin',
                collaboration: 'Collaboration: Wang Ziqi'

            },
            {
                itemImageSrc: '/images/pav.png',
                thumbnailImageSrc: '/images/pavs.png',
                concept: 'Concept: An easy-to-build pavilion that incorporates weaving craftsmanship',
                title: 'Computationla Design and Fabrication',
                year: 'Year: 2022',
                teacher: 'Instructor: Prof. Li Biao',
                collaboration: 'Collaboration: Kong Xingqi'
            },
            {
                itemImageSrc: '/images/city1.jpg',
                thumbnailImageSrc: '/images/city1s.jpg',
                concept: 'Concept: Design from an urban morphology perspective to revitalize a historic downtown district',
                title: 'Zhong Lanli Historic District Design',
                year: 'Year: 2022',
                teacher: 'Instructor: Prof. Deng Hao',
                collaboration: 'Collaboration: Cheng Jiangwen'
            },
            {
                itemImageSrc: '/images/house.png',
                thumbnailImageSrc: '/images/houses.png',
                concept: 'Concept: Integrating furniture and space for single, family and double rooms for social housing',
                title: 'Social Rental Housing Design',
                year: 'Year: 2021',
                area: 'Area: Single: 33㎡, Family: 49.5㎡, Double: 40㎡',
                teacher: 'Instructor: Prof. Yang Jing',
            },
            
            
            {
                itemImageSrc: '/images/virtual.png',
                thumbnailImageSrc: '/images/virtuals.png',
                concept: 'Concept: Virtual space experience storyboard based on AIGC and image space',
                title: 'Virtual Space',
                year: 'Year: 2023',
                teacher: 'Instructor: Prof. Yu Chuanfei',
            },
            
            {
                itemImageSrc: '/images/rendering.jpg',
                thumbnailImageSrc: '/images/renderings.png',
                concept: 'Concept: A space inspired by literature, about perception and emotion',
                title: 'Visual Architecture',
                year: 'Year: 2020',
                teacher: 'Instructor: Prof. Toni Schade',
                
            },
            
        ]);
    },
};
