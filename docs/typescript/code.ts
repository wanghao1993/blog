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

