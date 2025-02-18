interface Icon {
  fontIcon: string;
  svgIcon: string;
}

export class SidenavItem {
  public icon: Icon;
  constructor(
    public tooltip: string,
    public route: any[],
    { fontIcon = "", svgIcon = "" }
  ) {
    this.icon = { fontIcon, svgIcon };
  }
}