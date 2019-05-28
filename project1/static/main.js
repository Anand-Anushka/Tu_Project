$(document).ready(function(){
	
	var subjectListPage = $(".subject-container");
	var chapterListPage = $(".chapterlist-container");
	var goalListPage = $(".goallist-container");
	var tuListPage = $(".tulist-container");


	function gohome(){
		$(".home").on("click", function(){
			subjectListPage.css("display", "block");
			chapterListPage.css("display", "none");
			goalListPage.css("display", "none");
			tuListPage.css("display", "none");
		});
	}

	function craeteEverything(){
		var subs = JSON.parse($(".subject-container").attr("data-values"));
		// console.log(subs)

		setupSubjectList(subs)
		// setUpGoalPage(subs)
	}

	function setupSubjectList(alldata) {

		// console.log(alldata)

		for (var i = 0; i < Object.keys(alldata).length; i++) {
			
			var subject_data = alldata[Object.keys(alldata)[i]];

			var element = 	$('<div/>', {
				    "class": 'subject',
				    "data-value": JSON.stringify(subject_data.chapter_details)
				}).append(
					$('<div/>', {
					    "class": 'subject-title',
					    html : subject_data["subject_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
					})
				);

			element.on("click", function(){
				setupChapterList($(this));//.attr("data-value"))
			});

			element.appendTo(subjectListPage);
		}

		// console.log($(this).attr("data-value"))
	}

	function setupChapterList(subject_div){

		var subdata = JSON.parse(subject_div.attr("data-value"));

		chapterListPage.html("");

		for(i=0; i<subdata.length; i++){
			var element = 	$('<div/>', {
			    "class": 'chapter',
			    "data-value": JSON.stringify(subdata[i]["goal_details"])
			}).append(
				$('<div/>', {
				    "class": 'chapter-title',
				    html : subdata[i]["chapter_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
				})
			);

			element.on("click", function(){
				setupGoalList($(this));//.attr("data-value"))
			});


			element.appendTo(chapterListPage);
		}

		subjectListPage.css("display", "none");
		chapterListPage.css("display", "block");
	}

	function setupGoalList(chapter_div){

		var goaldata = JSON.parse(chapter_div.attr("data-value"));

		goalListPage.html("");

		for(i=0; i<goaldata.length; i++){
			var element = 	$('<div/>', {
			    "class": 'goal',
			    "data-value": JSON.stringify(goaldata[i]["tu_details"])
			}).append(
				$('<div/>', {
				    "class": 'goal-title',
				    html : goaldata[i]["goal_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
				})
			);


			element.on("click", function(){
				setuptuList($(this));//.attr("data-value"))
			});

			element.appendTo(goalListPage);
		}

		subjectListPage.css("display", "none");
		chapterListPage.css("display", "none");
		goalListPage.css("display", "block");
	}

	function setuptuList(goal_div){

		var tudata = JSON.parse(goal_div.attr("data-value"));

		// console.log(tudata)

		tuListPage.html("");

		for(i=0; i<tudata.length; i++){
			// console.log(tudata[i]["video_details"], tudata[i]["lo_details"])
			// console.log(tudata[i]["lo_details"])
			var element = 	$('<div/>', {
			    "class": 'tu',
			    "data-value": JSON.stringify(tudata[i]["video_details":"lo_details"])
			}).append(
				$('<div/>', {
				    "class": 'tu-title',
				    html : tudata[i]["tu_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
				})
			);
			element.on("click", function(){
				setupVideoList($(this));//.attr("data-value"))
			}); 

			element.appendTo(tuListPage);
		}

		// console.log(JSON.parse($(".tulist-container").attr("data-value")))

		subjectListPage.css("display", "none");
		chapterListPage.css("display", "none");
		goalListPage.css("display", "none");
		tuListPage.css("display", "block");
	}	

	function setupVideoList(tu_div){

		var vldata = JSON.parse(tu_div.attr("data-value"));
		console.log(vldata)


	}




	craeteEverything();
	gohome();
});