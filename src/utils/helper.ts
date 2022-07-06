export const getUrlMovie = (thumb_url: string) => {
  return encodeURI(
    `https://ophim.cc/_next/image?url=https://img.ophim.tv/uploads/movies/${thumb_url}&w=160&q=75`
  );
};

export const getTimeCurrent = () : string => {
  const now = new Date();

  const h = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
  const m = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
  const s = now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;

  return `${h}:${m}:${s}`;
};
