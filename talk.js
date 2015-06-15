	var date = new Date();			/* 日時に関する情報を取得 */
	var hours = date.getHours();	/* 何時か取得 */

function tbox1(){
	if (hours >= 5 && hours <= 10){
		document.Form.Reply.value = 'おはよう';
	} else if (hours > 10 && hours <= 17){
		document.Form.Reply.value = 'こんにちは';
	} else {
		document.Form.Reply.value = 'こんばんは';
	}
}
