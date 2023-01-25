///////////////////////////////////////
// INITIALIZATION
///////////////////////////////////////

/**
 * Functionality for scaling, showing by media query, and navigation between multiple pages on a single page. 
 * Code subject to change.
 **/
class Slider{
    constructor(){
      this.images = [];
      this.images[0]= "../slider/A1.jpg";
      this.images[1]= "../slider/A2.jpg";
      this.images[2]= "../slider/A3.jpg";
      this.images[3]= "../slider/A4.jpg";
      this.images[4]= "../slider/A5.jpg";
      this.images[5]= "../slider/A6.jpg";
      this.images[6]= "../slider/A7.jpg";

      this.links=[];
      this.links[0]= "#";
      this.links[1]= "#";
      this.links[2]= "#";
      this.links[3]= "#";
      this.links[4]= "#";
      this.links[5]= "#";
      this.links[6]= "#";
      this.counter = 0;
      setInterval(() => {
        this.privuos();
      }, 2400);
    }
	privuos(){
        if(this.counter<this.images.length - 1){
            this.counter++;
        }else{

            this.counter = 0;
        }
        document.slid.src= this.images[this.counter];
        document.getElementById("slider").href= this.links[this.counter];
    }
    next(){
      if(this.counter<this.images.length - 1){
          this.counter++;
      }else{

          this.counter = 0;
      }
      document.slid.src= this.images[this.counter];
  }
    
    

}

onload = new Slider();

let Ts = document.getElementById("n__q");
function tam(){
	window.scrollTo({
		top: 444 ,
		behavior: "smooth",
	});
}
