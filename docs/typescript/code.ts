// 申明userInfo是一个对象类型
function sayName (userInfo: Record<string, any>) {
  return userInfo.name
}

// 这时候是正常的
const res = sayName({})

// 这时候可能没有拿到userInfo不是一个对象，传入的是空字符串，就会提示报错
sayName('')

// 举个实际例子
interface UserInfoRes {
  user_name: string;
}

// 假设异步获取用户信息，后端有可能会返回null
const getUserInfo = () => {
  if (Math.random() > 0.1) {
    return {
      user_name: 'xx'
    }
  } else {
    return null
  }
}
const userInfo: UserInfoRes | null = getUserInfo()
// 此处执行这个函数的时候就知道，入参可能为null
sayName(userInfo)

// 需要我们兼容一下
sayName(userInfo || {})

// 这样就可以使得我们避免一些简单的错误

let arr2: Array<number> = [1, 2, 3, '4']


// 泛型参数
const swap = <T, U>(arr: [T, U]): [U, T] => {
  return [arr[1], arr[0]]
}
// 接口

interface Swap <T>{
  (param: T): T
}
// 类

class Stack<T> {
  private arr: T[] = []
  public push(item: T) {
    this.arr.push(item)
  }

  public getArr(): T[] {
    return this.arr
  }
}


const s = new Stack()
s.push(1)
s.getArr()


let uniType: string|string[] = []

uniType = '1'

uniType = ['1']


//  交叉类型

interface B {
  name: string;
  age: number
}

interface C {
  area: string;
  female: number
}
const bigNumber: bigint = 100n
const s1: symbol = Symbol(1)
type Person = B & C
const persona: Person = {
  name: 'xiaoming',
  age: 18,
  area: 'shanghai',
  female: 1,
}

type A = string | number

type S = string & number


const el: HTMLInputElement = document.getElementById('input_1') as HTMLInputElement


type Hello= 'hello'


const h: Hello = 'hello world' // error


function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");


// 接口的继承扩展

interface Animal {
  type: string
}

interface Cat {
  name: string
}


interface Animal {
  age?: string
}

interface Tiger extends Animal, Cat {}

const t1: Tiger = {
  type: 'xx',
  name: 'xx'
}

// 类型别名

type Animal1 = {
  type: string
}


type Animal1 = {
  age: string
}

type Cat1 = {
  name: string
}

type Tiger2  = Animal1 & Cat1

const t2: Tiger2 = {
  type: 'tiger',
  name: '瘦虎'
}

type s1 = string


type ParseParam<Param extends string> = 
    Param extends `${infer Key}=${infer Value}`
        ? {
            [K in Key]: Value 
        } : {};

type MergeValues<One, Other> = 
    One extends Other 
        ? One
        : Other extends unknown[]
            ? [One, ...Other]
            : [One, Other];

type MergeParams<
    OneParam extends Record<string, any>,
    OtherParam extends Record<string, any>
> = {
  [Key in keyof OneParam | keyof OtherParam]: 
    Key extends keyof OneParam
        ? Key extends keyof OtherParam
            ? MergeValues<OneParam[Key], OtherParam[Key]>
            : OneParam[Key]
        : Key extends keyof OtherParam 
            ? OtherParam[Key] 
            : never
}
type ParseQueryString<Str extends string> = 
    Str extends `${infer Param}&${infer Rest}`
        ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
        : ParseParam<Str>;

// 用数组的第一个做类型

type First<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never

type F1 = First<['1',2,3]>

type F2 = First<[1,2,3]>

const ff1: F1 = '1'
const ff2: F2 = 1

type Last<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never

type L1 = Last<['1',2,'33']>

type L2 = Last<[1,2,3]>

const Ll1: L1 = '33'
const Ll2: L2 = 3



type Split<
  S extends string,
  SEP extends string,
  R extends any[] = []
> = S extends `${infer _}`
      ? S extends `${infer S1}${SEP}${infer S2}`
        ? Split<S2, SEP, [...R, S1]>
        : S extends ''
          ? SEP extends ''
            ? R
            : [...R, S]
          : [...R, S]
      : string[]

type StrArr = Split<'hello world', ' '>


type Arr = string[]

type ArrToTuple<arr extends unknown[], count extends number> = [...arr, count]

type Tup1 = ArrToTuple<['1', '2'], 3>


type Flatten<
  T extends any[]
> = T extends [infer L, ...infer R]
      ? L extends any[]
        ? [...Flatten<L>, ...Flatten<R>]
        : [L, ...Flatten<R>]
      : []

type Fla1 = Flatten<[[1,2, [3,4]], 4]>


type StringToArr<S extends string, U extends unknown[]> = S extends `${infer Char}${infer R}` ? StringToArr<R, [...U, Char]> : U


type Sa = StringToArr<'我有一个梦想', []>


type ArrToString<Arr extends any[], R extends string = ''> = Arr extends [infer First, ...infer Rest] ? Rest['length'] extends 0 
? `${Rest extends '' ? '' : `${R}`}${First&string}` : ArrToString<Rest, `${R extends '' ? '' : `${R}`}${First&string}`> : R

type R1 = ArrToString<['1', '2']>
