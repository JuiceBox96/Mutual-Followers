let bobsFollowers = ['Jack', 'Raff', 'Ellie', 'David'];
let tinasFollowers = ['Shaq', 'Raff', 'Ellie'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let x = 0; x < tinasFollowers.length; x++) {
    if (bobsFollowers[i] === tinasFollowers[x]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers)
