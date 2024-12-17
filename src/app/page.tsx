import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"; 
import { DollarSign, Ticket, Users } from "lucide-react"

import ChartOverview from "@/src/components/chart"; 
import Sales from "@/src/components/sales"; 

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className= "sm:ml-14 p-4">
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total de Vendas
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total de vendas em 90 dias
              </CardDescription>
            </CardHeader>

            <CardContent className="text-base sm:text-lg font-bold">
              <p>R$40.000</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Ticket Médio de Vendas
                </CardTitle>
                <Ticket className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total em 90 dias
              </CardDescription>
            </CardHeader>

            <CardContent className="text-base sm:text-lg font-bold">
              <p>R$5.500</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Novos Clientes
                </CardTitle>
                <Users className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total em 90 dias
              </CardDescription>
            </CardHeader>

            <CardContent className="text-base sm:text-lg font-bold">
              <p>51</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Número de Vendas Realizadas
                </CardTitle>
                <Users className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Em 90 dias
              </CardDescription>
            </CardHeader>

            <CardContent className="text-base sm:text-lg font-bold">
              <p>51</p>
            </CardContent>
          </Card>
        </section>        

        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview/>
          <Sales />
        </section>

      </main>
    </div>
  );
}
