interface PluginItem {
  author?: string;
  homepage?: string;
  manifest: string;
  overrides?: {
    manifest?: { [key: string]: any };
    openapi?: { [key: string]: any };
  };
  path: string;
  tags?: string[];
}
const PluginList: PluginItem[] = [
  {
    manifest:
      'https://www.theforage.cn/aipmhub/chat-plugins/chat-plugin-reseach-paper-search/manifest.json',
    path: 'research_paper_search',
    tags: ['research', 'search'],
  },
  {
    manifest:
      'https://www.theforage.cn/aipmhub/chat-plugins/chat-plugin-serper-google-search/manifest.json',
    path: 'serper_google_search',
    tags: ['web', 'search'],
  },
  {
    manifest:
      'https://www.theforage.cn/aipmhub/chat-plugins/chat-plugin-website-seo-analysis/manifest.json',
    path: 'website_seo_analysis',
    tags: ['seo', 'analysis'],
  },
  {
    manifest:
      'https://www.theforage.cn/aipmhub/chat-plugins/chat-plugin-website-content-scrape/manifest.json',
    path: 'website_content_scrape',
    tags: ['web', 'analysis'],
  },
  {
    manifest:
      'https://www.theforage.cn/aipmhub/chat-plugins/chat-plugin-ai-tools-recommend/manifest.json',
    path: 'ai_tools_recommend',
    tags: ['ai', 'recommendation'],
  },
  {
    manifest:
      'https://www.theforage.cn/aipmhub/chat-plugins/chat-plugin-pm-tools-recommend/manifest.json',
    path: 'pm_tools_recommend',
    tags: ['tool', 'recommendation'],
  },
  {
    manifest:
      'https://www.theforage.cn/aipmhub/chat-plugins/chat-plugin-aipm-secret-gadget-0/manifest.json',
    path: 'aipm_secret_gadget-0',
    tags: ['secret', 'gadgets'],
  },
];

export default PluginList;
