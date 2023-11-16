"use strict";

require("dotenv").config();

const { runMigration } = require("contentful-migration");

// uses options
const options = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
  environmentId: process.env.ENVIRONMENT,
  yes: true,
};

// files to migrate
const files = [
  // WARNING: These will delete ALL entries, assets and content types in the space
  // Do not run these unless you know what you are doing
  `01-drop-entries.js`,
  `02-drop-assets.js`,
  `03-drop-content-types.js`,

  // Create content types
  `04-create-product-section.js`,
]

// run all migrations one after the other - skips to the next if error occurs
const migrations = async () => {

  for (const file of files) {
    try {
      await runMigration({
        ...options,
        ... {
          filePath: `${__dirname}/migrations/${file}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  process.exit(0);
};

try {
  migrations();
} catch (error) {
  console.log(error);
  process.exit(1);
}