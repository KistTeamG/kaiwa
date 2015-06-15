	var date = new Date();			/* 日時に関する情報を取得 */
	var hours = date.getHours();	/* 何時か取得 */
	var comreply = document.Form.Talk.value;
	var Goodmorning = 'おはようございます';
	var Hello = 'こんにちは';
	var Goodafternoon = 'こんばんは';
	var reply;
	
/* メインメソッド */
function tbox1(){
	
	if (comreply == Goodmorning || comreply == Hello || comreply == Goodafternoon){
		reply = comReply();		/* 正しい挨拶なら正しい返答 */
	}
}


/* 挨拶を判定するメソッド */
function comReply(){
	
	if (hours >= 5 && hours <= 10){
		document.Form.Reply.value = 'おはようございます';
	} else if (hours >= 11 && hours <= 17){
		document.Form.Reply.value = 'こんにちは';
	} else {
		document.Form.Reply.value = 'こんばんは';
	}
	
}