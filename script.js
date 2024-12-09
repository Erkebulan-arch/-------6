const Shop = {
name: `E-Shop`,
phoneNumber: `8(775)-741-96-12`,
products: [
    { productName: 'нан', category: [`булка нан, ұн, қара нан`], price: 550,  stock: 80},
    { productName: 'алма', category: [`алмурт, банан, жүзім`], price: 1200,  stock: 110},
    { productName: 'көкеніс', category: [`қияр, пияз, капуста`], price: 1500,  stock: 90},
    { productName: 'су', category: [`кола, ванта, спрайт`], price: 2500,  stock: 130},
    { productName: 'ет', category: [`туық ет, сиыр ет, жылқы ет`], price: 9500,  stock: 120},
]

}
function changeShopName ()  {
let name = prompt('Дүкен Атауын Өзгерту');



}                                               

function changePhoneNumber() {
    let name = prompt('Телефон Нөмірін Өзгерту');
} 


function listProductNames() {
    return Shop(this.productName)
}


    
    


changeShopName();
changePhoneNumber();
listProductNames();




