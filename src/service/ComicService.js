export const ComicService = {
    getImages() {
        return Promise.resolve([
            {
                itemImageSrc: '/images/comic1.png',
                thumbnailImageSrc: '/images/comic1s.png',
                
            },
            {
                itemImageSrc: '/images/comic2.png',
                thumbnailImageSrc: '/images/comic2.png',
                
            },
            {
                itemImageSrc: '/images/comic3.png',
                thumbnailImageSrc: '/images/comic3s.png',
                
            },
            {
                itemImageSrc: '/images/comic4.png',
                thumbnailImageSrc: '/images/comic4s.png',
                
            },
            
        ]);
    },
};