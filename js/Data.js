// data 1
let img = [
  "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
];
let fruits = [
  "Grapes",
  "Grapes",
  "Raspberries",
  "Apricots",
  "Banana",
  "Oranges",
  "Raspberries",
  "Grapes",
];
let text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
];
let kg = [
  "$4.99 / kg",
  "$4.99 / kg",
  "$4.99 / kg",
  "$4.99 / kg",
  "$4.99 / kg",
  "$4.99 / kg",
  "$4.99 / kg",
  "$4.99 / kg",
];

for (let i = 0; i < fruits.length; i++) {
  products.innerHTML += `
    <div class="border border-[#ffb524] lg:w-[23%] rounded-2xl overflow-hidden relative hover:shadow-[0 0 55px rgba(0, 0, 0, 0.4)] hover:shadow-2xl duration-200">
        <img class="w-full object-cover hover:scale-110 duration-300" src="${img[i]}" alt="">
        <div class="p-5 text-center flex flex-col gap-3">
            <h5 class="text-2xl text-[#45595b] font-bold">${fruits[i]}</h5>
            <p class="text-[#747d88]">${text[i]}</p>
            <div class="flex flex-row justify-between items-center gap-2">
                <h6 class="text-xl text-[#45595b] font-bold">${kg[i]}</h6>
                <span class="border border-[#ffb524] hover:bg-[#ffb524] duration-700 p-1 rounded-2xl text-[#81c408] hover:text-white"><a class="fa-solid fa-bag-shopping text-[#81c408]"></a>Add to cart</span>
            </div>
        </div>
        <span class="absolute left-2 top-2 border-0 w-[80px] py-1 text-center rounded-[10px] text-white bg-[#ffb524]">Fruits</span>
    </div>
 `;
}

// data 2
let img2 = [
  "https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-1.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-3.png",
  "https://themewagon.github.io/fruitables/img/vegetable-item-4.jpg",
];
let fruits2 = ["Parsely", "Parsely", "Banana", "Bell Papper"];
let text2 = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
];
let kg2 = ["$4.99 / kg", "$4.99 / kg", "$7.99 / kg", "$7.99 / kg"];

for (let i = 0; i < fruits2.length; i++) {
  organic.innerHTML += `
    <div class="border border-[#ffb524] lg:w-[25%] rounded-2xl overflow-hidden relative hover:shadow-[0 0 55px rgba(0, 0, 0, 0.4)] hover:shadow-2xl duration-200">
                    <img class="w-full object-cover hover:scale-110 duration-300" src="${img2[i]}" alt="">
                    <div class="p-5 flex flex-col gap-3">
                        <h5 class="text-2xl text-[#45595b] font-bold">${fruits2[i]}</h5>
                        <p class="text-[#747d88]">${text2[i]}</p>
                        <div class="flex flex-row justify-between items-center gap-2">
                        <h6 class="text-xl text-[#45595b] font-bold">${kg2[i]}</h6>
                        <span class="border border-[#ffb524] hover:bg-[#ffb524] duration-700 p-1 rounded-2xl text-[#81c408] hover:text-white"><a class="fa-solid fa-bag-shopping text-[#81c408]"></a>Add to cart</span>
                    </div>
                </div>
                <span class="absolute right-2 top-2 border-0 w-[90px] py-1 text-center rounded-[10px] text-white bg-[#81c408]">Vegetables</span>
            </div>
    `;
}

// data 3
let img3 = [
  "https://themewagon.github.io/fruitables/img/best-product-1.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-2.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-3.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-4.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-5.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-6.jpg",
];
let fruits3 = [
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
];
let kg3 = ["3.12 $", "3.12 $", "3.12 $", "3.12 $", "3.12 $", "3.12 $"];

for (let i = 0; i < fruits3.length; i++) {
  bestseller.innerHTML += `
    <div class="border-0 w-full lg:w-[31%] rounded-2xl py-5 flex flex-row justify-around items-center bg-[#f4f6f8]">
                    <div><img class="border-0 w-[150px] h-[150px] rounded-[50%]" src="${img3[i]}"></div>
                    <div class="flex flex-col gap-3">
                        <h5 class="text-xl font-bold text-[#45595b] hover:text-[#81c408] duration-500">${fruits3[i]}</h5>
                        <div class="flex flex-row">
                            <a class="fa-solid fa-star text-[#81c408]"></a>
                            <a class="fa-solid fa-star text-[#81c408]"></a>
                            <a class="fa-solid fa-star text-[#81c408]"></a>
                            <a class="fa-solid fa-star text-[#81c408]"></a>
                            <a class="fa-regular fa-star text-[#747d88]"></a>
                        </div>
                            <h5 class="text-xl text-[#45595b] font-bold">${kg3[i]}</h5>
                        <span class="border border-[#ffb524] hover:bg-[#ffb524] duration-700 p-1 rounded-2xl text-[#81c408] hover:text-white text-center"><a class="fa-solid fa-bag-shopping text-[#81c408]"></a>Add to cart</span>
                    </div>
                </div>
    `;
}

// data 4
let img4 = [
  "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
];
let fruits4 = [
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
];
let kg4 = ["3.12 $", "3.12 $", "3.12 $", "3.12 $"];

for (let i = 0; i < fruits4.length; i++) {
  bestseller2.innerHTML += `
    <div class="border-0 w-full lg:w-[25%] flex flex-col items-center justify-center gap-3 pb-3 rounded-2xl overflow-hidden">
                    <img src="${img4[i]}" alt="">
                    <h5 class="text-xl text-[#45595b] font-bold">${fruits4[i]}</h5>
                    <div class="flex flex-row">
                        <a class="fa-solid fa-star text-[#81c408]"></a>
                        <a class="fa-solid fa-star text-[#81c408]"></a>
                        <a class="fa-solid fa-star text-[#81c408]"></a>
                        <a class="fa-solid fa-star text-[#81c408]"></a>
                        <a class="fa-regular fa-star text-[#45595b]"></a>
                    </div>
                    <h5 class="text-xl text-[#45595b] font-bold">${kg4[i]}</h5>
                    <span class="border border-[#ffb524] hover:bg-[#ffb524] duration-700 p-1 rounded-2xl text-[#81c408] hover:text-white text-center"><a class="fa-solid fa-bag-shopping text-[#81c408]"></a>Add to cart</span>
                </div>
    `;
}
