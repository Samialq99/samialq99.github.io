const profile = {
  firstName: "",
  lastName: "",
  setName: function(name) {
    //setname includes a function splitname and also calls it inside its body.a private function
    let splitName = function(n) {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    }; //here splitname ended but not setName
    splitName(name); //this calls splitNamewith the paramater name from setName(name) and here ends setName.
    //this is basically a function call from within a parent function. cool.
  }
  //we need to close the profile object with the next bracket.
};

profile.setName("John Doey");
console.log(firstName);
console.log(lastName);
// look up what is the window object. like this call
//console.log(window.firstname);
// or this way
//console.log(profile.firstName); for this one to work you need to use arrow and change these lines...line (4)
/* setname: function(name){
    let splitName= (n) => {
        let nameArray =n.split(' ');
        this.firstName =nameArray[0];
        this.lastName =nameArray[1];

    }
    splitName(name);
   }
}
profile.setName(john doe');
console.log(profile.firstName);
you need a tutorial on arrow use =>   

*/
