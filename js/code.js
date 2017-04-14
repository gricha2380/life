$(document).ready(function() {
	var currentYear = (new Date).getFullYear();
	var avgLife = 78, avgDay = avgLife*365, avgMonth = avgLife*12, avgWeek = avgLife *52;
	var yearBorn, age, remainder, ageMonth, ageWeek, ageDay;

	$("#go").click(function(){
		yearBorn = $(".what-year").val();
		age = currentYear - yearBorn;
		remainder = avgLife - age;
		ageMonth = age*12;
		ageWeek = age*52;
		ageDay = age*365;

		//console.log("Born in "+yearBorn,"You are "+age);

		//life chart loop
		lifeYears();

	});

	$(".unit-of-time a").click(function(){
		$(".unit-of-time a").removeClass("active");
		$(this).addClass("active");
		if($(this).hasClass("months")) {
			lifeMonths();
			console.log(ageMonth+" age in months");
			console.log(avgMonth-ageMonth+" avg month minus age month");
		} else if ($(this).hasClass("years")){
			lifeYears();
		} else if ($(this).hasClass("weeks")) {
			lifeWeeks();
		} else if ($(this).hasClass("days")) {
			lifeDays();
		}
	});

	function lifeYears(){
		var lifeChartContent = '';
		for (var x=0;x<age;x++) {
			lifeChartContent += '<div class="unit square"></div>'
		}
		$(".life-chart").html(lifeChartContent);

		var lifeChartRemainder = '';
		for (var x=0;x<avgLife-age;x++) {
			lifeChartRemainder += '<div class="unit square gray"></div>';
		}
		$(".life-chart").append(lifeChartRemainder);
		$(".years-left").html(remainder + " years left");
	}

	function lifeMonths(){
		var lifeChartContent = '';
		for (var x=0;x<ageMonth;x++) {
			lifeChartContent += '<div class="unit square small"></div>';
		}
		$(".life-chart").html(lifeChartContent);

		var lifeChartRemainder = '';
		for (var x=0;x<avgMonth-ageMonth;x++) {
			lifeChartRemainder += '<div class="unit square gray small"></div>';
		}
		$(".life-chart").append(lifeChartRemainder);
		$(".years-left").html(avgMonth-ageMonth + " months left");
	}

	function lifeWeeks(){
		var lifeChartContent = '';
		for (var x=0;x<ageWeek;x++) {
			lifeChartContent += '<div class="unit square small"></div>';
		}
		$(".life-chart").html(lifeChartContent);

		var lifeChartRemainder = '';
		for (var x=0;x<avgWeek-ageWeek;x++) {
			lifeChartRemainder += '<div class="unit square gray small"></div>';
		}
		$(".life-chart").append(lifeChartRemainder);
		$(".years-left").html(avgWeek-ageWeek + " weeks left");
	}

	function lifeDays(){
		var lifeChartContent = '';
		for (var x=0;x<ageDay;x++) {
			lifeChartContent += '<div class="unit square micro"></div>';
		}
		$(".life-chart").html(lifeChartContent);

		var lifeChartRemainder = '';
		for (var x=0;x<avgDay-ageDay;x++) {
			lifeChartRemainder += '<div class="unit square gray micro"></div>';
		}
		$(".life-chart").append(lifeChartRemainder);
		$(".years-left").html(avgDay-ageDay + " days left");
	}
});