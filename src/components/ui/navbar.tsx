
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="bg-primary w-full py-4">
      <div className="container mx-auto">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Главная
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <Link 
                    to="/services/electrical-wiring" 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline",
                      "outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Электропроводка</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Монтаж и замена электропроводки в Колпино
                    </p>
                  </Link>
                  <Link 
                    to="/services/electrical-panels" 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline",
                      "outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Электрощиты</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Установка и сборка электрощитов
                    </p>
                  </Link>
                  <Link 
                    to="/services/lighting" 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline",
                      "outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Освещение</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Монтаж светильников и люстр
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contacts" className={navigationMenuTriggerStyle()}>
                  Контакты
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/links" className={navigationMenuTriggerStyle()}>
                  Мои сайты
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
