class v_Video{
	constructor( dirVideo ){
        this.x = 200;
        this.y = 240;

        this.video = createVideo(dirVideo,() => {
                console.log("termino carga")
                this.yaPuedoDarPlay = true;});
        // this.video.size(500,700);
        this.video.style("display: none");
        this.yaPuedoDarPlay = false;
	}

    dibujar(){
        imageMode(CENTER); 
        let img = this.video.get();
        image(img,this.x,this.y);
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