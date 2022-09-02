export const imgGen = (url) => {
  const id = url.match(/\d+/g)[1];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return imgUrl;
};
