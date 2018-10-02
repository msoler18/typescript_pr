let person: {name:string,lastName:string,skills:string[]} = {
  name: "Miguel",
  lastName: "Soler",
  skills: ["Js","Ruby"],
}

let frameworkSkills = {
  js: "Angular",
  ruby: "Rails",
  php: "Symphony"
}


/* Custom Types */
type Person = {
  name:string,
  lastName:string,
  skills:any[]
}


let person2: Person = {
  name: "Miguel",
  lastName: "Soler",
  skills: ["Js","Ruby"],
}