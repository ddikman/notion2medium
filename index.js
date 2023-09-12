require("dotenv").config();
const NotionAPI = require("./notion-api.js");
const MediumAPI = require("./medium-api.js");
const { markdownToHtml } = require('./markdown-transformer.js');

const pageId = process.argv[2];
const notionAPIKey = process.env.NOTION_API_KEY;
const mediumAPIKey = process.env.MEDIUM_API_KEY;

if (!notionAPIKey || !pageId || !mediumAPIKey) {
  console.error(
    "Please set the NOTION_API_KEY, MEDIUM_API_KEY environment variables in your .env file and provide the page ID as arguments when running the script."
  );
  process.exit(1)
}

const notionAPI = new NotionAPI(notionAPIKey);
const mediumClient = new MediumAPI(mediumAPIKey)

// Retrieve the page content
async function main() {
  const markdownContent = await notionAPI.getPageContent(pageId)
  const htmlContent = markdownToHtml(markdownContent);
  const result = await mediumClient.updatePost('new post', htmlContent);
  console.log(`Medium post updated: ${result.url}`)
}

main();
