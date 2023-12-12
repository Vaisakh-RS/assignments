/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let out=[] //output list of objects

  transactions.forEach(element => {
    let cat=element.category;
    let price=element.price;

    let existingCat=out.find(outCat=>outCat.category==cat) //find method for checking if the category already exists

    if(existingCat)
      existingCat.totalSpent+=price;
    else
    out.push({"category":cat,"totalSpent":price})
  });
 return out;
}

module.exports = calculateTotalSpentByCategory;


// {food:50,clothing:20,food:40}