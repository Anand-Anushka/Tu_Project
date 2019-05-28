$(document).ready(function(){
	
	var subjects = $(".subjectlist");
	var subjectListPage = $(".subject-container");

	var chapters = $(".chapterlist");
	var chapterListPage = $(".chapterlist-container");

	var goalListPage = $(".goallist-container");
	var tuListPage = $(".tulist-container");
	var video_qListPage = $(".video_qlist-container");


	function gohome(){
		$(".home").on("click", function(){
			subjects.css("display", "block");
			chapters.css("display", "none");
			goalListPage.css("display", "none");
			tuListPage.css("display", "none");
			video_qListPage.css("display","none")
		});
	}

	function craeteEverything(){
		var subs = JSON.parse($(".subject-container").attr("data-values"));
		console.log(subs);

		setupSubjectList(subs);
		// setUpGoalPage(subs)
	}

	function setupSubjectList(alldata) {

		subjectListPage.html("");

		for (var i = 0; i < Object.keys(alldata).length; i++) {
			
			var subject_data = alldata[Object.keys(alldata)[i]];

			var element = 	$('<div/>', {
				    "class": 'subject all-hover',
				    "data-value": JSON.stringify(subject_data.chapter_details)
				}).append(
					$('<div/>', {
					    "class": 'subject-title all-titles',
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
			    "class": 'chapter all-hover',
			    "data-value": JSON.stringify(subdata[i]["goal_details"])
			}).append(
				$('<div/>', {
				    "class": 'chapter-title all-titles',
				    html : subdata[i]["chapter_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
				})
			);

			element.on("click", function(){
				setupGoalList($(this));//.attr("data-value"))
			});


			element.appendTo(chapterListPage);
		}

		subjects.css("display", "none");
		chapters.css("display", "block");
	}

	function setupGoalList(chapter_div){
		var goaldata = JSON.parse(chapter_div.attr("data-value"));
		for(var i = 0; i < goaldata.length; i++){
			var element = 	$('<div/>', {
			    "class": 'goal',
			    "data-value": JSON.stringify(goaldata[i]["tu_details"])
			}).append(
				$('<div/>', {
				    "class": 'goal-title all-titles',
				    html :  "<span class='goal-index'> Goal "+(i+1)+"</span>" + "<span class='goal-name'>" + goaldata[i]["goal_name"]+"</span>"
				})
			).append(
				$('<div/>', {
				    "class": 'question-list-container',
				    html: "<div class='container-title'>Questions</div>"
				})
			);

			element.appendTo(goalListPage);
			setuptuList(element);
		}
		subjects.css("display", "none");
		chapters.css("display", "none");
		goalListPage.css("display", "block");
	}

	function setuptuList(goal_div){

		var tudata = JSON.parse(goal_div.attr("data-value"));
		tuListPage.html("");

		for(var i = 0; i<tudata.length; i++){

			var element = 	$('<div/>', {
			    "class": 'tu',
			    "data-value": JSON.stringify(tudata[i])
			}).append(
				$('<div/>', {
				    "class": 'tu-title',
				    html :  "<span class='tu-index'> TU "+(i+1)+"</span>" + "<span class='tu-name'>" + tudata[i]["tu_name"]+"</span>", //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
				})
			).append(
				$('<div/>', {
				    "class": 'video-list-container'
				})
			);

			element.appendTo(goal_div);
		}

		setupVideoList(goal_div);

		subjects.css("display", "none");
		chapters.css("display", "none");
		goalListPage.css("display", "block");
		tuListPage.css("display", "block");
	}	

	function setupVideoList(goal_div){

		var vldata = JSON.parse(goal_div.find(".tu").attr("data-value"));
		// console.log(vldata["video_details"].length)

		video_qListPage.html("");
		for(var i=0; i < vldata["video_details"].length; i++){

			video_id = YouTubeGetID(vldata["video_details"][i]["video_link"])
			var element = 	$('<div/>', {
			    "class": 'video-box',
			})

			element.append($('<img/>',{
				"class": 'video-thumbnail',
				"src" : 'https://img.youtube.com/vi/'+ video_id +'/hqdefault.jpg',
			}))

			element.append($('<a/>',{
				"class": 'video-title',
				href: vldata["video_details"][i]["video_link"],
				target: "_blank",
				html: vldata["video_details"][i]["video_name"]

			}))

			element.appendTo(goal_div.find(".video-list-container"));
		}

		for(var i=0; i < vldata["lo_details"].length; i++){

			var element2 = $('<div/>', {
			    "class": 'questions',
			    html : "<span class='lo-index'> LO"+(i+1)+"</span>"
			}).append(
				$("<a>", {
					href : vldata["lo_details"][i]["lo_q_link"],
					class : "lo-name",
					html : vldata["lo_details"][i]["lo_name"],
					target : "_blank"
				})
			);
			element2.appendTo(goal_div.find(".question-list-container"));
		}


		subjects.css("display", "none");
		chapters.css("display", "none");
		goalListPage.css("display", "block");
		tuListPage.css("display", "none");
		video_qListPage.css("display","block")
	}

	function YouTubeGetID(url){
  		var ID = '';
  		url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  		if(url[2] !== undefined) {
    		ID = url[2].split(/[^0-9a-z_\-]/i);
    		ID = ID[0];
  		}
  		else {
    		ID = url;
  		}
    	return ID;
	}

	craeteEverything();
	gohome();
});