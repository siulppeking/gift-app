const getGifts = async (category) => {
    const API = `https://api.giphy.com/v1/gifs/search?api_key=oDQTRYI56HY1C3bmf9Nc8XIL2byxd0ui&q=${category}&limit=10`;
    const resp = await fetch(API);
    const { data } = await resp.json();

    const gifts = data.map(g => ({
        id: g.id,
        title: g.title,
        url: g.images.downsized_medium.url
    }));
     return gifts;
}

export default getGifts;