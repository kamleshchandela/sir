const company = { 
ceo: { name: "Anita", contact: { email: "anita@co.com" } }, 
teams: [{ lead: { name: "Jay" }, members: ["Virat", "Rohit","Gautam"] }], 
location: { city: "Ahmedabad", country: "India" }, 
};

console.log(company.teams[0].members[0]);
console.log(company.location.city);
console.log("Total number of members : " , company.teams[0].members.length);






