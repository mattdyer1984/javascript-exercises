function findTheOldest(people) {
   
    for(let i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath) {
            people[i].age = people[i].yearOfDeath - people[i].yearOfBirth
        } else {
            people[i].age = 2023 - people[i].yearOfBirth
        }
    }
    let result = [people[0]]
    for(let i = 0; i < people.length; i++) {
        if(people[i].age > result[0].age){
            result.unshift(people[i])
        }
    }
    return result[0]

};

// Do not edit below this line
module.exports = findTheOldest;
