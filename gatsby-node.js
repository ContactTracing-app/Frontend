// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*';
    // Update the page.
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve('./src/templates/project.tsx');

  const result = await wrapper(
    graphql(`
      {
        projects: allProjectsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  );

  result.data.projects.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`
      }
    });
  });
};
