
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

const Links = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Мои сайты</h1>
          
          <div className="max-w-xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Электрик в Колпино</CardTitle>
                <CardDescription>Другие мои сайты об электромонтажных работах в Колпино</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <a 
                    href="http://elektrikkolpino.bos.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-medium">elektrikkolpino.bos.ru</div>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  
                  <a 
                    href="https://elektrik-kolpino.narod.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-medium">elektrik-kolpino.narod.ru</div>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-center text-sm text-muted-foreground">
                    На этих сайтах вы также можете найти информацию о моих услугах в Колпино
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Электромонтажные работы в Колпино</h2>
              <p className="mb-6">
                На всех моих сайтах представлена информация о профессиональных услугах электрика в Колпино.
              </p>
              <p>
                Для вызова электрика на дом звоните по телефону 8 950 030 88 30.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Links;
