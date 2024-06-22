console.log("hello world");

var x=10;
var x=20;
console.log(x)

let a=30;
console.log(a)
{
    let b=40;
    console.log(b)
}
var z="5";
console.log(typeof(z))

//conditions

let temp=30;
if(temp>20)
{
    console.log("it's hot day")
}
else if(temp>30 && temp<=30)
{
    console.log("normal day")
}else
{
    console.log("cold day")
}

//

for (let i=0; i<10;i++)
{


}


//
let fruits=['apple','banana','orange']
console.log(fruits[1])
fruits.push('orange')
console.log(fruits)
fruits.pop()
console.log(fruits)

fruits.unshift('banana')
console.log(fruits)

fruits.shift('banana')
console.log(fruits)



let person={
    fname:'thahzeen',
    lname:'kadheeja',
    age:22,
    city:'hyderabad',
}
console.log(person)
console.log(person.fname)

//

let people = [
    {
      name: 'Alice',
      age: 25,
      place: {
        city: 'Wonderland',
        country: 'Fairyland'
      }
    },
    {
      name: 'Bob',
      age: 30,
      place: {
        city: 'TechCity',
        country: 'Geekland'
      }
    },
    {
      name: 'Charlie',
      age: 28,
      place: {
        city: 'Artsville',
        country: 'Createland'
      }
    }
  ];
console.log(people[0].name)
console.log(people[2].place.country)






