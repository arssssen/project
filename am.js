window.addEventListener("load",()=>{
	const songs = document.querySelectorAll(".song")
	const tracks = document.querySelectorAll(".tracks .trackblock .track")
	const icons = document.querySelectorAll(".icon")
	// let play_img = document.querySelector("#icon")
	


	tracks.forEach((track,index) => {
		
		track.addEventListener("click",function() {
			
			if(songs[index].paused==true){
			var a=index
			songs[index].volume=0.3
			songs[index].play();
			icons[index].src="imgs/pause.png"
			for(x in tracks){
				
				if(songs[x]!=songs[a] && songs[x].paused==false){
					songs[x].pause()
					icons[x].src="imgs/play.png"
					songs[x].currentTime=0
				}

			}
			
		}
			else {songs[index].pause()
				icons[index].src="imgs/play.png"
				songs[index].currentTime=0
				
		}
		


		})
	});

});
