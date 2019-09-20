import { Injectable } from "@angular/core";
// import { Leader } from "../shared/leader";

import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: "root"
})
export class LeadersService {
  constructor() {}

  getLeaders() {
    return LEADERS;
  }

  getFeaturedLeader() {
    return LEADERS.filter(leader => leader.featured)[0];
  }
}
