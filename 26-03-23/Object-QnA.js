// 1
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);

// 2
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// 3
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// 4
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// 5
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// 6
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);

// 7
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);
// console.log(source);

// 8
// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);

// 9
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// 10
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result);
// console.log(result === { a: 1, b: 2 });\

// 11
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

// 12
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

// 13
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);
// console.log(target);

// 14
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);

// 15
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// source.a[2] = 90;
// console.log(result);

// 16
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);
// console.log(source);

// 17
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(Object.entries(student));

// 18
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(student);
// delete student.rollno;
// console.log(student);

// 19
// function operationObj(obj) {
//   obj = { ...obj, c: 12 };
// }
// let a = { x: 34, y: 56 };
// operationObj(a);
// console.log(a);

// 20
// function operationObj(obj) {
//   obj.z = { ...obj, c: 12 };
// }
// let a = {
//   x: 34,
//   y: 56,
// };
// operationObj(a);
// console.log(a);

// 21
const target = { a: { b: { c: 1 } } };
const source = { a: { b: { d: 2 } } };
const result = Object.assign(target, source);
result.a.b.d = 3;
console.log(source);