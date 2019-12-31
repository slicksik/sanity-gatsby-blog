export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0b37e7070f23cc73feeece',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s4i1we6x',
                  apiId: 'c760b63d-d6d7-41b3-ab99-fa47ec719ea3'
                },
                {
                  buildHookId: '5e0b37e7f46ea3f43a6637d4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cvhcmaxk',
                  apiId: '417d57d1-9cf8-4455-a465-4769655ed751'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slicksik/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cvhcmaxk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
