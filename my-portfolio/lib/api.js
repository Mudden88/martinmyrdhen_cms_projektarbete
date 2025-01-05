// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const METADATA_GRAPHQL_FIELDS = `
  siteTitle
  socialLinks
  heroTitle
  heroText
`;

async function fetchGraphQL(query, isDraftMode) {
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query })
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export async function getMetaData(isDraftMode = false) {
  const metadata = await fetchGraphQL(
    `query {
      metadataCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${METADATA_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );

  return metadata?.data?.metadataCollection?.items;
}
