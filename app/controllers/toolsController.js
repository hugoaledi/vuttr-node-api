module.exports = {
    async index(req, res) {
      const { tag } = req.query;
  
      const tools = [
        {
          id: 1, // ou qualquer outro identificador
          title: "Notion",
          link: "https://notion.so",
          description:
            "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
          tags: [
            "organization",
            "planning",
            "collaboration",
            "writing",
            "calendar",
          ],
        },
        {
          id: 2,
          title: "json-server",
          link: "https://github.com/typicode/json-server",
          description:
            "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
          tags: ["api", "json", "schema", "node", "github", "rest"],
        },
        {
          id: 3,
          title: "fastify",
          link: "https://www.fastify.io/",
          description:
            "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
          tags: ["web", "framework", "node", "http2", "https", "localhost"],
        },
      ];
  
      if (tag !== undefined && tag.length > 0) {
        const filteredTools = tools.filter((x) => x.tags.indexOf(tag) > -1);
  
        return res.json(filteredTools);
      }
  
      return res.json(tools);
    },
  
    async create(req, res) {
      const tool = req.body;
  
      return res.json(tool);
    },
  };
  