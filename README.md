# FunWithForms

## Workflow

There are two separate 

## Up and running

Cloning repository: `git clone https://github.com/jankiel7410/fun-with-forms.git`

Branch naming convention:
`<ticket-id-from-trello>/<meaningful-name>`, e.g. `qBRkmiAS/describe-workflow-in-readme`


Stage commit changes: `git add <filename>` or `gir add -A` to add all changed files

And commit ;) `git commit -m "add method foo bar"`

Pushing changes: 
`git push -u` - this will push your branch to remote

After the branch is pushed to remote, create a new Pull Request. Select source branch: your branch, target branch: dev.

## Releases

Testing environment has all changes from dev branch. To release to production:

1. Create a pull request from dev to master (WARNING: do not check "delete branch")
1. Review the changes
1. Merge the request. New production version should be deployed to production environment via CI/CD pipeline.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

