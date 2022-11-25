const getTracks = async (album_id) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bfd7348c30mshda17aa37068e024p128b58jsnf47efa7c3f16',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  const promise = await fetch(`https://spotify23.p.rapidapi.com/albums/?ids=${album_id}`, options);
  const response = await promise.json();
  const { albums } = response;
  const album = albums[0];
  
  return album
}

export default getTracks;
