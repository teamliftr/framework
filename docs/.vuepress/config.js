module.exports = {
    base: '/framework/',
    title: 'TeamLiftr Framework',
    description: 'An assessment and performance tracking framework for software engineering teams.',
    head: [
        ['link', { rel: 'icon', href: '/assets/favicon-32x32.png' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/apple-touch-icon.png' }],
    ],

    themeConfig: {
        logo: '/assets/logo.png',

        sidebar: [
            '/',
            {
                path: '/product_and_technology/',
                title: '1. Product & Technology',
                children: [
                    ['/product_and_technology/PRODUCT_STRATEGY.md', '1.1 Product Strategy'],
                    ['/product_and_technology/TECHNOLOGY_STRATEGY.md', '1.2 Technology Strategy'],
                    ['/product_and_technology/CONTINUOUS_INTEGRATION_AND_DEPLOYMENT.md', '1.3 Continuous Integration & Deployment'],
                    ['/product_and_technology/DATA-DRIVEN_DEVELOPMENT.md', '1.4 Data-Driven Development'],
                ]
            },
            {
                path: '/people_and_performance/',
                title: '2. People & Performance',
                children: [
                    ['/people_and_performance/CURRENT_PERFORMANCE.md', '2.1 Current Performance'],
                    ['/people_and_performance/CONTINUOUS_IMPROVEMENT.md', '2.2 Continuous Improvement'],
                    ['/people_and_performance/WORKPLACE_CULTURE.md', '2.3 Workplace Culture'],
                    ['/people_and_performance/TALENT_RECRUITMENT_AND_DEVELOPMENT.md', '2.4 Talent Recruitment & Development'],
                ]
            },
            {
                path: '/operations_and_risk_management/',
                title: '3. Ops & Risk Management',
                children: [
                    ['/operations_and_risk_management/DAILY_OPERATIONS.md', '3.1 Daily Operations'],
                    ['/operations_and_risk_management/QUALITY_ASSURANCE_AND_STANDARDIZATION.md', '3.2 Quality Assurance & Standardization'],
                    ['/operations_and_risk_management/CONTINUITY_AND_INCIDENT_MANAGEMENT.md', '3.3 Continuity & Incident Management'],
                    ['/operations_and_risk_management/INFORMATION_SECURITY_ASSURANCE.md', '3.4 Information Security Assurance'],
                ]
            },
            ['/BEST_PRACTICES.md', 'TeamLiftr Best Practices'],
            ['/FUTURE_ADDITIONS.md', 'Future Additions'],
        ],

        //algolia: {
        //    apiKey: '<API_KEY>',
        //    indexName: '<INDEX_NAME>'
        //    // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
        //    appId: '<APP_ID>',
        //  },
	
        plugins: [
    	  [
     	     '@vuepress/google-analytics',
      	     {
        	'ga': 'UA-212247114-2'
      	     }
    	  ]
  	],

      }

  }
