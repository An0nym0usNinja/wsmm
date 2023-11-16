## Will Scott Mobile Mini

## Requirements
node v21^
npm v10^

## Node version manager
If you have node version manager (nvm) installed, there's no need for the above requirements.
Just run the following:
1. nvm install 18
2. nvm use 18

## Commands
npm install
node migrate.js

## Add new migration
1. Add migration file to migrations/
2. Increment the migration prefix in the migration file's name
3. Add filename to const files in the migrate.js