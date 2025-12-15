export default function sitemap() {
  const baseUrl = 'https://www.barbeariadojohnny.com.br';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}