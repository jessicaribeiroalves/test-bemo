export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb04429e0d614d6fb3eda6e',
                  title: 'Sanity Studio',
                  name: 'test-bemo-studio',
                  apiId: 'ea38f379-70af-4d49-8012-6e59229a12e6'
                },
                {
                  buildHookId: '5eb044297feab79f66354862',
                  title: 'Landing pages Website',
                  name: 'test-bemo',
                  apiId: '07fb462a-945e-4026-a9e9-307ddd72201b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jessicaribeiroalves/test-bemo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-bemo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
