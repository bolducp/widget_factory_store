# widget_factory_store
This is a front-end Angular 2 app for a widget store, completed as a code challenge for emocha mobile health.

Available live here: https://bolducp.github.io/widget_factory_store

Currently still a work in progress. As I make continued improvements, I'll update this README.

### To run and develop locally:
Note: This project requires node and npm. Instuctions for installing them can be found [here](https://docs.npmjs.com/getting-started/installing-node).

1. `git clone` the repo, and `git checkout` the master branch
2. cd into the 'widget_factory_store' directory
3. run the command: `npm install`
4. run the command: `npm start`-- this will apply a watcher that automatically updates in the browser as you make changes

#### Remaining work (in order of priority)
1. Setup unit tests using Jasmine and Karma. 
2. Implement functionality to search for Widgets by size or finish.
3. Implement functionality to add a Widget to their order.
4. Implement functionality to view an order, remove things from it, or delete the order entirely.
5. Implement functionality to edit Widget quantities.
6. Implement functionality add new Widgets (eg, making Widget Extreme Edition available in Medium size, Gold finish).
7. Implement hierarchical category structure for widget searching.
8. Implement functionality for adding additional values for existing Widget properties (eg, add a new color or size).
9. Reorganize files in the app directory into smaller sub-directories by view and functionality.
10. Setup a build system using Gulp that will compile the Typescript into Javascript and funnel into a separate 'public' folder. Also perform Less or Sass compilation into CSS, so that styling can be done in a pre-processing language.



