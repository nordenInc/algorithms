const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

const recursive = (tree) => {
  let sum = 0;
  tree.forEach((element) => {
    sum += element.v;
    if (!element.c) {
      return element.v;
    }
    sum += recursive(element.c);
  });
  return sum;
};

const iteration = () => {
  if (!tree.length) {
    return 0;
  }
  let sum = 0;
  let stack = [];
  tree.forEach((node) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }
  return sum;
};

console.log(recursive(tree));
console.log(iteration(tree));
