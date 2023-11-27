const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

// export const indexQuery = `
// *[_type == "post"] | order(date desc, _updatedAt desc) {
//   ${postFields}
// }`

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

// NEW STUFF STARTS HERE

const componentFields = `
  _id,
  title,
  description,
  props,
  "slug": slug.current,
  code,
`;

export const indexQuery = `
*[_type == "component"] | order(_updatedAt desc) {
  ${componentFields}
}`;

export const componentQuery = `
{
  "component": *[_type == "component" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${componentFields}
  },
  "moreComponents": *[_type == "component" && slug.current != $slug] | order(_updatedAt desc) [0...2] {
    content,
    ${componentFields}
  }
}`;

export const componentSlugsQuery = `
*[_type == "component" && defined(slug.current)][].slug.current
`;

export const componentBySlugQuery = `
*[_type == "component" && slug.current == $slug][0] {
  ${componentFields}
}
`;
