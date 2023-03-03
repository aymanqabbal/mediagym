export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3dee8dc455msh04c41e0a91aade8p12a783jsnb715b0d6d6b7",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "14bc774910msh0a24f2d5939fcd7p105e5bjsn8b210431769f",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
