export class recruitment {

    public type: string;
    public dep: string;
    public exyears: number;
    public jobtitle: string;
    public jobdesc: string;


    constructor(

        type?: string,
        dep?: string,
        exyears?: number,
        jobtitle?: string,
        jobdesc?: string,

    ) {
        this.type = type;
        this.dep = dep;

        this.exyears = exyears;
        this.jobtitle = jobtitle;

        this.jobdesc = jobdesc;
  
    }
}