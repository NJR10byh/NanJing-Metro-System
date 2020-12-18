/* 迷宫地图 1代表墙壁 0代表通路 */

/* 测试样例 */
// let noRoadMap = [
//   [1, 1, 1, 1],
//   [1, 0, 1, 1],
//   [1, 1, 0, 1],
//   [1, 1, 1, 1],
// ];

// let hasRoadMap = [
//   [1, 1, 1, 1],
//   [1, 0, 0, 1],
//   [1, o, 0, 1],
//   [1, 1, 1, 1],
// ];

/* 地图的边界 */
let mapx = maze.length - 1;
let mapy = maze[0].length - 1;

/* 起点与终点 */
let startx = 1,
  starty = 1;
let endx = 5,
  endy = 5;

class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    /* 方向,1向上，2向右，3向下，4向左 */
    this.dir = 1;
  }
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getDir() {
    return this.dir;
  }

  changeDir() {
    this.dir++;
  }
}

function Stack() {
  this.data = [];
  this.top = 0;

  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.empty = empty;

  /*辅助方法*/
  this.size = size;
}

/*向栈中压入新元素*/
let push = function(element) {
  this.data[this.top++] = element;
};
/*从栈中弹出栈顶元素*/
let pop = function() {
  return this.data[--this.top];
};
/*预览栈顶元素，空栈返回undefined*/
let peek = function() {
  return this.data[this.top - 1];
};

/*获取栈内存储的元素数量*/
let size = function() {
  return this.top;
};

/*判断栈是否空*/
let empty = function() {
  return this.top == 0;
};

let stack = new Stack();

let printStack = function() {
  if (stack.empty()) {
    alert("没有路径！！");
  } else {
    let reverseStack = new Stack();
    while (!stack.empty()) {
      let b = stack.pop();
      reverseStack.push(b);
    }
    while (!reverseStack.empty()) {
      let b = reverseStack.pop();
      console.log("(" + b.getX() + "," + b.getY() + ") ");
      $("#result").append("(" + b.getX() + "," + b.getY() + ") ");
    }
  }
};

let findPath = function() {
  let b = new Block(startx, starty);
  stack.push(b);
  while (!stack.empty()) {
    let t = stack.peek();
    let x = t.getX();
    let y = t.getY();
    let dir = t.getDir();

    maze[x][y] = 1;

    if (x == endx && y == endy) {
      return;
    }

    switch (dir) {
      case 1:
        if (x - 1 >= 0 && maze[x - 1][y] == 0) {
          stack.push(new Block(x - 1, y));
        }
        t.changeDir();
        continue;
      case 2:
        if (y + 1 <= mapy && maze[x][y + 1] == 0) {
          stack.push(new Block(x, y + 1));
        }
        t.changeDir();
        continue;
      case 3:
        if (x + 1 <= mapx && maze[x + 1][y] == 0) {
          stack.push(new Block(x + 1, y));
        }
        t.changeDir();
        continue;
      case 4:
        if (y - 1 >= 0 && maze[x][y - 1] == 0) {
          stack.push(new Block(x, y - 1));
        }
        t.changeDir();
        continue;
    }
    t = stack.pop();
    maze[t.getX()][t.getY()] = 0;
  }
};

findPath();
printStack();
