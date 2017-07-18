$(function(){
	$("#t_ding_1").css("font-size","30px").css("color","white").css("margin-top","auto");
	$("#t_ding_2").css("font-size","20px").css("color","white").css("margin-left","20px");
	var t = true;
	$("#t_zuo_dong1").click(function(){
			if(t){
				$("#t_img").css("transform","rotate(90deg)");
				$("#t_zuo_chang1").show();
				$("#t_zuo_chang2").css("display","none");
			    $("#t_zuo_chang3").css("display","none");
			    $("#t_zuo_chang4").css("display","none");
			    $("#t_zuo_chang0").css("display","none");
				t = !t;
			}else{
				$("#t_img").css("transform","rotate(0deg)");
				$("#t_zuo_chang1").hide();
				$("#t_zuo_chang2").css("display","none");
		     	$("#t_zuo_chang3").css("display","none");
			    $("#t_zuo_chang4").css("display","none");
			    $("#t_zuo_chang0").css("display","none");
				t = !t;
			}	
	})
	
	
	$("#t_zuo_dong2").click(function(){
		$("#t_zuo_chang2").css("display","block");
			if(t){
				$("#t_img2").css("transform","rotate(90deg)");
				$("#t_zuo_chang1").css("display","none");
			    $("#t_zuo_chang3").css("display","none");
			    $("#t_zuo_chang4").css("display","none");
		     	$("#t_zuo_chang0").css("display","none");
				t = !t;
			}else{
				$("#t_img2").css("transform","rotate(0deg)");
				$("#t_zuo_chang2").hide();
				$("#t_zuo_chang1").css("display","none");
			    $("#t_zuo_chang3").css("display","none");
			    $("#t_zuo_chang4").css("display","none");
			    $("#t_zuo_chang0").css("display","none");
				t = !t;
			}
	})
	
	
	$("#t_zuo_dong3").click(function(){
			if(t){
				$("#t_img3").css("transform","rotate(90deg)");
				$("#t_zuo_chang3").show();
				$("#t_zuo_chang1").css("display","none");
			    $("#t_zuo_chang2").css("display","none");
			    $("#t_zuo_chang4").css("display","none");
			    $("#t_zuo_chang0").css("display","none");
				t = !t;
			}else{
				$("#t_img3").css("transform","rotate(0deg)");
				$("#t_zuo_chang3").hide();
				$("#t_zuo_chang1").css("display","none");
			    $("#t_zuo_chang2").css("display","none");
			    $("#t_zuo_chang4").css("display","none");
			    $("#t_zuo_chang0").css("display","none");
				t = !t;
			}
	})
	
	
	$("#t_zuo_dong4").click(function(){
			if(t){
				$("#t_img4").css("transform","rotate(90deg)");
				$("#t_zuo_chang4").show();
			    $("#t_zuo_chang1").css("display","none");
			    $("#t_zuo_chang3").css("display","none");
			    $("#t_zuo_chang2").css("display","none");
			    $("#t_zuo_chang0").css("display","none");				
				t = !t;
			}else{
				$("#t_img4").css("transform","rotate(0deg)");
				$("#t_zuo_chang4").hide();
			    $("#t_zuo_chang1").css("display","none");
			    $("#t_zuo_chang3").css("display","none");
			    $("#t_zuo_chang2").css("display","none");
			    $("#t_zuo_chang0").css("display","none");				
				t = !t;
			}
	})
	
	
	$("#zhuce").click(function(){
		$(".zcjiemian").css("display","block");
	})
	$("#t_tc").click(function(){
		  if(true){
		  	return false;
		  }
	})
	
	


	
	
	
	//首页
	$("#t_zuo_1shou").click(function(){
		$(".t_xia").css("display","none");
	})
	
	
	
	//人员管理
	
	$(".t_jiben").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
		$(".t_xiaaaa").css("display","block");
		$(".t_xinxichaxun").css("background-color","white").css("color","#000000");
		$(".t_moxinguanli").css("background-color","white").css("color","#000000");
		$(".t_xitong").css("background-color","white").css("color","#000000");
		$(".t_wangzhan").css("background-color","white").css("color","#000000");
	})
	
	$(".t_xinxichaxun").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","block");
		$(".t_xiaaaa").css("display","none");
		$(".t_jiben").css("background-color","white").css("color","#000000");
		$(".t_moxinguanli").css("background-color","white").css("color","#000000");
		$(".t_xitong").css("background-color","white").css("color","#000000");
		$(".t_wangzhan").css("background-color","white").css("color","#000000");
	})
	
	$(".t_moxinguanli").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
		$(".t_jiben").css("background-color","white").css("color","#000000");
		$(".t_xinxichaxun").css("background-color","white").css("color","#000000");
		$(".t_xitong").css("background-color","white").css("color","#000000");
		$(".t_wangzhan").css("background-color","white").css("color","#000000");
	})
   
   $(".t_xitong").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
		$(".t_jiben").css("background-color","white").css("color","#000000");
		$(".t_moxinguanli").css("background-color","white").css("color","#000000");
		$(".t_xinxichaxun").css("background-color","white").css("color","#000000");
		$(".t_wangzhan").css("background-color","white").css("color","#000000");
	})
   
   $(".t_wangzhan").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
		$(".t_jiben").css("background-color","white").css("color","#000000");
		$(".t_moxinguanli").css("background-color","white").css("color","#000000");
		$(".t_xitong").css("background-color","white").css("color","#000000");
		$(".t_xinxichaxun").css("background-color","white").css("color","#000000");
	})
   
   //配置
   $(".t_pizhi1").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
	})
   $(".t_pizhi2").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
	})
   $(".t_pizhi3").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
	})
   $(".t_pizhi4").click(function(){
		$(this).css("background-color","burlywood").css("color","blue");
		$(".t_xia").css("display","none");
	})
   
   
   //表格
   var   cuowu = 0;
   $.get("http://192.168.2.40/webWork/selData.php",function(res){
   		 var data =res;	
		for(var j=0;j<data.length;j++){
			
			var tds="<td><input type='checkbox' name='xuan' class='xuan'/></td>";
			for(var i in data[j]){
				if(data[j][i]=="紧急"){
					tds+="<td style='color:red;'>"+data[j][i]+"</td>";
				}else{
					tds+="<td>"+data[j][i]+"</td>";
				}
			}
			tds+="<td><button class='bianji'>添加</button><button class='shanchu'>删除</button><button class='fuzhi'>复制</button</td>";
			$("table").append("<tr>"+tds+"</tr>");
		}
		$("table").css("text-align","center");
		$(".bianji").dblclick(function(){
			
			alert("aa");
		})
		$(".shanchu").click(function(){
			alert("aa");
		})
		$(".fuzhi").click(function(){
			alert("aa");
		})
   },"json");
   
   $.get("mingku/zhuce.html",function(res){
   		var data =res;	
		for(var j=0;j<data.length;j++){
			
			var tds="<td><input type='checkbox' name='xuan' class='xuan'/></td>";
			for(var i in data[j]){
				if(data[j][i]=="紧急"){
					tds+="<td style='color:red;'>"+data[j][i]+"</td>";
				}else{
					tds+="<td>"+data[j][i]+"</td>";
				}
			}
			tds+="<td><button class='tianjia'>添加</button><button class='shanchu'>删除</button><button class='fuzhi'>复制</button</td>";
			$("table").append("<tr>"+tds+"</tr>");
		}
		$("table").css("text-align","center");
   },"json");
})	















