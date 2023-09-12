const { Client, APIResponseError } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

class NotionAPI {
  constructor(apiKey) {
    this.notion = new Client({ auth: apiKey });
    this.markdownClient = new NotionToMarkdown({
      notionClient: this.notion,
      config: {
        parseChildPages: false
      }
    });
  }

  async getPageContent(pageId) {
    try {
        const markdownBlocks = await this.markdownClient.pageToMarkdown(pageId)
        return this.markdownClient.toMarkdownString(markdownBlocks).parent;
    } catch (error) {
      if (error instanceof APIResponseError) {
        const body = JSON.parse(error.body);
        throw new Error(`[${body.code}] ${body.message}`);
      }
      throw error
    }
  }
}

module.exports = NotionAPI;