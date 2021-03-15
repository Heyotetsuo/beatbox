var rnd=Math.random,round=Math.round,floor=Math.floor;
var sounds = [], reverb;
function init(){
	var a=[], synth, poly, i, j;
	var variance, freq;
	for(i=0;i<3;i++){
		variance = rnd()*1000;
		freq = rnd()*1000;
		for(j=0;j<3;j++){
			synth = new p5.MonoSynth(null,99);
			// synth.data = {
			// 	note: 'A4', velocity: rnd(),
			// 	time: 0, dur: 1
			// }
			a.push( synth );
		}
	}
}
function play( i ){
	//playMulti( sounds[i], 70 );
	var data, snd, j;
	var snd = new p5.PolySynth();
	snd.play( 'A5', 1, 0, .2 );
	snd.play( 'A5b', 1, 0, .2 );
	snd.play( 'B5', 1, 0, .2 );
}
function nada(){
	null;
}
function main(){
	init();
}
main();
