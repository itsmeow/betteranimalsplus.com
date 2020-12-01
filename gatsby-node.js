exports.onCreateNode = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/wiki",
    toPath: "https://wiki.betteranimalsplus.com/",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/discord",
    toPath: "https://discord.betteranimalsplus.com/",
    isPermanent: true,
  });
};
