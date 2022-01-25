import { User } from "../model/user"

test("user constructor test", () => {

    const user = User.create("David Salcedo", "ASL", "CHO");

    expect(user.userName).toBe("David Salcedo");
    expect(user.companyName).toBe("ASL");
    expect(user.positionName).toBe("CHO")
})


test("user constructor without parameters test", () => {

    const user = User.create("David Salcedo");

    expect(user.userName).toBe("David Salcedo");
    expect(user.companyName).toBe("");
    expect(user.positionName).toBe("")
})


test("user constructor when name is empty test", () => {

    const f = () => {

        const user = User.create("")
    }

    expect(f).toThrow(Error("empty user name error"))
})