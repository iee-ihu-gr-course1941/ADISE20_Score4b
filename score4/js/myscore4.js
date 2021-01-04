$(function () {
	draw_empty_board();


});


function draw_empty_board() {
	var t='<table id="chess_table">';
	for(var i=6;i>0;i--) {
		t += '<tr>';
		t += '<td class="line_label">'+i+'</td>';
		for(var j=1;j<9;j++) {
			t += '<td class="chess_square" id="square_'+j+'_'+i+'">' + j +','+i+'</td>'; 
		}
		t+='</tr>';
	}
	t += '<tr><td class="column_label line_label"></td>';
	for(var j=1;j<9;j++) {
		t += '<td class="column_label">'+j+'</td>';
	}
	t+='</tr>';
	t+='</table>';
	
	$('#chess_board').html(t);
}


