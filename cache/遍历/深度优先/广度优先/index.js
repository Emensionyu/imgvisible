let widthTraversal2 = (node) => {
    let nodes = []
    let stack = []
    if (node) {
      stack.push(node)
      while (stack.length) {
        let item = stack.shift()
        let children = item.children||[]
        nodes.push(item.name)
          // 队列，先进先出
          // nodes = [] stack = [parent]
          // nodes = [parent] stack = [child1,child2,child3]
          // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
          // nodes = [parent,child1,child2]
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i])
        }
      }
    }
    return nodes
  }
  let node = {
    name:'parent',
    children: [
        {
            name:'child1',
            children:[{name:'child1-1'},{name:'child1-2'},],
        },
        {name:'child2'},
        {name:'child3'}
        
    ]
};
console.log(widthTraversal2(node));
