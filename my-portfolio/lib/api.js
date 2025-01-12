const METADATA_GRAPHQL_FIELDS = `
  siteTitle
  socialLinks
  heroTitle
  heroText
  heroImage {
      url
      title
    }
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

const ABOUTME_GRAPHQL_FIELDS = `
titleAbout
aboutMeText {
  json}
educationTitle
educationList {
  json}
workTitle
workList {
  json}
  image {
  title
  url}
`;

const ALLPROJECTS_GRAPHQL_FIELDS = `
id
      title
      slug
      urlGithub
      siteUrl
      category
      details {
        json
      }
      image {
        url
        title
      }
`;

const PROJECT_GRAPHQL_FIELDS = `
id
      title
      slug
      category
      urlGithub
      siteUrl
          details {
        json
      }
        image {
        url
        title
      }
         projectImagesCollection {
        items {
          url
          title
        }
      }`;

const SOCIALLINKS_GRAPHQL_FIELDS = `
      title
      socialName
      socialUrl
      `

async function fetchGraphQL(query, isDraftMode) {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
  const token = isDraftMode
    ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`could not fetch data`);
  }

  return response.json();
}

export async function getAllProjects(isDraftMode = false) {
  const allProjects = await fetchGraphQL(
    `
    query {
      projectsCollection {
        items {
          ${ALLPROJECTS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return allProjects?.data?.projectsCollection?.items;
}

export async function getSocialLinks(isDraftMode = false) {
  const socialLinks = await fetchGraphQL(
    `
    query {
      socialLinksCollection {
        items {
          ${SOCIALLINKS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return socialLinks?.data?.socialLinksCollection?.items;
}

export async function getProjectBySlug(slug, isDraftMode = false) {
  const project = await fetchGraphQL(
    `query {
      projectsCollection(where: {slug: "${slug}"}, preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // om projekt hittas, returnera första
  return project?.data?.projectsCollection?.items[0];
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

export async function getAboutMe(isDraftMode = false) {
  const aboutMe = await fetchGraphQL(
    `query {
      aboutCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${ABOUTME_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  return aboutMe?.data?.aboutCollection?.items;
}
