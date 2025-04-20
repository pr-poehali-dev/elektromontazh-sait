
import { Check, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

const ElectricalPanels = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Электрощиты в Колпино</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональная сборка, установка и модернизация электрощитов любой сложности
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Услуги по электрощитам от электрика в Колпино</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  Современный электрощит — это сердце электрической системы вашего дома или квартиры. 
                  От его правильной сборки и установки зависит безопасность и надежность работы всей электросети.
                </p>
                <p>
                  Наш опытный электрик в Колпино выполнит профессиональную сборку и установку электрощитов
                  любой сложности с использованием качественных комплектующих.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-5">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-3">Квартирные щиты</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Замена старых автоматов на новые</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Установка УЗО и дифавтоматов</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Разделение нагрузки по группам</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Защита от скачков напряжения</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="p-5">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-3">Щиты для частных домов</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Распределительные щиты большой мощности</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Учет и распределение электроэнергии</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Автоматика управления освещением</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Защита от грозовых перенапряжений</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Преимущества современных электрощитов</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold">Безопасность</h4>
                    </div>
                    <p className="text-sm">Современные автоматы мгновенно отключают питание при коротком замыкании</p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold">Надежность</h4>
                    </div>
                    <p className="text-sm">Качественные компоненты обеспечивают долгую безотказную работу</p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold">Удобство</h4>
                    </div>
                    <p className="text-sm">Логичное разделение цепей позволяет быстро найти нужный автомат</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Когда необходима модернизация электрощита?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Частое срабатывание автоматов при включении бытовой техники</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Установка нового энергоемкого оборудования (электроплита, водонагреватель)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Обнаружение признаков перегрева проводки или автоматов</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Отсутствие в щите современных устройств защиты (УЗО, дифавтоматов)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Возраст электрощита более 15-20 лет</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Процесс установки электрощита</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Оценка потребностей</span> - Выезд электрика на дом в Колпино для оценки мощности потребителей
                  </li>
                  <li>
                    <span className="font-medium">Проектирование</span> - Разработка схемы электрощита с учетом всех потребителей
                  </li>
                  <li>
                    <span className="font-medium">Подбор оборудования</span> - Закупка качественных компонентов от проверенных производителей
                  </li>
                  <li>
                    <span className="font-medium">Сборка щита</span> - Профессиональная сборка щита согласно проекту
                  </li>
                  <li>
                    <span className="font-medium">Установка</span> - Монтаж щита и подключение всех линий
                  </li>
                  <li>
                    <span className="font-medium">Тестирование</span> - Проверка работы всех автоматов и защитных устройств
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
                      Для установки электрощита или консультации звоните по телефону
                    </p>
                    <ContactButton className="w-full mb-4" />
                    <p className="text-sm text-center">
                      Работаем ежедневно с 8:00 до 22:00 
                      в Колпино и Колпинском районе
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Часто задаваемые вопросы</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Сколько стоит установка электрощита?</AccordionTrigger>
                        <AccordionContent>
                          Стоимость установки электрощита зависит от его сложности и количества групп потребителей. 
                          Базовая стоимость сборки и установки квартирного щита начинается от 5000 рублей, 
                          для частного дома от 10000 рублей.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Как долго займет установка?</AccordionTrigger>
                        <AccordionContent>
                          Монтаж квартирного электрощита обычно занимает от 2 до 6 часов в зависимости 
                          от сложности. Установка распределительного щита для частного дома может занять 
                          от 6 до 12 часов.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Какое оборудование вы используете?</AccordionTrigger>
                        <AccordionContent>
                          Мы используем только сертифицированное оборудование от проверенных производителей: 
                          ABB, Schneider Electric, IEK, Legrand. Конкретный производитель выбирается 
                          в зависимости от требований и бюджета заказчика.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Нужно ли согласование в энергоснабжающей организации?</AccordionTrigger>
                        <AccordionContent>
                          При замене внутриквартирного щита обычно не требуется согласование. 
                          При модернизации вводного щита или увеличении мощности потребуется 
                          согласование с энергоснабжающей организацией. Мы поможем подготовить 
                          всю необходимую документацию.
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
              Для консультации или вызова электрика на дом в Колпино звоните по номеру 8 950 030 88 30
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

export default ElectricalPanels;
