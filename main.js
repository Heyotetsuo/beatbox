var rnd=Math.random,round=Math.round,floor=Math.floor;
var sounds = [], reverb;
var osctypes = ["sine","triangle","square","sawtooth"];
function urandint(max){
	return floor( rnd()*max );
}
function init(){
	var a=[], synth, i, j;
	var variance, freq;
	reverb = new p5.Reverb();
	for(i=0;i<3;i++){
		a = [];
		variance = rnd()*1000;
		freq = rnd()*1000;
		for(j=0;j<10;j++){
			synth = new p5.Oscillator();
			synth.setType( urandint(4) );
			synth.amp(0.1);
			synth.freq( rnd()*variance+freq );
			reverb.process( synth, 1 );
			a.push( synth );
		}
		sounds.push(a);
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
function play( i ){
	playMulti( sounds[i], 300 );
}
function main(){
	init();
}
main();
