
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

const Links = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Мои сайты</h1>
          
          <div className="max-w-lg mx-auto grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Электрик Колпино - Официальный сайт</CardTitle>
                <CardDescription>Информация об услугах электрика в Колпино</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">На сайте вы найдете подробную информацию об электромонтажных услугах в Колпино и Колпинском районе.</p>
                <Button asChild className="w-full">
                  <a 
                    href="http://elektrikkolpino.bos.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Перейти на сайт
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Электрик Колпино - Дополнительный ресурс</CardTitle>
                <CardDescription>Расширенная информация о работах электрика</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Ресурс содержит информацию о дополнительных услугах и специальных предложениях электрика в Колпино.</p>
                <Button asChild className="w-full">
                  <a 
                    href="https://elektrik-kolpino.narod.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Перейти на сайт
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Links;
