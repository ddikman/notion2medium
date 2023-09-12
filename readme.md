# Notion to Medium Export Tool

This is a tiny tool that allows you to export pages from Notion to Medium. It uses the Notion API to download the page content and generates a Markdown file that can be easily imported into Medium.

## Running

```sh
yarn install
EXPORT NOTION_API_KEY=<apiKey>
EXPORT MEDIUM_API_KEY=<apiKey>
node index.js <pageId>
```

You can also add these environment settings to an `.env` file if you like.

## Image upload

Images will be made available publicly in the markdown exported from Notion and Medium will import these as the HTML is imported.

## Page ID

The notion page id should be the GUID at the end of your page id URL.

For this link:
https://www.notion.so/ddikman/FlutterFlow-A-Practical-Case-Study-Draft-three-cdd31e23ad234218a04c791d220f893e?pvs=4

The page ID to use is: cdd31e23ad234218a04c791d220f893e

You may still get an error message like this:

```shell
Error: [object_not_found] Could not find block with ID: cdd31e23-ad23-4218-a04c-791d220f893e. Make sure the relevant pages and databases are shared with your integration.
```

In which case, as mentioned, tap the `...` on the top right of the page and make sure you add the connection to the page.