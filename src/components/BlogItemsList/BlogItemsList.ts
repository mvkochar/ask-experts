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
        image: 'images/blog1.png',
        title: 'Consulting Fees Study 2019 (And How To Raise Your Rates)',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'images/blog1-author.png',
        authorName: 'John Carter',
        date: 'September 1, 2022'
    },

    {
        id: 1,
        image: 'images/blog2.png',
        title: 'What is growth hacking and how to apply it to your startup',
        desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        authorPhoto:'images/blog2-author.png',
        authorName: 'Nayra Melson',
        date: 'September 1, 2022'
    }
]

export default BlogItemsList