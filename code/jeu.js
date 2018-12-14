

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;}}} 


function hideNSeek(x) {
    //Doc object
    //hides or reveals it
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function test() {
    //test...
	alert("test");
    console.log('test');
}

function narrate (type,tag) {
    //both strings, 
    //which describes which elemnt of the narrative context sahll be displayed
	
	var narr =
    {
    "title" : [["0"
    ],["hey...", "What are you doing on this definitly-not-a-website thing ?"
    ],[ "What are you trying to do ?","there's no website, just me..."
    ],[ "you're loosing your time here..."
    ],[ "dude, go away !","there is NO WEBSITE !" 
    ],[ "There is no JavaScript"]
    ], "menu" : [["0"
    ],["woooo","what the heck man ? "
    ],["hit the road, jack !","and don't you come back no more"]
    ], "connexion" : [["0"
    ],['Told you nothing would happend']
    ], "searchbar" : [["0"
    ],["well...","you broke that","don't touch anything, i'll be right back"
    ],["yup, nothing here","(phew) nothing unusual..."
    ],["let's get rid of this...","it's not like it matters to you"]
    ]
    };
	
	for (var i = 0; i < narr[type][Number(tag)].length ; i++) {
		alert(narr[type][Number(tag)][i]);
	}
    if (type == 'title') {
    hideNSeek(document.getElementById(arguments[0]+String(Number(arguments[1])+1))); }
    return;
}




function titleAnimation(){
    //graphic func
    //calls moveTitle and searchbarAppearance
    narrate('title','5');
    for (var i = 1; i <= 4; i++) {
        hideNSeek(document.getElementById("title"+String(i)));
    }
    moveTitle();
    document.getElementById('searchbar').style.display = "block";
    var id = setInterval(searchbarAppearance, 1000);
    function searchbarAppearance(){
        //graphic
        //makes the search bar appear
        narrate('searchbar','1');
        narrate('searchbar','3');
        document.getElementById('title5').style.display = "none";
        clearInterval(id);
    }
}

function moveTitle() {
    //graphic
    //makes the title fall
  var elem = document.getElementById('title5'); 
  var tmp = 0;
  var id = setInterval(frame, 10);
  function frame() {
    //frame counter
    if (tmp >= 375) {
      clearInterval(id);
    } else {
      tmp = tmp + 9.81; 
      elem.style['top'] = String(((tmp + Number(elem.style['top'].slice(0,2)))/10)+43) + '%'; 
    }
  }
}

function searchbarAct(x) {
    var caseCF = 'there is a connexion form';
    var caseMen = 'there is a menu';
    switch(x) {
        case caseCF :
            hideNSeek(document.getElementById("connexionButton"));
            caseCF = null;
            break;
        case 'there is a website' :
            
            if(document.getElementById('second').style.display == 'block') {
                hideNSeek(document.getElementById('second'));
                hideNSeek(document.getElementById('first'));
            } else {
                hideNSeek(document.getElementById('first'));
            }
            break;
        case 'there is a game' :
            if(document.getElementById('first').style.display == 'block') {
                hideNSeek(document.getElementById('first'));
                hideNSeek(document.getElementById('second'));
            } else {
                hideNSeek(document.getElementById('second'));
            }
            break;
        case caseMen :
            narrate("menu","1");
            hideNSeek(document.getElementById('nav'));
            hideNSeek(document.getElementById('md'));
            caseMen = null;
            break;
        default :
            narrate('searchbar',"2");
    }
    return false;
}


//canvas related stuff

/*
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
*/

//script



for (var i = 5; i >= 2; i--) {
    hideNSeek(document.getElementById("title"+String(i)));
}


/*
var el = document.getElementById("title");
el.addEventListener("click", init, false);
*/