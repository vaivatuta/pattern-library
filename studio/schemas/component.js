export const component = {
  name: "component",
  title: "Component",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "code",
      title: "Code Block",
      type: "code",
      options: {
        language: "jsx",
        highlightedLines: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};