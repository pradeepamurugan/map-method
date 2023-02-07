	/*--------1-------*/
	const users =[
	  {
		first_name: 'Mike',
		last_name: 'Sheridan'
	  },
	  {
		first_name: 'Tim',
		last_name: 'Lee'
	  },
	  {
		first_name: 'John',
		last_name: 'Carte'
	  }
	];
	let name=users.map(function (user){
		return user.first_name+user.last_name;
	})
	document.write(name);
	console.log(name);

	// /*--------2-------*/
	const numval = [
	  {
		first_name: 'Mike',
		last_name: 'Sheridan',
		age: 30
	  },
	  {
		first_name: 'Tim',
		last_name: 'Lee',
		age: 45
	  },
	  {
		first_name: 'John',
		last_name: 'Carte',
		age: 25
	  }
	];
	let value=numval.map(function (word){
		return word.last_name;
	})
	document.write(value);
	console.log(value);

	// /*--------3-------*/
	const number = [
	  {
		first_name: 'Mike',
		location: 'London'
	  },
	  {
		first_name: 'Tim',
		location: 'US'
	  },
	  {
		first_name: 'John',
		location: 'Australia'
	  }
	];

	let numbers=number.map(function(sum){
		return `${sum.first_name} lives in ${sum.last_name}`
	})
	document.write(numbers);
	console.log(numbers);