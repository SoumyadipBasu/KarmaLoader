function addition() {

}

addition.prototype.add = function(a,b) {
 var c=(a+b);
 return c;
};

addition.prototype.stringAdd = function() {
 
 return "test";
};

function Stringaddition() {

}

Stringaddition.prototype.stringAdd = function() {
 var c ='<h1>test for</h1>';
 return c;
};



function contains() {
}
contains.prototype.cont = function() {
 var d= "i'm rupayan roy";
 return d;
};




function checking() {
}
checking.prototype.check = function() {
 var i=5;
 var d= (i>4);
 if (d) {
 	return d;
 }; 
};




function checkingFalse(){

}
checkingFalse.prototype.checkFal=function(){
	var j=8;
	var f=(j>10);
	if (f) {
		return f;
	} else{
		return f;
	};
 }



function nullChecking(){
}
nullChecking.prototype.nulls=function(){
	var j=null;
	return j;
}


function undefine(){

}
undefine.prototype.und=function(){
	var a;
}



function define(){

}
define.prototype.defi=function(){
	var a=5;
	return a;
}



function greaterThan(){

}
greaterThan.prototype.bigger=function(a,b){
	var a=5;
	var b=8;
	
		return b;
}



function lesserThan(){

}
lesserThan.prototype.lesser=function(a,b){
	var a=5;
	var b=10;
     return a;
}


function being(){

}
being.prototype.be=function(a,b){
	var a="5";
     return a;
}



function being1(){

}
being1.prototype.be1=function(a){
	var a="5";
     return a;
}



function matching(){

}
matching.prototype.match=function(){
	var s="123-45-7345-abcd";
	return s;
}



function customMatcher() {

}
customMatcher.prototype.havingWord=function(){
	var a="I am rupayan roy";
	return a;
}




 spyingAFunction =function() {

};
spyingAFunction.prototype.parentFunction=function(){
	debugger;
	var test=new spyingAFunction();
	//return  test.childFunction() + "5+6=11";
	return  this.childFunction() + "5+6=11";
};
spyingAFunction.prototype.childFunction= function(){	
	return "Addition of " ;
};




Person = function() {};

Person.prototype.helloSomeone = function() {
    return this.sayHello() + " ";
};

Person.prototype.sayHello = function() {
    return "Hello";
};


ThrowExceptionExample=function()
{};
ThrowExceptionExample.prototype.exceptionThrow = function() {
  
    throw new Error("I am an Error");
};