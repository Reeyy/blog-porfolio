export const ValidUrl = (url: string) => {
  if (!url.trim()) return '';
  let validUrl: URL;
  try {
    validUrl = new URL(url);
  } catch (error) {
    validUrl = new URL(`https://${url}`);
  }
  return validUrl.origin;
};
