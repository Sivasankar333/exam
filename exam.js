//[id , brand , model , type , pricePerDay, available]
 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan',45,12]
];
//1.Print all car brands
carbook=carBooking.map(brand=>brand[1])
console.log(carbook);
console.log('-------------------------------');
//2.Print total number of cars available
totalc=carBooking.flat(carBooking.map((carBooking)=>carBooking[1]).reduce((car1,car2)=>car1[5]+car2[5]));
console.log(totalc);
console.log('------------------------------');
//3.Print sedan cars details
sedanc=carBooking.filter(car=>car[3]=='Sedan')
console.log(sedanc);
console.log('-----------------------------');
//4.Print cars with price per day greater than 60
ppd=carBooking.filter(car=>car[4]>60).forEach(ppd => {console.log(ppd[1]);
        
});
console.log('------------------------------------');
//5.Print details of 'jeep wrangler'
details=carBooking.find(car=>car[1]=="Jeep")
console.log(details);
console.log('------------------------------------');
//6.Sort cars based on the descending order of the price per day
sortc=carBooking.sort((a,b)=>b[4]-a[4]).forEach(sortc=>{console.log(sortc[1]);})
console.log('------------------------------------');
//7.Sort cars based on ascending order of available cars
sortcc=carBooking.sort((a,b)=>a[5]-b[5]).forEach(sortcc=>{console.log(sortcc[1]);})
console.log('-----------------------------------');
//8.Find the car with the most available cars(availability)
mostad=carBooking.map((car,low)=>car[5]>low[5]).forEach(mostad => {console.log(mostad[1]);
        
});
console.log('-------------------------------------');

//9.Calculate the revenue if all the cars are rented for the day
cal=carBooking.flat(carBooking.reduce((rent1,rent2)=>rent1[4]*rent2[5] && rent1[4]+rent2[4]))
console.log(cal);
console.log('-----------------------------------------');
//10.Count the number of sedan cars

count=carBooking.flat((carBooking.filter(car=>car[3]=='Sedan').reduce((car1,car2)=>car1[3]+car2[3])))
console.log(count);
console.log('---------------------------');
//11.Printall car brands
carb=carBooking.map(car=>car[1])
console.log(carb);
//12.Find the total number of available cars of all type
totalnum=carBooking.flat(emp=>emp).find(car=>car[5]>0).reduce((car1,car2)=>car1[1]+car2[1])
console.log(car);
//13.Find the cars with least availability
//14.Check if there is any car with a price per day of exactly 55