import IUser from "./user-interface";

export default interface ILoginResponse {
    user : IUser
    token: string;
}
