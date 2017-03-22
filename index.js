function getFirstSelector(selector){
  const find = document.querySelector(selector)
  return find
}

function nestedTarget(){
  const find = document.querySelector("div#nested div.target")
  return find
}

function deepestChild(){
  let parent = document.querySelector("div#grand-node")
  let next = parent.children[0]
  // debugger
  while (next) {
    parent = next
    next = parent.children[0]
  }

  return parent
}

function increaseRankBy(n){
  let parent = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = parent.length; i < l; i++) {
    let children = parent[i].children

    for (let p = 0, k = children.length; p < k; p++) {
      children[p].innerHTML = parseInt(children[p].innerHTML) + n
    }
  }
}
