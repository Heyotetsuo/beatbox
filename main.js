var rnd=Math.random,round=Math.round,floor=Math.floor;
var sounds = [], reverb;
var osctypes = ["sine","triangle","square","sawtooth"];
function urandint(max){
	return floor( rnd()*max );
}
function init(){
	var a=[], synth, i, j;
	var variance, freq;
	for(i=0;i<3;i++){
		a = [];
		variance = rnd()*1000;
		freq = rnd()*1000;
		for(j=0;j<30;j++){
			synth = new p5.Oscillator();
			synth.setType( "sawtooth" );
			synth.amp(0.1);
			synth.freq( rnd()*50+50 );
			a.push( synth );
		}
		sounds.push(a);
	}
}
function playOne( sfx, dur ){
	sfx.start(0);
	setTimeout( ()=>{
		sfx.stop();
	}, dur );
}
function playMulti( list, dur ){
	for(var i=0;i<list.length;i++){
		playOne( list[i], dur );
	}
}
function play( i ){
	playMulti( sounds[i], 70 );
}
function main(){
	init();
}
main();
