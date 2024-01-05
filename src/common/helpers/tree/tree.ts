export function buildTree(nodes: any[], parentId = null) {
  const tree = [];
  for (const node of nodes) {
    const copy = { ...node };
    if (node.parentCategoryId === parentId) {
      const children = buildTree(nodes, node._id);
      if (children.length) {
        copy.children = children;
      }
      tree.push(copy);
    }
  }
  return tree;
}
