//描述data.js的產品型別
//Vue只能用實體型別，不能用型別別名
export class Product{
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public category:string,
        public price:number,
        public img:string,
        public firstQuantity:number,
        public quantity:number
    ){}
}

export class OrderLine{
    constructor(
        public product:Product,
        public quantity:number
    ){}
    //getter用法，類似computed，對值進行一些處理
    get total():number{
        return this.product.price * this.quantity
    }
}

export class Order{
    private lines:OrderLine[]=[]
    //?:表示initialLines為可選擇參數
    constructor(initialLines?:OrderLine[]){
        if (initialLines){
            this.lines.push(...initialLines)
        }
    }
    public addProduct(prod:Product,quantity:number){
        const index=this.lines.findIndex(ol=>ol.product.id===prod.id)
        if(index>-1){
            if(quantity===0){
                this.removeProduct(prod.id)
            }else{
                this.lines[index].quantity+=quantity
            }
        }else{
            this.lines.push(new OrderLine(prod,quantity))
        }
    }
    public removeProduct(id:number){
        this.lines=this.lines.filter(ol=>ol.product.id!==id)
    }
    get orderLines():OrderLine[]{
        return this.lines
    }
    get productCount():number{
        return this.lines.reduce((total,ol)=>total+=ol.quantity,0)
    }
    get total():number{
        return this.lines.reduce((total,ol)=>total+=ol.total,0)
    }
}