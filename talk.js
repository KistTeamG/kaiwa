	var date = new Date();			/* 日時に関する情報を取得 */
	var hours = date.getHours();	/* 何時か取得 */
	var comreply = $("#Reply").val();
	
/* メインメソッド */
$(function() {
	$("#tbox").click(function() {
		if ($("#Talk").val().match("おはよう") || $("#Talk").val().match("こんにちは")|| $("#Talk").val().match("こんばんは")){
			$("#Reply").val(comReply() + "\n")/* + Temperature()*/;
		} else if (comreply == null || comreply == "\n"){
			$("#Reply").val("なんですか？");
		}
		$("#Talk").val(null);
	});
});

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

/* 気温に関するメソッド */
function Temperature(){
	uri = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=170010';	/* 金沢の天気情報を取得 */
	
	var temperature = forecasts.temp;
	var tempReply;
	
	if (temperature >= 26 || temperature <= 40){
		tempReply = '暑い';
	}
	return tempReply;
}