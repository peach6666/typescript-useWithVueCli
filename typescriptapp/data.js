//假資料
module.exports=function(){
    return{
        //產品資料
        products:[
            {
                id:1,
                name:"Kayak",
                category:"WaterSports",
                description:"A boat for one person",
                price:275,
                img:"kayak",
                firstQuantity:1,
                quantity:100
            },
            {
                id:2,
                name:"Lifejacket",
                category:"WaterSports",
                description:"Protective and fashionable",
                price:48.95,
                img:"lifejacket",
                firstQuantity:1,
                quantity:37
            },
            {
                id:3,
                name:"Soccer Ball",
                category:"Soccer",
                description:"FIFA-approved size and weight",
                price:19.50,
                img:"soccerball",
                firstQuantity:1,
                quantity:20
            },
            {
                id:4,
                name:"Corner Flags",
                category:"Soccer",
                description:"Give your playing field a professional touch",
                price:34.95,
                img:"cornerflag",
                firstQuantity:1,
                quantity:97
            },
            {
                id:5,
                name:"Stadium",
                category:"Soccer",
                description:"Flat-packed 35,000-seat stadium",
                price:79500,
                img:"stadium",
                firstQuantity:1,
                quantity:95
            },
            {
                id:6,
                name:"Thinking Cap",
                category:"Chess",
                description:"Improve brain efficiency by 75%",
                price:16,
                img:"thinkingcap",
                firstQuantity:1,
                quantity:81
            },
            {
                id:7,
                name:"Unsteady Chair",
                category:"Chess",
                description:"Secretly give your opponent a disadvantage",
                price:29.95,
                img:"unsteadychair",
                firstQuantity:1,
                quantity:70
            },
            {
                id:8,
                name:"Human Chess Board",
                category:"Chess",
                description:"A fun game for family",
                price:75,
                img:"chessboard",
                firstQuantity:1,
                quantity:90
            },
            {
                id:9,
                name:"Bling Bling King",
                category:"Chess",
                description:"Gold-plated,diamond-studded King",
                price:1200,
                img:"blingking",
                firstQuantity:1,
                quantity:85
            },
        ],
        //購物車
        orders:[]
    }
}