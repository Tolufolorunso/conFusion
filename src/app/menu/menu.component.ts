import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [
    {
      id: "0",
      name: "Uthappizza",
      image: "/assets/images/uthappizza.png",
      category: "mains",
      featured: true,
      label: "Hot",
      price: "4.99",
      description:
        "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with cer"
    },
    {
      id: "1",
      name: "Zucchipakoda",
      image: "/assets/images/zucchipakoda.png",
      category: "appetizer",
      featured: false,
      label: "",
      price: "1.99",
      description:
        "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with cer"
    },
    {
      id: "2",
      name: "Vadonut",
      image: "/assets/images/vadonut.png",
      category: "appetizer",
      featured: false,
      label: "New",
      price: "1.99",
      description:
        "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with cer"
    },
    {
      id: "3",
      name: "Elaicheese cake",
      image: "/assets/images/elaicheesecake.png",
      category: "dessert",
      featured: false,
      label: "",
      price: "2.99",
      description:
        "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with cer"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
