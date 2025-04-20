
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import ContactButton from "@/components/ContactButton";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Герой-секция */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                Электрик в Колпино
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Профессиональные электромонтажные работы любой сложности в Колпино и Колпинском районе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contacts">Связаться</Link>
                </Button>
                <ContactButton className="text-lg" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция услуг */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Электропроводка</CardTitle>
                  <CardDescription>Монтаж и замена проводки</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Профессиональный монтаж новой электропроводки или замена старой с соблюдением всех норм безопасности.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/services/electrical-wiring">Подробнее</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Электрощиты</CardTitle>
                  <CardDescription>Установка и сборка щитов</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Сборка и установка электрощитов любой сложности, от квартирных до распределительных щитов для частных домов.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/services/electrical-panels">Подробнее</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Освещение</CardTitle>
                  <CardDescription>Монтаж светильников и люстр</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Установка осветительных приборов любого типа: люстры, светильники, точечное освещение и светодиодные ленты.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/services/lighting">Подробнее</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Секция преимуществ */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Опыт работы</h3>
                <p>Более 10 лет опыта в сфере электромонтажных работ в Колпино</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-2">Качество</h3>
                <p>Гарантия на все виды электромонтажных работ</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
                <p>Быстрый выезд электрика на дом в Колпино в день обращения</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция с картой */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Мы работаем в Колпино</h2>
            <GoogleMap />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
