class person{                                                                     
    constructor(firstname,lastname,age,color,occupation,experience,degree){
        this.firstname   =firstname;
        this.lastname    =lastname;
        this.age         =age;
        this.color       =color;
        this.occupation  =occupation;
        this.experience  =experience;
        this.degree      =degree;
    }
    person_details(){
        let data=`
        Name         :   ${this.firstname} ${this.lastname}
        Age          :   ${this.age}
        Color        :   ${this.color}
        Occupation   :   ${this.occupation}
        Experience   :   ${this.experience}
        Degree       :   ${this.degree}
        `;                                                                       
        return data;
    }
}
let person1=new person("John","vick",45,"white","Engineer",15,"Mechanical");     
let person2=new person("Kishore","kumar",25,"brown","Fashion Designer",6,"Diploma in fashion");



let arrey_persons=[person1,person2];                                    
arrey_persons.forEach((data)=>console.log(data.person_details()));               

//This above program output is given below:

// Name         :   John vick
// Age          :   45
// Color        :   white
// Occupation   :   Engineer
// Experience   :   15
// Degree       :   Mechanical

// Name         :   Kishore kumar
// Age          :   25
// Color        :   brown
// Occupation   :   Fashion Designer
// Experience   :   6
// Degree       :   Diploma in fashion
