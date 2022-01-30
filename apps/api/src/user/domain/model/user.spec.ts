import { User } from "../model/user"

test("user constructor test", () => {

    const user = User.create("David Salcedo", "correo@correo.com", "ASL", "CHO");

    expect(user.userName).toBe("David Salcedo");
    expect(user.mail).toBe("correo@correo.com")
    expect(user.companyName).toBe("ASL");
    expect(user.positionName).toBe("CHO")
})


test("user constructor without parameters test", () => {

    const user = User.create("David Salcedo", "correo@gmail.com");

    expect(user.userName).toBe("David Salcedo");
    expect(user.mail).toBe("correo@gmail.com");
    expect(user.companyName).toBe("");
    expect(user.positionName).toBe("")
})


test("user constructor when name and mail is empty test", () => {

    const f = () => {

        const user = User.create("", "")
    }

    expect(f).toThrow(Error("empty user mail error") && Error("empty user name error"))
    
})


test("user constructor when mail format is wrong", () => {

    const f = () => {

        const user = User.create("salcedo", "davidSalcedo@tigre-de.bengala.bellako")
    }

    expect(f).toThrow(Error("wrong user mail format error"))
    
})