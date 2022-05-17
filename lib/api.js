const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export function getGenres() {
    const genres = [
        "Journalism",
        "Advertising",
        "Data Science",
        "All"
    ];
    return genres;
}
/*
export async function getProjects() {
	const data = await fetchAPI(`
query MyQuery {
  items {
    edges {
      node {
        id
        title
        slug
        content
        featuredImage {
          node {
            id
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
}
`)
	return data.items.edges
}
*/


export function getProjects() {
    const projectsList = [
        {
            title: "Project 1",
            slug: "project-1",
            genre: "Journalism",
            image: "01.jpg",
            content:"This is the main content for Project 1."
        },
        {
            title: "Project 2",
            slug: "project-2",
            genre: "Advertising",
            image: "02.jpg",
            content:"This is the main content for Project 2."
        },
        {
            title: "Project 3",
            slug: "project-3",
            genre: "Data Science",
            image: "03.jpg",
            content:"This is the main content for Project 3."
        },
        {
          title: "Project 4",
          slug: "project-4",
          genre: "Data Science",
          image: "04.jpg",
          content:"This is the main content for Project 4."
        },
        {
          title: "Project 5",
          slug: "project-5",
          genre: "Data Science",
          image: "05.jpg",
          content:"This is the main content for Project 5."
        },
        {
          title: "Project 6",
          slug: "project-6",
          genre: "Data Science",
          image: "06.jpg",
          content:"This is the main content for Project 6."
        },
        {
          title: "Project 7",
          slug: "project-7",
          genre: "Data Science",
          image: "07.jpg",
          content:"This is the main content for Project 7."
        },
        {
          title: "Project 8",
          slug: "project-8",
          genre: "Data Science",
          image: "08.jpg",
          content:"This is the main content for Project 8."
        },
    ]
    return projectsList;
}



export function filterProjectsByGenre(projectsList, activeGenre){
    // 1. creat a new empty array
    let filteredProjects =[];
    // 2. loop through the old projects and filter them by a genre

    if (activeGenre === "All") {
        // no filter
        filteredProjects = projectsList;

    } else {
        filteredProjects = projectsList.filter((projectItem) =>{
            // true or false
            // true: return the project into the filtered list
            // false: skip the project
            return activeGenre === projectItem.node.categories.edges[0].node.slug;
        });

    }

    
    // 3. return the new array back to the point of origin
    return filteredProjects;
}


/*export async function getAllProjectSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	const itemSlugs = data.items.edges.map((item) => {
		return {
			params: {
				id: item.node.slug
			}
		}
	});
	return itemSlugs;
}
*/


export async function getAllProjectSlugs() {
    const projects = await  getProjects()

    const projectSlugs = projects.map((project) => {
        return {
            params : {
                id : project.slug
            }
        }
    })
    return projectSlugs
}



export function getSingleProjectData(slug) {
    const projects = getProjects();
    const matchingProject = projects.find((project) => {
        return project.slug === slug
    })
    return {
        matchingProject
    }
}


/*
export async function getSingleProjectData($id) {
	const data = await fetchAPI(`
query MyQuery($id: ID!) {
  item(id: $id, idType: SLUG) {
    id
    title
	content
    featuredImage {
      node {
        altText
        mediaDetails {
          height
          width
        }
        sourceUrl
      }
    }
  }
}
`, {
		variables: {
			"id" : $id
		}
	})
	return data.item
}
*/