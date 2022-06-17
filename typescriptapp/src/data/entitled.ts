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