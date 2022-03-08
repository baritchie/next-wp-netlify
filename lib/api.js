const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch("https://wp.sannicolastech.dev/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}

export async function getNavItems() {
  const data = await fetchAPI(`
    query GetNavItems {
        navItems {
            nodes {
                navMeta {
                    itemOrder
                    itemName
                }
                databaseId
            }
        }
    }
    `)
  return data.navItems.nodes
}
