//Create Class as a template for Weekdays
//define array upfront - define type of array by adding class as an objecte
var weekdays: Array<menu> = [];
class menu {
    day: string;
    preCourse: string;
    mainCourse: string;
    dessert: string;
    price: number;
    // image: string;
    constructor(weekday: string, pre: string, main:string, dessert:string, price:number) {
                this.day = weekday;
                this.preCourse = pre;
                this.mainCourse = main;
                this.dessert = dessert;
                this.price = price;
                // this.image = image;

                weekdays.push(this);
    }
    menuFunction() {
        return `<div class="card m-3 border-0" style="width: 18rem;">
        // <img src="${this.image}" class="card-img-top" alt="...">

        <div class="card-body">
          <h5 class="card-title">${this.day}</h5>
          <p class="card-text">${this.preCourse}</p>
          <p class="card-text">${this.mainCourse}</p>
          <p class="card-text">${this.dessert}</p>
          <p class="card-text">${this.price}</p>
          <a href="#" class="btn btn-secondary">Reserve Menu</a>
        </div>
      </div>`
    }
}

//Create Variables for each day, Variable definition not neccessary
new menu ("Monday", "Tomato Soup", "Vegan Lasagne", "Chocolate Brownies", 20);
new menu ("Tuesday", "Garlic Cream Soup", "Vegan Bolognese", "Panna Cotta", 22);
new menu ("Wednesday", "Mixed Salad", "Vegan Curry", "Hazelnut Marzipan Cake", 18);
new menu ("Thurday", "Carot-Ginger Soup", "Vegan Burger with French Fries", "Vegan Pancakes", 17);
new menu ("Friday", "Mushroom Soup", "Tofu Masala", "Cherry Cake", 21);
new menu ("Saturday", "Miso Soup", "Crunchy Pumpkin", "Vegan Cookies", 25);
new menu ("Sunday", "Zuccini Soup", "Vegan Gyros", "Carrot Cake", 23);

var selectorEl = document.getElementsByClassName("row")[0] as HTMLElement;

for (let val of weekdays) {
    selectorEl.innerHTML += val.menuFunction();
}
