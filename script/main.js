/***********************************************
create functions for opening and closing the menu
************************************************/
	let openNav = () => {
		document.getElementById("open").style.display = "none";
		document.getElementById("navbar").style.display = "block";
	}
	let closeNav = () => {
		document.getElementById("navbar").style.display = "none";
		document.getElementById("open").style.display = "block";
	}

	let openBtn = document.getElementById("open").addEventListener("click", openNav);
	let closeBtn = document.getElementById("close").addEventListener("click", closeNav);
