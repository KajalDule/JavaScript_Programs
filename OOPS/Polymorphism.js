// poly - one ; morphism - many form
// it has the concept of method overloading and method overriding
// basically method overloading is not possible in js/python so it can be acheive in C#/C++/JAVA

class Calculator{
    addition(a,b){
        console.log(a+b)
    }
    addition(a,b,c){
        console.log(a+b+c)
    }
    addition(a,b,c,d){
        console.log(a+b+c+d)
    }
}
let add = new Calculator()
add.addition(15,5)
add.addition(12,3,4)



