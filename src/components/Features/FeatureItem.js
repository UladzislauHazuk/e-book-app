import ExploreItems from './ExploreItem'

function FeatureItem ({label}) {
    const content = [{
        id: 1,
        header: 'Internal editor',
        paragraph: `While reading, you can easily change the color, font, text size, line spacing, and other attributes. 

                    Mark up and annotate text passages, bookmark your current page, translate selected parts of the text or copy it.`,
        image: 'feature-image1'
    },
    {
        id: 2,
        header: 'Compact preview',
        paragraph: 'Each book has a compact menu with everything you need - starting from the rating, the number of pages, language and a brief introduction of the book, and ending with the choice of book format - read view and audio.',
        image: 'feature-image2'
    },
    {
        id: 3,
        header: 'Convenient search',
        paragraph: `The app has a separate tab on the main panel with several types of search and selection of books.

                    You can search by the title of a book, it’s author, or a particular topic. Also, for those who don’t have a specific request, you can find a book in top categories or by top book authors.`,
        image: 'feature-image3'
    },
    {
        id: 4,
        header: 'Audio version',
        paragraph: `The Pocket Book app delivers a high-quality ebook-reading and audiobook-listening experience. 

                    Parallel to the audio track, the text of the book is broadcast. You can pause the audio at any time and switch to independent reading of the book. At the same time, your book progress will be automatically saved.`,
        image: 'feature-image4'
    }]

    if (label === 'Internal editor') {
        return <ExploreItems image={content[0].image} h3={content[0].header} key={content[0].id} p={content[0].paragraph} />
    } else if (label === 'Compact preview') {
        return <ExploreItems image={content[1].image} h3={content[1].header} key={content[1].id} p={content[1].paragraph} />
        
    } else if (label === 'Convenient search') {
        return <ExploreItems image={content[2].image} h3={content[2].header} key={content[2].id} p={content[2].paragraph} />
    } else {
        return <ExploreItems image={content[3].image} h3={content[3].header} key={content[3].id} p={content[3].paragraph} />
    }
}

export default FeatureItem