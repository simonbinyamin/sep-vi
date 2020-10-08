export class task {
    public subteamrole: string;
    public dep: string;
    public plan: string;
  result: string;


    constructor(

        subteamrole?: string,
        dep?: string,
        plan?: string,
    ) {
        this.subteamrole = subteamrole;
        this.dep = dep;

        this.plan = plan;

    }
}