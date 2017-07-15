/**
 * Users DataService
 * Users embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */

function UsersDataService($u) {
    var users = [
        {
            admin : 'Admin',
            cred : {
                username : 'Admin',
                password : 'password'
            }
        },
        {
            normal : 'normal',
            list : [
                {
                    username : 'n0296116',
                    password : 'password'
                },
                {
                    username : 'n0290955',
                    password : 'password'
                }
            ]
        }
    ];

    // Promise-based API
    return {
        loadAllUsers: function () {
            // Simulate async nature of real remote calls
            return $u.when(users);
        }
    };
}

export default ['$u',UsersDataService];