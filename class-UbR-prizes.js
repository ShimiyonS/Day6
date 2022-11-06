class Uberprice{
    constructor(person,time,distance){
        let [base_fare,operating_rate,booking_fees,cost_per_km]=[25,20,3,7];       
        this.person_name=person;
        this.base_fare=+base_fare;
        this.operating_rate=+operating_rate;
        this.time=+time;
        this.cost_per_km=+cost_per_km;
        this.booking_fees=+booking_fees;
        this.distance=distance;
    }
    getprice(){
        if(this.time<30){                                                         
           this.time=0;
        }else{
            var tme=0;
            for(let i=30;i<=this.time;i=i+30){
                tme+=30;
        }}
        this.time=tme;
        let passengers_ride_fair=this.base_fare+this.operating_rate+this.booking_fees+(this.distance*(this.cost_per_km)+this.time);   
                                                                                    
        return `
Uber price for the ride is : ₹ ${passengers_ride_fair}
        `;                                                                          
    }
}
let rider1   =   new Uberprice("kishore",80,60);                              
let rider2   =   new Uberprice("Ramesh",30,30);
let rider3   =   new Uberprice("Lavish",120,100);
let arr_rider=   [rider1,rider2,rider3]; 

arr_rider.forEach((rider)=>console.log(`Rider Name is ${rider.person_name} ${rider.getprice()}`));


//This above program output is given below;
//Rider Name is kishore 
//Uber price for the ride is :     ₹ 528

//Rider Name is Ramesh 
//Uber price for the ride is :     ₹ 288

//Rider Name is Lavish 
//Uber price for the ride is :     ₹ 868