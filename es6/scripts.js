"use strict"
/*
window.onload=function(e){
	for (var i=0;i<5;i++){
		var a=33;
		// console.log(i);
	};
	console.log(i);
	console.log(a);
};
*/


/*

// let and const
// let улучшенный var (Нормальные зоны видимости элементов)
window.onload=function(e){
	for (let i=0;i<5;i++){
		console.log(i);
	};


	// Сдесь не сработает так как переменная заданная внутри фигурных скобок не вырвется
	// console.log(i);
	// console.log(a);
};

*/

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

 settings.a=15; // Но не смотря на то что settings константа ее составная часть может изменяться
 settings.d='Hello';


	for (let i=0;i<5;i++){
		console.log(typeof i);
		
	};
	console.log(test);
	console.log(settings);


	
	// console.log(i);// Сдесь не сработает так как переменная заданная внутри фигурных скобок не вырвется
	// console.log(a);
};


/* 

// Раньше мы прописывали t которой передавали значение из переменной 
// и если такой переменной нет мы через оператор или присваивали ей какое то значение
timer(5);
timer();
timer(0);//let time=t || 60 при таком обозначении
// Выведет 60

// Выведет в первом логе 5 во втором 60 в третьем 60 при форме let time=t || 60
function timer(t){
	// let time=t || 60; //Не универсальная форма записи 

	let time=(typeof t==='undefined') ? 60 :t; 	// Такой костыль используем и выведет 0
	console.log(time);
};
*/



// В стандарте ES6 используется еще проще
timer(5);
timer();
timer(0);

function timer(time=60){
	console.log(time)
};

/*
some('Petr',[5,5,5,4,5]);
function some(name,marks){
	console.log(arguments)
	};
	*/

let str=some('Petr','Ruchkin',5,3,4);
document.querySelector('.res').innerHTML=str
//Если мы хотим получить и последующие значения массива, но не уверены в их числе – можно добавить ещё один параметр
 // , который получит «всё остальное»,при помощи оператора "..." («spread», троеточие):

function some(name,lastname,...marks){

	// console.log(name);
	// console.log(marks);
	// Раньше писали marks[m] ключ значения (что бы вывести не по индексу)
	for(let m in marks){
		console.log('______');
		console.log(marks[m]);
	};

// Теперь есть новый цикл of
	let sum=0
	for(let m of marks){
		sum+=m
		console.log('______');
		console.log(m);
	}
	let avg=sum/marks.length
	let res='<div>'+name+' '+ lastname+ '<strong>'+' '+avg+'</strong></div>'
	return res
	};