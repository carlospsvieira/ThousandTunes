const getAlbums = async (artist) => {
  const artistName = encodeURI(artist).replaceAll('%20', '+');

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bfd7348c30mshda17aa37068e024p128b58jsnf47efa7c3f16',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  const promise = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${artistName}&type=albums&offset=0&limit=10&numberOfTopResults=5`, options)
  const response = await promise.json();
  const { albums: { items } } = response;
  console.log("🚀 ~ file: albumsAPI.js ~ line 17 ~ getAlbums ~ items", items)
  return items;
}


export default getAlbums;