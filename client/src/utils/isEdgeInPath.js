function isEdgeInPath(from, to, path=[]) {
  for (let i = 0; i < path.length - 1; i++) {
    if ((path[i] === from && path[i + 1] === to) || (path[i] === to && path[i + 1] === from)) {
      return true;
    }
  }
  return false;
}
export default isEdgeInPath;