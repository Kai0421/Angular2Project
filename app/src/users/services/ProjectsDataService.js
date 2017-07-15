
/**
 * Project DataService
 * Projects embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function ProjectsDataService($q) {
  var projects = [
    {
      name: 'UWP',
      avatar: 'svg-1',
      teams: [
        {
          title: 'Production Support', 
          softwares : [
            { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            },            
          ]
        },
        {
          title: 'DOU', 
           softwares : [
             { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            }
          ]
        },
        {
          title: 'BLV', 
           softwares : [
             { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            }
          ]
        },
      ]
     },
    {
      name: 'B2B',
      avatar: 'svg-2',
      teams: [
        {
          title: 'Team1', 
          softwares : [
            { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            }
          ]
        },
        {
          title: 'Team2', 
           softwares : [
             { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            }
          ]
        },
      ]
    },
    {
      name: 'PQM',
      avatar: 'svg-2',
      teams: [
        {
          title: 'IL', 
          softwares : [
            { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            }
          ]
        },
        {
          title: 'Mule', 
          softwares : [
            { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            },
             { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            }
            , { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            }
            , { 
              sname : 'Software1',
              description : 'Description1',
              compulsary : true
            },
            { 
              sname : 'Software2',
              description : 'Description2',
              compulsary : false
            },
             { 
              sname : 'Software3',
              description : 'Description3',
              compulsary : true
            },
            { 
              sname : 'Software4',
              description : 'Description4',
              compulsary : false
            },
          ]
        },
      ]
    }
  ];

  // Promise-based API
  return {
    loadAllProjects: function() {
      // Simulate async nature of real remote calls
      return $q.when(projects);
    }
  };
}

export default ['$q', ProjectsDataService];

