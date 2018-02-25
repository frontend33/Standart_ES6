"use strict"

// window.onload=function(e){
// 	for (var i=0;i<5;i++){
// 		var a=33;
// 		// console.log(i);
// 	};
// 	console.log(i);
// 	console.log(a);
// };



// // let and const
// // let улучшенный var (Нормальные зоны видимости элементов)
// window.onload=function(e){
// 	for (let i=0;i<5;i++){
// 		console.log(i);
// 	};


// 	// Сдесь не сработает так как переменная заданная внутри фигурных скобок не вырвется
// 	// console.log(i);
// 	// console.log(a);
// };



window.onload=function(e){
	const test=50;
	// test = 'a';
	// Выведет ошибку так как  const test величина постоянная и мы ее не изменим даже (test ++)
	const settings={
		a:3,
		b:2,
		c:33
	}

	// settings= {a:5}; выведет ошибку
 // Но не смотря на то что settings константа ее составная часть может изменяться
 settings.a=15;
 settings.d='Hello';


	for (let i=0;i<5;i++){
		console.log(typeof i);
		
	};
	console.log(test);
	console.log(settings);
	// Сдесь не сработает так как переменная заданная внутри фигурных скобок не вырвется
	// console.log(i);
	// console.log(a);
};
