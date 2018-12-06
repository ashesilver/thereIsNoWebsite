


function connecting() {
	document.getElementById("connecter").style.display = 'block';
}

function connection() {
	alert('Told you nothing would happend');
}

function change() {
	if (document.getElementById('first').style.display == 'none') {
		document.getElementById('first').style.display = 'block';
		document.getElementById('second').style.display = 'none';
	}	else if (document.getElementById('second').style.display == 'none') {
		document.getElementById('first').style.display = 'none';
		document.getElementById('second').style.display = 'block';
	}
}
