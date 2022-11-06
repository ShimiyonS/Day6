class  Movie{
    constructor(title,studio,rating){    
        this.title  = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(){
        if(this.rating===undefined){   
            this.rating="PG";
        };
        let data=`
        Movie Title: ${this.title}
        Studio     : ${this.studio}
        Rating     : ${this.rating}`;
        return data;
    }
};
let Movie1    =  new Movie("Top Gun: Maverick","Paramount pictures","PG10");
let Movie2    =  new Movie("Casino_Royale","Eon productions","PG13");
let Movie3    =  new Movie("Beast","Sun Tv.Net");
let arr_movie =  [Movie1,Movie2,Movie3];             


arr_movie.forEach((a)=>console.log(a.getPG()));      


// The output for the above program is shown below:

// (Movie Title: Top Gun: Maverick
// Studio     : Paramount pictures
// Rating     : PG10
        
// Movie Title: Casino_Royale
// Studio     : Eon productions
// Rating     : PG13

//Movie Title: Beast
//Studio     : Sun Tv.Net
//Rating     : PG
