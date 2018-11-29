

//document.getElementById('title').innerHTML = "There is no website.";





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
    ]
    ]
    };
	
	for (var i = 0; i < narr[type][Number(tag)].length ; i++) {
		alert(narr[type][Number(tag)][i]);
	}
	hideNSeek(document.getElementById(arguments[0]+String(Number(arguments[1])+1)))
}


function init_canvas()
{ 
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

    var myInterval = setInterval(animate, 1000/30);
}
function animate()
{
    //C'est ici que toutes les manipulations sur le canvas se feront.
}

for (var i = 5; i >= 2; i--) {
	hideNSeek(document.getElementById("title"+String(i)));
}


/*
var el = document.getElementById("title");
el.addEventListener("click", init, false);
*/