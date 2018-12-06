

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;}}}


function hideNSeek(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function test() {
	alert("test");
}

function narrate (type,tag) {
	
	var narr =
    {
    "title" : [["0"
    ],["hey...", "What are you doing on this definitly-not-a-website thing ?"
    ],[ "What are you trying to do ?","there's no website, just me..."
    ],[ "you're loosing your time here..."
    ],[ "dude, go away !","there is NO WEBSITE !" 
    ],[ "There is no JavaScript"]
    ], "menu" : [["0"
    ],["well...","you broke that","don't touch anything, i'll be right back"
    ],["woooo","what the heck man ? "
    ],["hit the road, jack !","and don't you come back no more"]
    ], "connexion" : [["0"
    ],['Told you nothing would happend']]
    };
	
	for (var i = 0; i < narr[type][Number(tag)].length ; i++) {
		alert(narr[type][Number(tag)][i]);
	}
	hideNSeek(document.getElementById(arguments[0]+String(Number(arguments[1])+1)));
    return;
}


var x = 0;
var intervalId = null;
function titleAnimation(){
    narrate('title','5');
    for (var i = 1; i <= 4; i++) {
        hideNSeek(document.getElementById("title"+String(i)));
    }
    move();
}

function move() {
  var elem = document.getElementById('title5'); 
  var width = 43;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 95) {
      clearInterval(id);
    } else {
      width++; 
      elem.style['top'] = width + '%'; 
    }
  }
}

//canvas related stuff

function responsiveCanvas(canvas) {
    var height = window.innerHeight;
    var width = window.innerWidth;
    document.getElementById(canvas).height = height-10;
    document.getElementById(canvas).width = width-10; 
}

function init_canvas()
{ 
    var canv = document.getElementById('canv');
        if(!canv)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canv.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
    responsiveCanvas('canv');
    return context;
}


//script



for (var i = 5; i >= 2; i--) {
    hideNSeek(document.getElementById("title"+String(i)));
}




/*
var el = document.getElementById("title");
el.addEventListener("click", init, false);
*/