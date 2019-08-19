export class Quote {
    id: number;
    name: string;
    description:string;

    public upvotes: number;
  public downvotes: number;




  constructor() {
    this.upvotes = 0;
    this.downvotes = 0;
  }  
}
