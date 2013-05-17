function generateEmptyField (row ,col) {	
	var result = [];
	if(row==0||col==0)
		return result;
	for (var r = 0; r<row; r++){
		var rows = [];
		for(var c=0; c<col; c++){
			rows.push(0);
		}
		result.push(rows);
	}
	return result;
}

function generateMines(row, col, mines){
	var field = generateEmptyField(row,col);
	for(var r = 0; r < field.length; r++){
		for(var c = r; c<col; c++){
			for(var i = 0;i<mines.length;i++){
				if(mines[i].x===r&&mines[i].y===c)
					field[r][c] = '*';
			}
		}
	}
	return field;
}

function generateMineSweeper(row, col, mines){
	var field = generateMines(row, col, mines);
	for(var mine = 0; mine < mines.length; mine++){
		if(mines[mine].x >= 0 && mines[mine].x < row 
			&& mines[mine].y >= 0 && mines[mine].y < col){
			for(var l = mines[mine].x - 1 <= 0 ? 0 : mines[mine].x - 1; (l <= mines[mine].x + 1 && l < row ); l++){
				for(var c = mines[mine].y - 1 <= 0 ? 0 : mines[mine].y - 1; (c <= mines[mine].y + 1 && c < col); c++){
					if(!(l === mines[mine].x && c === mines[mine].y)){
						field[l][c] += 1;
					}
				}
			}	
		}
	}
	
	return field;
}