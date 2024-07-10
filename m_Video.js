class m_Video{
	constructor( dirVideo ){
        this.x = random (100, 250);
        this.y = random (340, 380);
        this.video = createVideo(dirVideo,() => {
                console.log("termino carga")
                this.yaPuedoDarPlay = true;});
        this.video.size(600,600);
        console.log(this.video.style);
        this.video.style("display: none");
        this.yaPuedoDarPlay = false;

        this.estado = "espera";
        this.tinta = color(100, 100, 255);
	}
    dibujar(){
        imageMode(CENTER); 
        let img = this.video.get();
        image(this.video,this.x,this.y);
    }
    play(){
        if(this.yaPuedoDarPlay){
            this.video.play();
            this.yaPuedoDarPlay = false;
        }
    }   
    stop(){
        this.video.stop();
        this.yaPuedoDarPlay = true;
    }   
}
