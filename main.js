var rnd=Math.random;
var beep, boop, multi=[];
function init(){
	var synth, i;
	beep = new p5.Oscillator();
	beep.setType("sine");
	beep.amp(1);
	beep.freq(600);
	boop = new p5.Oscillator();
	boop.setType("sine"); boop.amp(1);
	boop.freq(300);
	for(i=0;i<10;i++){
		synth = new p5.Oscillator();
		synth.setType("sine");
		synth.amp(0.1);
		synth.freq( rnd()*300+300 );
		multi.push( synth );
	}
}
function playOne( sfx, dur ){
	sfx.start();
	setTimeout( ()=>{
		sfx.stop();
	}, dur );
}
function playMulti( list, dur ){
	for(var i=0;i<list.length;i++){
		playOne( list[i], dur );
	}
}
function play( sound ){
	switch( sound ){
	case "beep":
		playOne( beep, 300 );
		break;
	case "boop":
		playOne( boop, 300 );
		break;
	case "multi":
		playMulti( multi, 1000 );
		break;
	default:
		break;
	}
}
function main(){
	init();
}
main();
