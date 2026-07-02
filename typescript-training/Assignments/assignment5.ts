interface Employee {
  name: string;
  baseSalary: number;
  experience: number;
  rating: number;
}
//emp details
let empDetails: Employee[] = [
  {
    name: "Alice Johnson",
    baseSalary: 75000,
    experience: 5.1,
    rating: 4.2,
  },
  {
    name: "Bob Smith",
    baseSalary: 68000,
    experience: 3.2,
    rating: 3.8,
  },
  {
    name: "Carol Davis",
    baseSalary: 82000,
    experience: 7.1,
    rating: 4.5,
  },
  {
    name: "David Brown",
    baseSalary: 90000,
    experience: 10.2,
    rating: 2.5,
  },
  {
    name: "Eva Green",
    baseSalary: 60000,
    experience: 2.4,
    rating: 3.5,
  },
];

let hikePercentageMap = new Map<string, number>();

for (let emp of empDetails) {
  let variablePay: number = 0;
  let bonus: number = 0;
  let reward: number = 0;

  if (emp.rating >= 4) {
    variablePay = 15.0;
    bonus = 1500;
  } else if (emp.rating >= 3 && emp.rating < 4) {
    variablePay = 10.0;
    bonus = 1200;
  } else {
    variablePay = 3.0;
    bonus = 300;
  }

  if (emp.experience >= 5) {
    reward = 5000;
  }
  //calculate hike
  let hike =(emp.baseSalary * variablePay / 100)+ bonus+ reward;

  //hike%

  let hikePercentage =(hike / emp.baseSalary) * 100;

  hikePercentageMap.set(emp.name, hikePercentage);


  
}

for (let [name, percentage] of hikePercentageMap) {
    console.log(name,percentage);
  }
