// Load the custom app ES6 modules

import ProjectsDataService from 'src/users/services/ProjectsDataService';
import ProjectsList from 'src/users/components/list/ProjectsList';
import ProjectDetails from 'src/users/components/details/ProjectDetails';
// import LoginDialog from 'src/users/components/details/LoginDialog';
// import CardViewRow from 'src/users/components/details/CardViewRow';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])

// Custom View compnents is exported here and make sure the component is imported above (name is always name-of-the-component -> separated by -)
  .component(ProjectsList.name, ProjectsList.config)
  .component(ProjectDetails.name, ProjectDetails.config)
  // .component(LoginDialog.name, LoginDialog.config)
  // .component(CardViewRow.name, CardViewRow.config)

  .service("ProjectsDataService", ProjectsDataService);
