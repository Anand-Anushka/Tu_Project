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
		console.log(subs)

		setupSubjectList(subs)
		// setUpGoalPage(subs)
	}

	function setupSubjectList(alldata) {

		subjectListPage.html("")
		// console.log(alldata)

		for (var i = 0; i < Object.keys(alldata).length; i++) {
			
			var subject_data = alldata[Object.keys(alldata)[i]];

			var element = 	$('<div/>', {
				    "class": 'subject all-hover',
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
			    "class": 'chapter all-hover',
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
				    "class": 'goal-title',
				    html : goaldata[i]["goal_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
				})
			);


			element.appendTo(goalListPage);
			setuptuList(element);

			// element.on("click", function(){
			// 	setuptuList($(this));//.attr("data-value"))
			// });

		}

		subjects.css("display", "none");
		chapters.css("display", "none");
		goalListPage.css("display", "block");
	}

	function setuptuList(goal_div){

		var tudata = JSON.parse(goal_div.attr("data-value"));

		// console.log(tudata)

		tuListPage.html("");

		for(var i = 0; i<tudata.length; i++){
			// console.log(tudata[i]["video_details"], tudata[i]["lo_details"])
			// console.log(tudata[i]["lo_details"])
			var element = 	$('<div/>', {
			    "class": 'tu',
			    "data-value": JSON.stringify(tudata[i])
			}).append(
				$('<div/>', {
				    "class": 'tu-title',
				    html : tudata[i]["tu_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
				})
			);

			element.appendTo(goal_div);
			setupVideoList(goal_div);

			// element.on("click", function(){
			// 	setupVideoList($(this));//.attr("data-value"))
			// }); 


		}

		// console.log(JSON.parse($(".tulist-container").attr("data-value")))

		subjects.css("display", "none");
		chapters.css("display", "none");
		goalListPage.css("display", "block");
		tuListPage.css("display", "block");
	}	

	function setupVideoList(goal_div){

		var vldata = JSON.parse(goal_div.find(".tu").attr("data-value"));


		console.log(vldata)
		
		console.log(vldata["video_details"].length)

		video_qListPage.html("");

		for(var i=0; i<vldata["video_details"].length; i++){

			video_id = YouTubeGetID(vldata["video_details"][i]["video_link"])

			// console.log(tudata[i]["video_details"], tudata[i]["lo_details"])
			var element = 	$('<div/>', {
			    "class": 'video_class',
			    
			})

			element.append($('<img/>',{
				"class": 'video_image',
				"src" : 'https://img.youtube.com/vi/'+ video_id +'/hqdefault.jpg',

			}))
			element.append($('<div/>',{
				"class": 'video_title',
				html: vldata["video_details"][i]["video_name"]

			}))

			var element2 = $('<div/>', {
			    "class": 'questions',
			    html : vldata["lo_details"][i]["lo_name"] + "  " +  vldata["lo_details"][i]["lo_q_link"],
			})
			// .append(
			// 	$('<div/>', {
			// 	    "class": 'tu-title',
			// 	    html : tudata[i]["tu_name"], //.click(function(){setUpGoalPage(alldata[Object.keys(alldata)[i]].chapter_details)})
			// 	})
			// );

			element.appendTo(goal_div);
			element2.appendTo(goal_div);

			// element.on("click", function(){
			// 	setupVideoList($(this));//.attr("data-value"))
			// }); 


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