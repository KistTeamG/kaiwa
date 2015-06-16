	var date = new Date();			/* 日時に関する情報を取得 */
	var hours = date.getHours();	/* 何時か取得 */
	var comreply = document.Form.Talk.value;
	var Goodmorning = 'おはようございます';
	var Hello = 'こんにちは';
	var Goodafternoon = 'こんばんは';
	
/* メインメソッド */
function tbox1(){
	
	document.Form.target = "_self";		/* そのページのまま表示 */
	
	if (document.Form.Talk.value =~ "おはよう" || document.Form.Talk.value =~ "こんにちは" || document.Form.Talk.value =~ "こんばんは"){
		document.Form.Reply.value = comReply();
		document.Form.Talk.value = null;
	} else if (comreply == null){
		document.Form.Reply.value = null;
	}
}


/* 挨拶を判定するメソッド */
function comReply(){
	var reply;
	
	if (hours >= 5 && hours <= 10){
		reply = 'おはようございます';
	} else if (hours >= 11 && hours <= 17){
		reply = 'こんにちは';
	} else {
		reply = 'こんばんは';
	}
	
	return reply;
}