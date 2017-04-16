$(document).ready(function() {
	var currentYear = (new Date).getFullYear();
	var avgLife = 78, avgDay = avgLife*365, avgMonth = avgLife*12, avgWeek = avgLife *52;
	var yearBorn, age, remainder, ageMonth, ageWeek, ageDay;

	$("#go").click(function(event){
		event.preventDefault();
		yearBorn = $(".what-year").val();
		age = currentYear - yearBorn;
		remainder = avgLife - age;
		ageMonth = age*12;
		ageWeek = age*52;
		ageDay = age*365;

		//console.log("Born in "+yearBorn,"You are "+age);

		//life chart loop
		lifeYears();
		christmas();
		elections();
		books();
		parents();

	});

	$(".unit-of-time a").click(function(event){
		event.preventDefault();
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

	// secondary charts
	function christmas(){
		var christmasChartContent = '';
		for (var x=0;x<age;x++) {
			christmasChartContent += '<div class="unit square christmas"></div>'
		}
		$(".christmas-chart").html(christmasChartContent);

		var christmasChartRemainder = '';
		for (var x=0;x<avgLife-age;x++) {
			christmasChartRemainder += '<div class="unit square gray christmas"></div>';
		}
		$(".christmas-chart").append(christmasChartRemainder);
		$(".christmas-left").html(remainder + " Christmases left");
	}

	function elections(){
		var electionsChartContent = '';
		for (var x=0;x<(avgLife-age)/4;x++) {
			electionsChartContent += '<div class="unit square elections"></div>'
		}
		$(".elections-chart").html(electionsChartContent);

		var electionsChartRemainder = '';
		for (var x=0;x<(avgLife-age)/4;x++) {
			electionsChartRemainder += '<div class="unit square gray elections"></div>';
		}
		$(".elections-chart").append(electionsChartRemainder);
		$(".elections-left").html((avgLife-age)/4 + " Elections left");
	}

	function books(){
		var booksChartContent = '';
		for (var x=0;x<(avgLife-age)*4;x++) {
			booksChartContent += '<div class="unit square books small"></div>'
		}
		$(".books-chart").html(booksChartContent);

		var booksChartRemainder = '';
		for (var x=0;x<(avgLife-age)*4;x++) {
			booksChartRemainder += '<div class="unit square gray books small"></div>';
		}
		$(".books-chart").append(booksChartRemainder);
		$(".books-left").html((avgLife-age)*4 + " books left");
	}

	function parents(){
		var parentsChartContent = '';
		for (var x=0;x<((age-18)+(365*18));x++) {
			parentsChartContent += '<div class="unit square parents micro"></div>'
		}
		$(".parents-chart").html(parentsChartContent);

		var parentsChartRemainder = '';
		for (var x=0;x<(avgLife-(age+25))*2;x++) {
			parentsChartRemainder += '<div class="unit square gray parents micro"></div>';
		}
		$(".parents-chart").append(parentsChartRemainder);
		$(".parents-left").html((avgLife-(age+25))*2 + " remaining trips to visit your parents before they die.");
	}


});