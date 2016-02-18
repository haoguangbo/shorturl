function shorten(){
    //调用shorten方法
    $.ajax({
        url: "http://localhost:3000/shorten",
        type: "get",
        data: {
            longurl: $("#long").val(),
            shorturl:""
        }
    }).done(function (data) {
        console.log(data);
        $("#short").text(data.shorturl);
        $("#index").hide();
        $("#result").show();
    }).fail(function () {
        alert("获取信息失败，请稍后再试");
    });
}

function copy(){

}