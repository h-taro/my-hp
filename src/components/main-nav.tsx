import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  return (
    <nav className="w-full flex items-center justify-between py-4">
      <Link href="/" className="font-bold text-xl">
        Taro Hirai
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className={cn("px-3 py-2 rounded-md text-sm font-medium")}
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                href="#contact"
                className={cn("px-3 py-2 rounded-md text-sm font-medium")}
              >
                Contact
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
