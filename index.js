require("dotenv").config();
const NotionAPI = require("./notion-api.js");
const MediumAPI = require("./medium-api.js");

const pageId = process.argv[2];
const mediumPostId = process.argv[3];
const notionAPIKey = process.env.NOTION_API_KEY;
const mediumAPIKey = process.env.MEDIUM_API_KEY;

if (!notionAPIKey || !pageId || !mediumPostId || !mediumAPIKey) {
  console.error(
    "Please set the NOTION_API_KEY, MEDIUM_API_KEY environment variables in your .env file and provide the page ID and Medium post ID as arguments when running the script."
  );
  process.exit(1)
}

const notionAPI = new NotionAPI(notionAPIKey);
const mediumClient = new MediumAPI(mediumAPIKey)


// Retrieve the page content
async function main() {
  const response = await notionAPI.getPageContent(pageId)

  const content = "Updated content = " + response.url
  const result = await mediumClient.updatePost(response.title, content);
  console.log(`Medium post updated: ${result.url}`)
}

main();