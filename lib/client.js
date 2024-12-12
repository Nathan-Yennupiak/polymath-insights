import { groq } from 'next-sanity';
import { createClient } from 'next-sanity';

export const Client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: '2024-12-12',
    token: process.env.SANITY_API_TOKEN,
    
});

export async function getPosts() {
    const posts = await Client.fetch(groq`*[_type == 'post']{
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  publishedAt,
  
  "body" : pt::text(body),
  "author": *[_type== "author" && _id == ^.author._ref][0]{
    _id,
    name,
      "slug": slug.current
  },
  categories[]->{
    _id,
    name
  },
  "content": body
}`);
return posts;
}