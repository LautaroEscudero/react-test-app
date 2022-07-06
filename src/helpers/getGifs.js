export const getGifs = async ( category ) => {
    const api_key = '57qYRy0hzF4v41Sa7m7ogQMKAVAK9V05';

    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&&q=${ category }&&limit=4`);
    const { data } = await resp.json(); 

    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ) );
    return gifs;
};