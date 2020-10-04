export class event {

    public record: string;
    public name: string;
    public from: Date;
    public to: Date;
    public attend: number;
    public budget: number;
    public prefs: string[];



    constructor(

        record?: string,
        name?: string,
        from?: Date,
        to?: Date,
        attend?: number,
        budget?: number,
        prefs?: string[],

    ) {
        this.record = record;
        this.name = name;

        this.from = from;
        this.to = to;

        this.attend = attend;
        this.budget = budget;
        this.prefs = prefs;
  
    }
}