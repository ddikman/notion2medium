# Notion to Medium Export Tool

This is a tiny tool that allows you to export pages from Notion to Medium. It uses the Notion API to download the page content and generates a Markdown file that can be easily imported into Medium.

## WIP

This is still a work in progress, it doesn't actually upload the content yet, it will only create a new post with he URL of the notion page.

To get the content to upload properly I first need to work out a way to convert it. Secondly, I will need to upload any images that are private to Notion.

## Running

```sh
yarn install
EXPORT NOTION_API_KEY=<apiKey>
EXPORT MEDIUM_API_KEY=<apiKey>
node index.js <pageId>
```