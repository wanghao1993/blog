function getPropsValue<T extends object, Key extends keyof T>(obj: T, key: Key): T[Key] {
    return obj[key]
}

const a = {
    b: 1
}

const b = getPropsValue(a, 'b')