const METADATA_GRAPHQL_FIELDS = `
  siteTitle
  socialLinks
  heroTitle
  heroText
`;

const LANDINGPAGE_GRAPHQL_FIELDS = `
  cardTitle
  shortInfo
  image {
    url
    description
    title
  }
  title2
  techstackImagesCollection {
    items {
      title
      url
    }
  }
`;

async function fetchGraphQL(query, isDraftMode) {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
  const token = isDraftMode ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ query })
  });

  if (!response.ok) {
    throw new Error(`could not fetch data`);
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

export async function getCardInfo(isDraftMode = false) {
  const cardInfo = await fetchGraphQL(
    `query {
      landingPageCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${LANDINGPAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  return cardInfo?.data?.landingPageCollection?.items;
}
