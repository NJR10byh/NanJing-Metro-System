var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 550;
document.body.append(canvas);

mapInit();

function mapInit() {
  createMap(SIZE);
  maze[5][5] = 0;
  breakWall(Point(5, 5));
  reDraw();
}
function createMap(size) {
  for (var i = 0; i < size; i++) {
    maze[i] = new Array();
    for (var j = 0; j < size; j++) {
      maze[i][j] = 1;
    }
  }
}

function breakWall(digger) {
  var dirs = [DIR_RIGHT, DIR_DOWN, DIR_LEFT, DIR_UP];
  dirs.sort(randomsort);
  var isNoWay = true;
  for (var i = 0; i < dirs.length; i++) {
    if (
      dirs[i] == DIR_RIGHT &&
      digger.x + 2 < maze[0].length &&
      maze[digger.x + 2][digger.y]
    ) {
      maze[digger.x + 1][digger.y] = 0;
      maze[digger.x + 2][digger.y] = 0;
      isNoWay = false;
      breakWall(Point(digger.x + 2, digger.y));
    } else if (
      dirs[i] == DIR_DOWN &&
      digger.y + 2 < maze.length &&
      maze[digger.x][digger.y + 2]
    ) {
      maze[digger.x][digger.y + 1] = 0;
      maze[digger.x][digger.y + 2] = 0;
      isNoWay = false;
      breakWall(Point(digger.x, digger.y + 2));
    } else if (
      dirs[i] == DIR_LEFT &&
      digger.x - 2 > 0 &&
      maze[digger.x - 2][digger.y]
    ) {
      maze[digger.x - 1][digger.y] = 0;
      maze[digger.x - 2][digger.y] = 0;
      isNoWay = false;
      breakWall(Point(digger.x - 2, digger.y));
    } else if (
      dirs[i] == DIR_UP &&
      digger.y - 2 > 0 &&
      maze[digger.x][digger.y - 2]
    ) {
      maze[digger.x][digger.y - 1] = 0;
      maze[digger.x][digger.y - 2] = 0;
      isNoWay = false;
      breakWall(Point(digger.x, digger.y - 2));
    }
  }
  if (isNoWay) return;
}

function reDraw() {
  context.clearRect(
    0,
    0,
    maze.length * BLOCK_SIZE,
    maze[0].length * BLOCK_SIZE
  );
  for (var i in maze) {
    for (var j in maze[i]) {
      if (maze[i][j] == 1) {
        context.fillRect(
          j * BLOCK_SIZE,
          i * BLOCK_SIZE,
          BLOCK_SIZE,
          BLOCK_SIZE
        );
      }
    }
  }
}

function randomsort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}
