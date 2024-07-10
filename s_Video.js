class s_Video{
	constructor( dirVideo ){
        this.x = 150;
        this.y = 250;

        this.video = createVideo(dirVideo,() => {
                console.log("termino carga")
                this.yaPuedoDarPlay = true;});
        // this.video.size(500,500);
        this.video.style("display: none");
        this.yaPuedoDarPlay = false;
	}

    dibujar(){
        imageMode(LEFT); 
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