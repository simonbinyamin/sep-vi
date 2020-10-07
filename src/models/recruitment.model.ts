export class recruitment {

    public type: string;
    public dep: string;
    public exyears: number;
    public jobtitle: string;
    public jobdesc: string;
    public id: string;

    constructor(

        type?: string,
        dep?: string,
        exyears?: number,
        jobtitle?: string,
        jobdesc?: string,
        id?: string,

    ) {
        this.type = type;
        this.dep = dep;

        this.exyears = exyears;
        this.jobtitle = jobtitle;

        this.jobdesc = jobdesc;
        this.id = id;
    }
}