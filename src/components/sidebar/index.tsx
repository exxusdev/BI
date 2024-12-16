import { ChartAreaIcon, Group, Home, Package, PanelBottom, Settings2, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/src/components/ui/button"

import {
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/src/components/ui/tooltip"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/src/components/ui/sheet"


export function Sidebar(){
    return(
      <div className="flex w-full flex-col bg-muted/40">

        <aside 
            className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex"
        >
            <nav className="flex flex-col items-center gap-4 px-2 py-5">
                <TooltipProvider>
                    <Link
                      href="#"
                      className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
                    >
                      <Package className="h-4 w-4" />
                      <span className="sr-only">Menu Avatar</span>
                    </Link>

                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href="#"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Dashboard</span>                            
                        </Link>                        
                      </TooltipTrigger>    
                      <TooltipContent side="right">
                        Dash
                      </TooltipContent>                    
                    </Tooltip>                    
                </TooltipProvider>
            </nav>
        </aside>

        <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
          <header className="stick top-0 z-30 flex h-14 items-center border-b bg-background gap-4 sm:static sm:border-0 sm:bg-transparent ms:px-6"
        >
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelBottom className="w-5 h-5" />
                        <span className="sr-only" >Menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="sm:max-w-x">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                      prefetch={false}
                    >
                      <Package className="h-5 w-5 transition-all" />
                      <span className="sr-only">Logo</span>
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      prefetch={false}
                    >
                      <Home className="h-5 w-5 transition-all" />
                      Página Inicial
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      prefetch={false}
                    >
                      <ChartAreaIcon className="h-5 w-5 transition-all" />
                      Estatíticas
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      prefetch={false}
                    >
                      <Group className="h-5 w-5 transition-all" />
                      Seções
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      prefetch={false}
                    >
                      <Users className="h-5 w-5 transition-all" />
                      Usuários
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      prefetch={false}
                    >
                      <Settings2 className="h-5 w-5 transition-all" />
                      Configurações
                    </Link>

                  </nav>
                </SheetContent>
            </Sheet>
          </header>  
        </div>
      </div>
    )
}