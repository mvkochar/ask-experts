type BlogNews = {
    id: number
    image: string
    title: string
    desc: string
    authorPhoto: string
    authorName: string
    date:string
}

 const BlogItemsList: BlogNews[] = [
    {
        id: 0,
        image: '/images/blog1.png',
        title: 'Consulting Fees Study 2019 (And How To Raise Your Rates)',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'/images/blog-author1.svg',
        authorName: 'John Carter',
        date: 'September 1, 2022'
    },

    {
        id: 1,
        image: '/images/blog2.png',
        title: 'What is growth hacking and how to apply it to your startup',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'/images/blog-author2.svg',
        authorName: 'Nayra Melson',
        date: 'September 1, 2022'
    },

    {
        id: 2,
        image: '/images/blog3.png',
        title: 'Five Steps to Implement Motivation in Management',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'/images/blog-author1.svg',
        authorName: 'John Carter',
        date: 'September 1, 2022'
    },

    {
        id: 3,
        image: '/images/blog4.png',
        title: 'Team Identifiers, Benefits, and How to Build One that Works',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'/images/blog-author2.svg',
        authorName: 'Nayra Melson',
        date: 'September 1, 2022'
    },

    {
        id: 4,
        image: '/images/blog5.png',
        title: 'Five Steps to Implement Motivation in Management',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'/images/blog-author1.svg',
        authorName: 'John Carter',
        date: 'September 1, 2022'
    },
    
    {
        id: 5,
        image:'/images/blog6.png',
        title: 'A Guide on What to Bring on the First Day of Work',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'/images/blog-author2.svg',
        authorName: 'Nayra Melson',
        date: 'September 1, 2022'
    }
    
]

export default BlogItemsList