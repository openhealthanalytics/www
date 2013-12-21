window.onload = rotate;

var adImages = new Array(
	"/banners/banner_master-01.png", 
	"/banners/banner_master-02.png", 
	"/banners/banner_master-03.png", 
	"/banners/banner_master-04.png" );

var thisAd = 0;

function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("banner").src = adImages[thisAd];

	setTimeout("rotate()", 5 * 1000);
}

