let nombre: string = "Nicolas";
// console.log(nombre);

let id: number = 5;
let prueba: string = "prueba";
let isPublished: boolean = true;
let x: any = "hola"; // sirve para cualquier tipo
let z: string | number;
z =
  // 22
  "22";

// console.log(id, prueba, isPublished, x, z);

let ids: number[] = [1, 2, 3, 4, 5];
// let ids: number[];
// ids = [1, 2, 3, 4, 5, 6]
let arr: any[] = [20, true, "Ni"];
let arr2: Array<string | number> = [6, "Nicolas"];

// console.log(ids, arr, arr2)

// tuplas --> con un orden
let person: [number, string, boolean] = [19, "Nicolas", true]; // el array de los tipos de datos recibe los valores con ese mismo order, no se puede poner primer el string y despues el number
// let person: [number, string, boolean] = ["Nicolas", 19, true] --> error!

let students: [number, string][];
students = [
  [1, "Nico"],
  [2, "Álvaro"],
  [3, "Demis"],
];

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Nicolas",
};

const user2: User = {
  id: 2,
  name: "Nicolas2",
};

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // opcional
}

const user3: UserInterface = {
  id: 3,
  name: "Nicolas3",
  //   age: 19 --> es opcional
};

// user3.id = 4 --> error porque es only read

interface Cat {
  name: string;
  legs: number;
  isDogFriendly: boolean;
}

// const grace = {
//   name: "Grace",
//   legs: 4,
//   isDogFriendly: true, // sin breed
// };

interface Breed extends Cat {
  breed: string;
}

const grace = {
  name: "Grace",
  legs: 4,
  isDogFriendly: true,
  breed: "Chucho", // se incluye despues de hacer el extend
};

function addNum(x: number, y: number): number {
  // se tipan los datos que llegan y lo que devuelve, por eso tres "number"
  return x + y;
}
// function addNum(x: number, y: number): number {
//   return "x + y"; --> error
// }

// console.log(addNum(2, 3));
// console.log(addNum(2, "3")) --> error

function showName(name: string): string {
  // :string porque devuelve un string
  return name;
}

function test(name: string): void {
  // se pone el void si no hay ningun return
  console.log(name);
}

interface DogInterface {
  age: number;
  name: string;
  register(): string;
  // showName(): void --> en caso de que no haya return
}

// const dog1 = {
//   age: 2,
//   name: "Zenda",
// };
// const dog2 = {
//   age: 2,
//   name: "Tony",
// };
// se repite la misma estructura en dog1 y dog2, por ello se crea una clase

class Dog implements DogInterface {
  age: number;
  name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const toni = new Dog(11, "Toni");
const zenda = new Dog(11, "Zenda");