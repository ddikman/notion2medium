# Notion to Medium Export Tool

This is a tiny tool that allows you to export pages from Notion to Medium. It uses the Notion API to download the page content and generates a Markdown file that can be easily imported into Medium.

## WIP

This is still a work in progress, it doesn't actually upload the content yet.

## Running

```sh
yarn install
EXPORT NOTION_API_KEY=<apiKey>
EXPORT MEDIUM_API_KEY=<apiKey>
node index.js <pageId>
```