import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";
import { DishService } from "../services/dish.service";

import { Promotion } from "../shared/promotion";
import { PromotionService } from "../services/promotion.service";

import { Leader } from "../shared/leader";
import { LeadersService } from "../services/leaders.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leadersService: LeadersService
  ) {}

  ngOnInit() {
    this.dish = this.dishService.getFearuredDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leadersService.getFeaturedLeader();
  }
}
