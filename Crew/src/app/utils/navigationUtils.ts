import { RouterExtensions } from "@nativescript/angular";

export class NavigationUtils {

  static navigate(navItemRoute: string, routerExtensions: RouterExtensions, shouldClearHistory: boolean = true, args: any = null) {
    routerExtensions.navigate([navItemRoute], {
      clearHistory: shouldClearHistory,
      transition: {
        name: "fade"
      },
      queryParams: args
    });
  }
}
