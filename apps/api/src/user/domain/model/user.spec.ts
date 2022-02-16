import { User } from "../model/user"

test("user constructor test", () => {

    const user = User.create("correo@correo.com", "David Salcedo", "password", "ASL", "CHO");

    expect(user.mail).toBe("correo@correo.com");
    expect(user.userName).toBe("David Salcedo");
    expect(user.password).toBe("password");
    expect(user.companyName).toBe("ASL");
    expect(user.positionName).toBe("CHO");
})


test("user constructor without parameters test", () => {

    const user = User.create("correo@gmail.com", "David Salcedo", "password");

    expect(user.mail).toBe("correo@gmail.com");
    expect(user.userName).toBe("David Salcedo");
    expect(user.password).toBe("password");
    expect(user.companyName).toBe("");
    expect(user.positionName).toBe("")
})


test("user constructor when mail is empty test", () => {

    const f = () => {
        const user = User.create("", "name", "password")
    }
    expect(f).toThrow(Error("empty user mail error"))
    
})


test("user constructor when mail format is wrong test", () => {

    const f = () => {
        const user = User.create("davidSalcedo@tigre-de.bengala.bellako", "salcedo", "contraseña")
    }
    expect(f).toThrow(Error("wrong user mail format error"))
    
})


test("user constructor when name is empty test", () => {

    const f = () => {
        const user = User.create("correo@correo.com", "", "password")
    }
    expect(f).toThrow(Error("empty user name error"))
    
})


test("invalid user password test", () => {

    const f = () => {
        const user = User.create("correo@gmail.com", "David Salcedo", "");
    }
    expect(f).toThrow(Error("empty user password error"));

    const g = () => {
        const user = User.create("correo@gmail.com", "David Salcedo", "a");
    }
    expect(g).toThrow(Error("password too short error"));

    const h = () => {
        const user = User.create("correo@gmail.com", "David Salcedo", "aaaaaaaaaaaaaaaaaaaaaa");
    }
    expect(h).toThrow(Error("password too long error"));
    
})