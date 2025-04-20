
import { Check, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

const Lighting = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Освещение в Колпино</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Монтаж систем освещения любой сложности, установка люстр, светильников и умного освещения
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Услуги по монтажу освещения</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  Правильно организованное освещение не только обеспечивает комфорт, но и создает 
                  атмосферу в вашем доме. Наш электрик в Колпино выполнит профессиональный монтаж 
                  любых осветительных приборов и систем.
                </p>
                <p>
                  Мы работаем с любыми типами светильников: от классических люстр до современных 
                  интеллектуальных систем освещения.
                </p>
              </div>
              
              <div className="mb-8">
                <Tabs defaultValue="residential" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="residential">Жилые помещения</TabsTrigger>
                    <TabsTrigger value="commercial">Коммерческие объекты</TabsTrigger>
                  </TabsList>
                  <TabsContent value="residential" className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-5">
                        <CardContent className="p-0">
                          <h3 className="text-lg font-semibold mb-3">Монтаж осветительных приборов</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Установка потолочных люстр любой сложности</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Монтаж точечных светильников</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Установка настенных бра и торшеров</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Монтаж подсветки мебели и ниш</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="p-5">
                        <CardContent className="p-0">
                          <h3 className="text-lg font-semibold mb-3">Современные решения</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Установка диммеров и систем регулировки яркости</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Монтаж светодиодных лент и контроллеров</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Установка умного освещения</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Монтаж датчиков движения и присутствия</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="commercial" className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-5">
                        <CardContent className="p-0">
                          <h3 className="text-lg font-semibold mb-3">Офисное освещение</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Монтаж освещения рабочих мест</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Установка потолочных светильников</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Монтаж аварийного освещения</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Создание зональных систем освещения</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="p-5">
                        <CardContent className="p-0">
                          <h3 className="text-lg font-semibold mb-3">Магазины и кафе</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Установка акцентного освещения для витрин</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Монтаж трековых светильников</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Создание декоративного освещения</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Светодинамические системы</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Типы освещения для разных помещений</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold">Гостиная</h4>
                    </div>
                    <p className="text-sm">Многоуровневое освещение с основным верхним светом, дополнительными настенными светильниками и декоративной подсветкой</p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold">Кухня</h4>
                    </div>
                    <p className="text-sm">Яркое общее освещение в сочетании с функциональной подсветкой рабочих зон и обеденного стола</p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold">Спальня</h4>
                    </div>
                    <p className="text-sm">Мягкое рассеянное освещение с отдельными источниками света для чтения и общего комфорта</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Преимущества светодиодного освещения</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Экономия электроэнергии до 90% по сравнению с традиционными лампами</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Длительный срок службы - до 50 000 часов непрерывной работы</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Экологическая безопасность - отсутствие ртути и других вредных веществ</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Возможность создания освещения любого цвета и интенсивности</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Процесс монтажа освещения</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Консультация</span> - Выезд электрика на дом в Колпино для оценки объекта и обсуждения пожеланий
                  </li>
                  <li>
                    <span className="font-medium">Разработка проекта</span> - Создание схемы расположения световых точек
                  </li>
                  <li>
                    <span className="font-medium">Монтаж проводки</span> - Прокладка кабелей с соблюдением всех норм
                  </li>
                  <li>
                    <span className="font-medium">Установка креплений</span> - Монтаж закладных для светильников
                  </li>
                  <li>
                    <span className="font-medium">Подключение</span> - Установка и подключение осветительных приборов
                  </li>
                  <li>
                    <span className="font-medium">Настройка</span> - Программирование систем управления освещением
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
                      Для монтажа освещения или консультации звоните по телефону
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
                        <AccordionTrigger>Сколько стоит установка люстры?</AccordionTrigger>
                        <AccordionContent>
                          Стоимость установки люстры зависит от ее сложности и веса. 
                          Базовая цена за установку простой люстры составляет от 500 рублей. 
                          Монтаж сложной или тяжелой люстры от 1000 рублей.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Можно ли установить светильники на натяжной потолок?</AccordionTrigger>
                        <AccordionContent>
                          Да, на натяжной потолок можно установить практически любые светильники. 
                          Для этого используются специальные закладные платформы, которые монтируются 
                          до установки натяжного полотна. Мы сотрудничаем с компаниями, устанавливающими 
                          натяжные потолки.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Как выбрать тип светильников для помещения?</AccordionTrigger>
                        <AccordionContent>
                          Выбор светильников зависит от функционального назначения помещения, его размеров и стиля интерьера. 
                          Для рабочих зон рекомендуется яркое направленное освещение, для зон отдыха - мягкий рассеянный свет. 
                          Наш электрик поможет подобрать оптимальное решение.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Что такое умное освещение и стоит ли его устанавливать?</AccordionTrigger>
                        <AccordionContent>
                          Умное освещение - это система, позволяющая управлять светильниками с помощью смартфона 
                          или голосовых помощников. Вы можете создавать сценарии освещения, настраивать яркость и цвет, 
                          а также экономить электроэнергию. Такие системы особенно удобны в больших помещениях и при 
                          создании различных световых сценариев.
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
              Для монтажа освещения и установки светильников звоните по номеру 8 950 030 88 30
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

export default Lighting;
