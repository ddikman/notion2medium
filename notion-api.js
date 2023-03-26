const { Client, APIResponseError } = require("@notionhq/client");

class NotionAPI {
  constructor(apiKey) {
    this.notion = new Client({ auth: apiKey });
  }

  async getPageContent(pageId) {
    try {
      const page = await this.notion.pages.retrieve({page_id: pageId, children: true})
      const allBlocks = []
      let nextCursor
      do {
        const blocks = await this.notion.blocks.children.list({block_id: pageId, start_cursor: nextCursor})
        allBlocks.push(...blocks.results)
        nextCursor = blocks.next_cursor
      } while(nextCursor)
      
      return {
        url: page.url,
        title: page.properties.title.title[0].plain_text,
        contents: allBlocks.length
      }
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