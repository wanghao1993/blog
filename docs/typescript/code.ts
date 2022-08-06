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

type Person = B & C
const persona: Person = {
  name: 'xiaoming',
  age: 18,
  area: 'shanghai',
  female: 1,
}

type A = string | number

type S = string & number