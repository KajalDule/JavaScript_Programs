// program 1
// let bio = {
//     firstName :'kajal',
//     lastName : 'dule',
//     display: function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(bio.firstName)
// console.log(bio.lastName)
// console.log(bio.display)
// bio.display()

// program 2

// var firstName = 'kajal'
// var lastName = 'dule'

// let bio1 = {
//     firstName : 'sapna',
//     lastName : 'Dule',
//     displayName: function(){
//         console.log(bio1)
//         console.log(this.firstName + this.lastName)
//         function displayName2(){
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }
// bio1.displayName()

// // global --- window

// var a =10
// console.log(a)
// console.log(window.a)

// // program 3

// var firstName = 'kajal'
// var lastName = 'dule'

// let bio2 = {
//     firstName : 'sapna',
//     lastName : 'Dule',
//     displayName: function(){
//         console.log(bio2)
//         console.log(this.firstName + this.lastName)
//         let displayName2 = () =>{
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }
// bio2.displayName()

// program 4

var firstNameOne = "Kajal"
var lastNameOne  = "Dule"
let bio3 = {
    firstNameOne:"Sapna",
    lastNameOne:"dule",
    displayName:()=>{
        // this ===> window
        console.log(this.firstNameOne + this.lastNameOne)
        let  displayName2 = ()=>{
            // this ===> window
            console.log(this.firstNameOne + this.lastNameOne)
        }
        displayName2()
    }
}
bio3.displayName()


