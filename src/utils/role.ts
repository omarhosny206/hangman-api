export default class Role {
    static ADMIN: string = "admin";
    static INTERVIEWER: string = "interviewer";
    static INTERVIEWEE: string = "interviewee";
    static ALL: string[] = [this.ADMIN, this.INTERVIEWER, this.INTERVIEWEE];
}
