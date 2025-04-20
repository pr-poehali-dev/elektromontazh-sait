
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

const ElectricalWiring = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Электропроводка в Колпино</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональный монтаж и замена электропроводки в квартирах, домах и коммерческих помещениях
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Наши услуги по монтажу электропроводки</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  Мы предлагаем полный комплекс работ по монтажу, замене и ремонту электропроводки в Колпино и Колпинском районе.
                  Наши квалифицированные электрики выполнят все работы быстро, качественно и в соответствии с ПУЭ.
                </p>
                <p>
                  Вызов электрика на дом в Колпино осуществляется в день обращения. Работаем без выходных и праздников.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-5">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-3">Новая проводка</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Разработка проекта электроснабжения</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Монтаж открытой и скрытой проводки</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Штробление стен под проводку</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Укладка кабель-каналов</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="p-5">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-3">Замена проводки</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Демонтаж старой проводки</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Замена алюминиевых проводов на медные</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Замена розеток и выключателей</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Организация новых точек подключения</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Расценки на электромонтажные работы</h3>
                <p className="mb-3">
                  Стоимость работ зависит от сложности проекта, типа помещения и объема работ. 
                  Для получения точной цены вызовите электрика в Колпино для оценки объема работ.
                </p>
                <p>
                  Примерная стоимость основных работ:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Монтаж новой проводки: от 350 ₽/м.п.</li>
                  <li>Штробление стен: от 250 ₽/м.п.</li>
                  <li>Установка розетки: от 350 ₽/шт.</li>
                  <li>Установка выключателя: от 300 ₽/шт.</li>
                  <li>Сборка и установка электрощита: от 5000 ₽</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Этапы работ</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Консультация и оценка</span> - Выезд электрика на дом в Колпино для оценки объема работ
                  </li>
                  <li>
                    <span className="font-medium">Составление сметы</span> - Расчет стоимости материалов и работ
                  </li>
                  <li>
                    <span className="font-medium">Закупка материалов</span> - Приобретение качественных комплектующих
                  </li>
                  <li>
                    <span className="font-medium">Выполнение работ</span> - Монтаж проводки согласно проекту
                  </li>
                  <li>
                    <span className="font-medium">Тестирование</span> - Проверка работоспособности системы
                  </li>
                  <li>
                    <span className="font-medium">Сдача работы</span> - Демонстрация выполненных работ заказчику
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <Card className="mb-6 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Вызвать электрика в Колпино</h3>
                    <p className="mb-6">
                      Для вызова электрика на дом в Колпино и расчета стоимости работ звоните по номеру
                    </p>
                    <ContactButton className="w-full mb-4" />
                    <p className="text-sm text-center">
                      Работаем ежедневно с 8:00 до 22:00 в Колпино и Колпинском районе
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Часто задаваемые вопросы</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Сколько времени занимает замена проводки?</AccordionTrigger>
                        <AccordionContent>
                          Время замены электропроводки зависит от площади помещения и сложности работ. 
                          В среднем, полная замена проводки в двухкомнатной квартире занимает 3-5 дней.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Нужно ли отключать электричество во всем доме?</AccordionTrigger>
                        <AccordionContent>
                          При замене проводки потребуется отключение электричества. 
                          Мы стараемся организовать работу так, чтобы минимизировать дискомфорт 
                          и можем выполнять работы поэтапно по комнатам.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Какие материалы используются?</AccordionTrigger>
                        <AccordionContent>
                          Мы используем только сертифицированные материалы: медный провод ВВГнг-LS, 
                          современные автоматические выключатели, качественные розетки и выключатели.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Даете ли вы гарантию на работы?</AccordionTrigger>
                        <AccordionContent>
                          Да, мы предоставляем гарантию 1 год на все виды электромонтажных работ 
                          и 5 лет на используемые материалы при условии правильной эксплуатации.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-lg text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Вызвать электрика в Колпино</h2>
            <p className="text-lg mb-6">
              Для вызова электрика на дом в Колпино звоните по номеру 8 950 030 88 30
            </p>
            <div className="flex justify-center">
              <ContactButton className="text-lg" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ElectricalWiring;
