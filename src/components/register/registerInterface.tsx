export interface User {
    name: string | null;
    email: string | null;
    isRemove: boolean | null;
    role: roleEnum | null;
    avatar: string | null;
    age: number | null;
    password: string | null;

};
export enum roleEnum {
    admin = 'admin',
    user = 'user'

}
export const initUser: User = {
    email: "test@test.com",
    password: "123123",
    name: "test",
    role: roleEnum.user,
    isRemove: false,
    avatar: null,
    age: null,

}


export enum statusTheme {
    light = 'light',
    dark = 'dark'
}