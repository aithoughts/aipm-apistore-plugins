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
    manifest: 'https://openai-collections.chat-plugin.lobehub.com/txyz/manifest.json',
    path: 'ResearchAI',
    tags: ['research paper', 'search'],
  },
  {
    manifest: 'https://chat-plugin-apistore.theforage.cn/serper/manifest.json',
    path: 'serper',
    tags: ['web', 'search'],
  },
];

export default PluginList;
