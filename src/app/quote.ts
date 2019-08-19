export class Quote {
  public id: number;
    public name: string;
    public description:string;
    public date: number;
    public upvotes: number;
  public downvotes: number;
  




  constructor() {
    this.upvotes = 0;
    this.downvotes = 0;
    this.date= new Date();
  }  
}
