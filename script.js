$(document).ready(function(){
	
	let attempt = document.getElementById('resu');
	var result = 1;
	
	$("#R1c").click(function(){
		result = result + 1;
	});
	$("#R2c").click(function(){
		result = result + 1;
	});
	$("#R3c").click(function(){
		result = result + 1;
	});
	
	$("#R4c").click(function(){
		result = result + 1;
	});
	$("#R5c").click(function(){
		result = result + 1;
	});
	$("#R6c").click(function(){
		result = result + 1;
	});
	
	$("#R7c").click(function(){
		result = result + 1;
	});
	$("#R8c").click(function(){
		result = result + 1;
	});
	$("#R9c").click(function(){
		result = result + 1;
	});
	
	$("#R10c").click(function(){
		result = result + 1;
	});
	$("#R11c").click(function(){
		result = result + 1;
	});
	$("#R12c").click(function(){
		result = result + 1;
		
	});
	$("#R13c").click(function(){
		result = result + 1;
	});
	$("#R14c").click(function(){
		result = result + 1;
	});
	
	$(".R1").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q2").show();
		$("#db").show();		
	});
	
	$(".button_DB").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q3").show();
		$("#kime1").show();
		$("#kime1_2").show();
		$("#kime1_3").show();
		$("#kime1_4").show();		
	});
	
	$(".button_Kime").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q4").show();		
	});
	
	$(".R4").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q5").show();		
	});
	
	$(".button_Fullmetal").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q6").show();
		$("#shingeki").show();		
	});
	
	$(".button_Shingeki").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q7").show();
		$("#one").show();		
	});
	
	$(".button_One").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q8").show();
		$("#one2").show();		
	});
	
	$(".button_One2").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q9").show();		
	});
	
	$(".button_Shingeki2").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q10").show();	
	});
	
	$(".R10").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q11").show();
		$("#shuumatsu").show();		
	});
	
	$(".button_Shuumatsu").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q12").show();
		$("#db2").show();		
	});
	
	$(".button_DB2").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q13").show();
		$("#naruto2").show();		
	});
	
	$(".R13").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q14").show();
		$("#kime2").show();		
	});
	
	$(".button_Kime2").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$("#Q15").show();
		$("#shingeki2").show();		
	});
	
	$(".button_Shingeki3").click(function(){
		$(".quest").hide();
		$(".animation").hide();
		$(".result").show();
		attempt.innerHTML = 'Sua pontuação: ' + result + '/15'
	});
	
});