export default {
  name: 'projectDetails',
  config: {
    bindings: { selected: '<' },
    templateUrl: 'src/users/components/details/ProjectDetails.html',
    controller: ['$mdBottomSheet', '$log', class ProjectDetailsController {

      /**
       * Constructor
       *
       * @param $mdBottomSheet
       * @param $log
       */
      constructor($mdBottomSheet, $log) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;
      }

      selectAll() {

      }

      /**
       * Show the bottom sheet
       */
      share(isAdminButton) {
        var project = this.selected;
        var $mdBottomSheet = this.$mdBottomSheet;
        
        $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: 'src/users/components/details/ContactSheet.html',
          controller: ['$mdBottomSheet', ProjectSheetController],
          controllerAs: "$ctrl",
          bindToController: true
        }).then((isAdminButton) => {
          this.$log.debug(isAdminButton + ' clicked!');
           
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ProjectSheetController($mdBottomSheet) {
          this.title = isAdminButton ? 'Admin Login' : 'Enterprise Credential';
          this.username = isAdminButton ? 'Username' : 'N Number';
          this.username_hint = isAdminButton ? 'Admin username' : 'n#######';
          this.lsButton = isAdminButton ? 'Login' : 'Submit';
          this.project = project;          
         
          this.cancelOnClick = () => {
            $mdBottomSheet.hide();
          };

          this.lsButtonOnClick = () => {
            if(isAdminButton)
            {
              //perform Admin Login authentication the load Admin page
              console.log("Admin Login");
            }
            else
            {
              //Authenticate Enterprise ID, then initiate download
              console.log("User Submission");
            }
          }
        }
      }
    }]
  },
};
