import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/dashboard",
    title: "Banking Accounts",
    rtlTitle: "لوحة القيادة",
    icon: "icon-bank",
    class: ""
  },
  {
    path: "/icons",
    title: "Credit",
    rtlTitle: "الرموز",
    icon: "icon-coins",
    class: ""
  },
  {
    path: "/maps",
    title: "Insurance",
    rtlTitle: "خرائط",
    icon: "icon-money-coins",
    class: "" },
    {
      path: "/tables",
      title: "Product List",
      rtlTitle: "قائمة الجدول",
      icon: "icon-wallet-43",
      class: ""
    },
    {
      path: "/typography",
      title: "Statistics",
      rtlTitle: "طباعة",
      icon: "icon-chart-bar-32",
      class: ""
    },  
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
