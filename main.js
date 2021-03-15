var beep, boop;
function init(){
	beep = new p5.Oscillator();
	beep.setType("sine");
	beep.amp(1);
	beep.freq(600);
	boop = new p5.Oscillator();
	boop.setType("sine");
	boop.amp(1);
	boop.freq(300);
}
function play( sound ){
	if ( sound === "beep" ){
		sfx = beep;
	} else {
		sfx = boop;
	}
	sfx.start();
	setTimeout( ()=>{
		sfx.stop();
	}, 300 );
}
function main(){
	init();
}
main();
