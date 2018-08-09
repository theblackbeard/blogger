$(document).ready(function(){

		let query = {
			key: "AIzaSyCVvzUJwTiaV5nzxqt9zXCUqOiigMEtNmE",
			part: "snippet",
			channelId: "UC6nTt2sWB7taW2LHF-O82vg",
			order : "date",
			maxResults: "2"
		}

		$.ajax({
			url: "https://www.googleapis.com/youtube/v3/search",
			data: query
		}).done(function(res){

					$("#video").append("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+res.items[0].id.videoId +"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");
				
				for(let i=1; i < res.items.length; i++)
				{
					$("#thumbs").append("<div class='card'>\
							<div class='card-image'>\
			 					 <img src='"+res.items[i].snippet.thumbnails.medium.url+"'/>\
			  						<span class='card-title'>"+res.items[i].snippet.title+"</span>\
			  							<a class='btn-floating halfway-fab waves-effect waves-light red'>\
			  								<i class='material-icons'>add</i></a>\
							</div>\
							<div class='card-content'>\
			  					<p>"+res.items[i].snippet.description+"</p>\
							</div>\
						</div>");
				}	
				
				


		})

});