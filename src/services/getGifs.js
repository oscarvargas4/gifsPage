const apiKey = 'D450FsDSGHnhLtRjif7gX0Zoxg02QAQ2&q';


export default async function getGifs({ keyword = 'morty' }) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    let response = await fetch(apiURL);
    let { data } = await response.json();
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium;
            return { title, id, url };
        })
        return gifs;
    }
}