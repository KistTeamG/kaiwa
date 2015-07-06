	var date = new Date();			/* 日時に関する情報を取得 */
	var hours = date.getHours();	/* 何時か取得 */
	var comreply = $("#Reply").val();
	var reply = ["おはよう", "こんにちは", "こんばんは"];	/* 挨拶の配列 */
	var temp = ["暑", "寒"];	/* 暑さの配列 */
	var parting = ["おつかれ", "さようなら", "また"];		/* 別れの配列 */
	var autoReply = ["何してるの？", "学校楽しい？", "元気？"];	/* 自動会話の配列 */
	
/* メインメソッド */
$(function() {
	$("#Reply").prop("disabled", true);
	$("#tbox").click(function() {
		setTimeout('autoTalk()', 10000);	/* 10秒ごとに話しかけてくる */
		comTalk();
	});
});

/* 返答メソッド */
function comTalk(){
	
	if ($("#Talk").val().match(".*\n") || $("#Talk").val().match(".")){
		$("#Reply").val("どうしたの？");
	} else if ($("#Talk").val(null) || $("#Talk").val("\n")){
		$("#Reply").val("なんですか？");
	}
	for (var i = 0; i < reply.length; i++){
		if ($("#Talk").val().match(reply[i])){
			$("#Reply").val(comReply() + "\n");
		}
	}
	for (var i = 0; i < temp.length; i++){
		if ($("#Talk").val().match(temp[i])){
			$("#Reply").val(comTemp() + "\n");
		}
	}
	
	for (var i = 0; i < parting.length; i++){
		if ($("#Talk").val().match(parting[i])){
			$("#Reply").val("またね\n");
			$("#tbox").prop("disabled", true);
			setTimeout('paseClose()', 6000);	/* 6秒後にタグを閉じる */
		}
	}
	$("#Talk").val(null);
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


/* 暑さを判定(ランダム)するメソッド */
function comTemp(){
	
	var temp = Math.floor(Math.random() * 40);
	var tempReply;
	
	if (temp >= 30 && temp <= 40){
		tempReply = '暑いです';
	} else if (temp >= 20 && temp < 30){
		tempReply = 'ちょうど良いです';
	} else {
		tempReply = '寒いです';
	}
	return tempReply;
}

/* 自動で会話を行うメソッド */
function autoTalk(){
	var reply;
	var rand = 0;
	
	if (rand < autoReply.length){
		rand = Math.floor(Math.random() * autoReply.length);
	}
	reply = $("#Reply").val(autoReply[rand]);

	return reply;
}
/* タグを閉じるメソッド */
function paseClose(){
		window.open('about:blank','_self').close();
}