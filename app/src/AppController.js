/**
 * Main App Controller for the Angular Material Starter App
 * @param ProjectsDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(ProjectsDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.projects        = [ ];
  self.selectProject   = selectProject;
  self.toggleList   = toggleProjectList;

  // Load all registered Projects

   ProjectsDataService
        .loadAllProjects()
        .then( function( projects ) {
          self.projects    = [].concat(projects);
          self.selected = projects[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleProjectList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectProject ( project ) {
    self.selected = angular.isNumber(project) ? $scope.projects[project] : project;
  }
}

export default [ 'ProjectsDataService', '$mdSidenav', AppController ];
