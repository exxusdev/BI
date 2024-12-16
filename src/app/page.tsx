import { Card, CardHeader, CardTitle } from "../components/ui/card"; 

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className= "sm:ml-14 p-4">
        <div className="grid grid-cols-2 gap-4">
          <section className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl">
                    Total de Vendas
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          </section>
        </div>
        
      </main>
    </div>
  );
}
