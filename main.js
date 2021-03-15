function init(){}
function main(){
	var wave = new p5.Oscillator();
	wave.setType( "sine" );
	wave.amp(1);
	wave.freq(300);
	wave.start();
	setTimeout( ()=>{
		wave.stop();
	}, 1000 );
}
main();
