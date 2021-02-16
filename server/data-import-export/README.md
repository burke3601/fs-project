# Export/Import script

Uses your `Data` model to export and import the data.

When exporting, creates a JSON string of your data and puts it into a `.json` file.

When importing, loops through JSON array and calls `Data.create`.


## Installation

Add the whole `data-import-export` directory to the root of your `server` folder. 

That means that the `.js` and .`sh` files should be in `fs-project/server/data-import-export`

Commit and push.

## Getting the data from Galileo

On Galileo, do a `git pull` to get the `data-import-export` directory.

`cd` to the `data-import-export` directory and run the `export.sh` script like so:

```sh
bash ./export.sh
```

This will create a new file called `dump.json`.
It should be fairly large.

Add, commit, and push this file.

## Putting the data onto AWS

First, re-initalize the database:

```sh
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
```

`git pull` to get the `data-import-export` scripts and the `dump.json` file.

`cd` to the `data-import-export` directory and run the `import.sh`:

```sh
bash ./import.sh
```

## Recreate your user

Run your `addUser.js` file as you did before.


# If something goes wrong

- Adjust the export and import scripts as necessary.
- export the data from Galileo and push the new `dump.json`
- Re-initialize your database (`db:migrate:undo:all` then `db:migrate`).
- Re-import the data


