//boolean类型
let isDone: boolean = false;

//number类型
let min: number = 60;
let pi: number = 3.14;

//string 类型
let name: string = 'tom';
name = 'jerry';

//null和undefined
/** 
 * null 和 undefined 是所有类型的子类型
 * 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题
*/

let u: undefined = undefined;
let n: null = null;

let n1: number = 1;
n1 = null;
n1 = undefined;


export { }