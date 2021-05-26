exports.onCreateNode = ({ actions }) => {
  const { createRedirect } = actions
  const redir = (text) => {
    createRedirect({
      fromPath: "/" + text,
      toPath: `https://${text}.betteranimalsplus.com/`,
    })
  }
  redir("wiki")
  redir("discord")
  redir("trello")
  redir("github")
  redir("download")
}
