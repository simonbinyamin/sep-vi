export class financial {

    public dep: string;
    public ref: string;
    public amount: number;
    public reason: string;
  result: string;


    constructor(

        dep?: string,
        ref?: string,
        amount?: number,
        reason?: string

    ) {
        this.dep = dep;
        this.ref = ref;
        this.amount = amount;
        this.reason = reason;
    }
}