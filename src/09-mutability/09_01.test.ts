const incrAge = (newUser: UserType) => {
    newUser.age = newUser.age + 1
}

type UserType = {
    name: string
    age: number
}

interface userWithAddress extends UserType {
    address: { title: string }
}

test('big test', () => {
    var user: UserType =
        {
            name: 'Eric',
            age: 21,
        }
// type UserType = ReturnType<typeof user>
    const admins = user


    incrAge(user)

    expect(user).toBe(22)
})
test('array test', () => {
    var user: UserType[] = [
        {
            name: 'Eric',
            age: 21
        }, {
            name: 'Eric',
            age: 21
        }]
// type UserType = ReturnType<typeof user>
    const admins = user

    admins.push({name: 'Bandugan', age: 2})

    expect(user[2]).toEqual({name: 'Bandugan', age: 2})
})
test('value type test', () => {
    var user = 100
// type UserType = ReturnType<typeof user>
    var adminsCount = user

    adminsCount++

    // expect(user[2]).toEqual({name: 'Bandugan', age: 2})
})
test('refbig test', () => {
    var user: userWithAddress =
        {
            name: 'Eric',
            age: 21,
            address: {
                title: 'Minsk'
            }
        }
    // let  addr = user.address
    var user2: userWithAddress = {
        name: 'Natasha',
        age: 23,
        address: user.address
    }
    user2.address.title = 'kanary'
    expect(user.address.title).toBe('kanary')
})

test('ref array test', () => {
    var user: userWithAddress = {
        name: 'Eric',
        age: 21,
        address: {
            title: 'Minsk'
        }
    }
    // let  addr = user.address
    var user2: userWithAddress = {
        name: 'Natasha',
        age: 23,
        address: user.address
    }
    // {name: 'Katya', age: 32, address: user.address}
    const users = [user, user2,]
    const admin = [user, user2,]
    // users[0].add
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    admin[0].name = 'Dmitry'
    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
    // expect(user.address.title).toBe('kanary')
})
test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort()
    expect(letters).toEqual(['a','c','d','e','z'])
})

export default {}