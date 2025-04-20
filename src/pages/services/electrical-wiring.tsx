
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

const ElectricalWiring = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Монтаж и замена электропроводки в Колпино</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">Профессиональные услуги электрика по электропроводке в квартирах и домах</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">О услуге</h2>
                <p className="mb-4">
                  Предлагаю профессиональные услуги по монтажу новой электропроводки и замене старой в квартирах, домах и офисах в Колпино и Колпинском районе. Выполняю работы любой сложности с соблюдением всех норм ПУЭ.
                </p>
                <p>
                  Электропроводка – это основа электрической системы любого помещения, от качества её монтажа зависит безопасность и надёжность электроснабжения. Доверьте эту работу профессиональному электрику с большим опытом работы в Колпино.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Виды работ по электропроводке</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Полная замена электропроводки в квартире или доме</li>
                  <li>Монтаж новой проводки при ремонте или строительстве</li>
                  <li>Частичная замена отдельных участков электропроводки</li>
                  <li>Штробление стен под электропроводку</li>
                  <li>Прокладка кабеля в гофрорукаве или кабель-канале</li>
                  <li>Монтаж скрытой и открытой проводки</li>
                  <li>Установка распределительных коробок</li>
                  <li>Подключение к электрощиту</li>
                  <li>Диагностика и поиск неисправностей в проводке</li>
                </ul>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Преимущества работы со мной</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-2">Опыт и профессионализм</h3>
                      <p>Более 10 лет опыта электромонтажных работ в Колпино и Колпинском районе.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-2">Качественные материалы</h3>
                      <p>Использую только сертифицированные материалы с гарантией производителя.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-2">Гарантия на работы</h3>
                      <p>Предоставляю гарантию на все выполненные электромонтажные работы.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-2">Оперативность</h3>
                      <p>Выполняю работы в согласованные сроки, без задержек и простоев.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Этапы работы</h2>
                <ol className="space-y-4 list-decimal pl-5">
                  <li>
                    <strong>Консультация и осмотр объекта</strong>
                    <p>Выезд на объект в Колпино, оценка объема работ, консультация по техническим вопросам.</p>
                  </li>
                  <li>
                    <strong>Составление плана и сметы</strong>
                    <p>Разработка схемы электропроводки, расчет необходимых материалов, составление сметы работ.</p>
                  </li>
                  <li>
                    <strong>Монтажные работы</strong>
                    <p>Выполнение электромонтажных работ согласно плану с соблюдением всех норм безопасности.</p>
                  </li>
                  <li>
                    <strong>Тестирование и сдача работы</strong>
                    <p>Проверка работоспособности всех элементов системы, измерение сопротивления изоляции, сдача работы.</p>
                  </li>
                </ol>
              </section>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Вызвать электрика в Колпино</h3>
                    <p className="mb-4">Для заказа услуг по монтажу или замене электропроводки в Колпино звоните:</p>
                    <div className="text-center mb-4">
                      <ContactButton className="w-full" />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Работаю ежедневно с 8:00 до 22:00
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Когда нужна замена проводки?</h3>
                    <ul className="space-y-2">
                      <li>✓ Электропроводке более 20-25 лет</li>
                      <li>✓ Частые перебои в работе электроприборов</li>
                      <li>✓ Мерцание света при включении техники</li>
                      <li>✓ Нагрев розеток и выключателей</li>
                      <li>✓ Срабатывание автоматов защиты</li>
                      <li>✓ Проводка без заземления</li>
                      <li>✓ Ремонт квартиры или дома</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Районы обслуживания</h3>
                    <p>Работаю во всем Колпинском районе Санкт-Петербурга:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Колпино</li>
                      <li>• Металлострой</li>
                      <li>• Понтонный</li>
                      <li>• Саперный</li>
                      <li>• Усть-Ижора</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ElectricalWiring;
