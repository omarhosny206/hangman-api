import IUser from "../interfaces/user-interface";

declare global {
    namespace Express {
        interface Request {
            user: IUser;

            [key: string]: string;
        }
    }
}
