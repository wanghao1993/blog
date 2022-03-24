type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R] ? T : never;

type res = First<[1,2,3]>;



// 

const a = {
    a: 1,
    b: 2
}

type mapType<T> = {
    [Key in keyof T] ?: T[Key]
}

type res2 = mapType<{
    a: number,
    b: number
}>

const b: res2 = {
    a: 1,
    b: 2
}
b.a
function paramsIsNotNecessary(s: string, t?: string): string {
    return s
}
function paramsIsNotNecessary1(s: string, t = 'b'): string {
    return s + t
}
interface Person {
    name: string,
    age: number
}

interface Person {
    name: string,
    age: number
}

const c: Person = {
    name: 'xx',
    age: 11
}

function printPerson(p: Person) {
    console.log(p.name, p.age)
}

printPerson(c)