export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cd54a07769bff7f274af6da',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfoliowewe-studio',
                  apiId: '2b88f1ad-9dd5-4387-b669-88b4b1d1e616'
                },
                {
                  buildHookId: '5cd54a070f75d2ad66810905',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfoliowewe',
                  apiId: 'a7abe5d1-04d3-423c-93dd-f82eda936c4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-portfoliowewe',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfoliowewe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
