function fizzBuzzTree(tree){
  function preOrder(root){
    if(!root) return;

    if(root.data % 15 === 0){
      root.data = 'fizzbuzz';
    }else if(root.data % 3 === 0){
      root.data ='fizz';
    }else if(root.data % 5 === 0){
      root.data = 'buzz';
    }

    if (root.left) {
      preOrder(root.left);
    }
    if(root.right) {
      preOrder(root.right);
    }
  }
  if(!tree){
    throw 'nothing here';
  }
  preOrder(tree.root);
  return tree;
}

module.exports = fizzBuzzTree;
