
import { Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>
          
          <div className="max-w-xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Электрик в Колпино</CardTitle>
                <CardDescription>Профессиональные электромонтажные работы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <p className="font-medium">Телефон для связи:</p>
                    <p className="text-lg">8 950 030 88 30</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <p className="font-medium mb-2">WhatsApp</p>
                    <p>8 950 030 88 30</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <p className="font-medium mb-2">Telegram</p>
                    <p>8 950 030 88 30</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-center text-sm text-muted-foreground">
                    Работаем ежедневно с 8:00 до 22:00 в Колпино и Колпинском районе
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Как вызвать электрика в Колпино</h2>
              <p className="mb-6">
                Чтобы вызвать электрика на дом в Колпино, просто позвоните по номеру 
                <span className="font-bold"> 8 950 030 88 30</span> или напишите в WhatsApp/Telegram.
              </p>
              <p>
                Оперативный выезд электрика в день обращения. Работаем во всем Колпинском районе СПб.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
