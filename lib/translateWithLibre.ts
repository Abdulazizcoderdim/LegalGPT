export const translateWithLibre = async (text: string) => {
  const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: "en",
      target: "uz",
      format: "text",
    }),
  });
  const data = await res.json();
  return data.translatedText;
};
