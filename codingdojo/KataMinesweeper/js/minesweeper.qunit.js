module("Minesweeper");

test("Output an empty field", function(){
	deepEqual(generateEmptyField(0,0),[],"Result should be an empty field");
});

test("Output an empty field", function(){
	deepEqual(generateEmptyField(1,0),[],"Result should be an empty field");
});

test("Output an 4x4 array with value is 0", function(){
	deepEqual(generateEmptyField(4,4),[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"Result should be an 4x4 array with value is 0");
});

test("Output an 4x4 array with (0,0) value is '*'", function(){
	deepEqual(generateMines(4,4,[{x:0,y:0}]),[['*',0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"Result should be an 4x4 array with (0,0) value is '*'");
});

test("Output an 3x5 array with (0,1),(2,4) value is '*'", function(){
	deepEqual(generateMines(3,5,[{x:0,y:1},{x:2,y:4}]),[[0,'*',0,0,0],[0,0,0,0,0],[0,0,0,0,'*']],"Result should be an 4x4 array with (0,1),(2,4) value is '*'");
});

test("Output an 3x5 array with (1,2),(5,3) value is '*'", function(){
	deepEqual(generateMines(3,5,[{x:1,y:2},{x:5,y:3}]),[[0,0,0,0,0],[0,0,'*',0,0],[0,0,0,0,0]],"Result should be an 4x4 array with (1,2),(5,3) value is '*'");
});

/*test("Output a square with value is 0 ", function(){
	deepEqual(calculateMinesAroundOneSquare([{x:1,y:1}], []),"Result should be ");
});*/

test("Output an 3x5 array with value is 0", function(){
	deepEqual(generateMineSweeper(3,5,[]),[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],"Result should be an 3x5 array with value [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]");
});

test("Output an 3x5 array with (1,1) value is '*'", function(){
	deepEqual(generateMineSweeper(3,5,[{x:1,y:1}]),[[1,1,1,0,0],[1,'*',1,0,0],[1,1,1,0,0]],"Result should be an 3x5 array with (1,1) value [{x:1,y:1}]),[[1,1,1,0,0],[1,'*',1,0,0],[1,1,1,0,0]]");
});

test("Output an 3x5 array with (1,2),(2,4) value is '*'", function(){
	deepEqual(generateMineSweeper(3,5,[{x:1,y:2}, {x:2,y:4}]),[[0,1,1,1,0],[0,1,'*',2,1],[0,1,1,2,'*']],"Result should be an 3x5 array with (1,1) value [{x:1,y:2},{x:2,y:4}]),[[0,1,1,1,0],[0,1,'*',2,1],[0,1,1,2,'*']]");
});

test("Output an 3x5 array with (0,0),(3,5) value is '*'", function(){
	deepEqual(generateMineSweeper(3,5,[{x:0,y:0}, {x:3,y:5}]),[['*',1,0,0,0],[1,1,0,0,0],[0,0,0,0,0]],"Result should be an 3x5 array with (0,0),(3,5) value [['*',1,0,0,0],[1,1,0,0,0],[0,0,0,0,0]");
});