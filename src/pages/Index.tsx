import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: 'Rocket',
      title: 'Быстрый старт',
      description: 'Начните обучение сразу после регистрации. Гибкий график занятий под ваш ритм жизни.'
    },
    {
      icon: 'Users',
      title: 'Экспертные преподаватели',
      description: 'Учитесь у практикующих специалистов с многолетним опытом в индустрии.'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Получите официальный сертификат о прохождении курса с международным признанием.'
    },
    {
      icon: 'Clock',
      title: 'Доступ 24/7',
      description: 'Изучайте материалы в удобное время. Все лекции доступны в записи навсегда.'
    }
  ];

  const courses = [
    {
      title: 'Веб-разработка',
      description: 'Полный курс от основ HTML/CSS до современных фреймворков',
      duration: '6 месяцев',
      level: 'Начальный',
      image: 'https://cdn.poehali.dev/projects/7625370d-9a9f-4492-ba71-0b029fdbaa08/files/9dc9284a-f759-43bd-b2a1-08a91994f604.jpg'
    },
    {
      title: 'Дизайн интерфейсов',
      description: 'Создание современных UI/UX дизайнов с нуля до профи',
      duration: '4 месяца',
      level: 'Средний',
      image: 'https://cdn.poehali.dev/projects/7625370d-9a9f-4492-ba71-0b029fdbaa08/files/11ad3858-cfc8-4320-9584-79e406bcf166.jpg'
    },
    {
      title: 'Аналитика данных',
      description: 'Python, SQL и инструменты визуализации для работы с данными',
      duration: '5 месяцев',
      level: 'Начальный',
      image: 'https://cdn.poehali.dev/projects/7625370d-9a9f-4492-ba71-0b029fdbaa08/files/ad479a2f-2426-47d1-980b-4c84244f7a91.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Смирнова',
      role: 'Выпускница курса веб-разработки',
      text: 'Благодаря курсу я смогла сменить профессию и устроиться в IT-компанию. Преподаватели объясняют сложные вещи простым языком.',
      rating: 5
    },
    {
      name: 'Михаил Петров',
      role: 'Студент курса по аналитике',
      text: 'Отличная структура программы и поддержка кураторов. Все знания сразу применяю на практике в своих проектах.',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      role: 'Дизайнер интерфейсов',
      text: 'Прошла курс по UX/UI и получила много практических навыков. Портфолио, созданное во время обучения, помогло найти работу.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Нужны ли предварительные знания для старта?',
      answer: 'Нет, большинство наших курсов начинается с основ. Мы предлагаем программы для всех уровней подготовки.'
    },
    {
      question: 'Как проходит обучение?',
      answer: 'Обучение включает видеолекции, практические задания, проверку домашних работ и обратную связь от кураторов. Также проводятся онлайн-вебинары и групповые созвоны.'
    },
    {
      question: 'Можно ли учиться в своем темпе?',
      answer: 'Да, все материалы доступны в записи. Вы можете изучать их в удобное время, но для достижения лучших результатов рекомендуем следовать расписанию.'
    },
    {
      question: 'Какие документы я получу после обучения?',
      answer: 'После успешного завершения курса вы получаете сертификат о прохождении обучения, который можно указать в резюме и профиле LinkedIn.'
    },
    {
      question: 'Есть ли помощь с трудоустройством?',
      answer: 'Да, мы помогаем составить резюме, подготовиться к собеседованиям и рекомендуем лучших выпускников нашим партнерам-работодателям.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              Образование, которое меняет жизнь
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Онлайн-курсы от практикующих экспертов. Получите востребованную профессию и начните карьеру в IT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Выбрать курс
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Бесплатная консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
              Популярные курсы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите программу, которая подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-2xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">{course.description}</CardDescription>
                  <Button className="w-full">
                    Узнать подробнее
                    <Icon name="ChevronRight" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-center mb-16">
            Отзывы выпускников
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-center mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Ответы на популярные вопросы об обучении
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border-none shadow-md rounded-xl px-6"
                >
                  <AccordionTrigger className="font-heading text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-muted-foreground">
                Остались вопросы? Напишите нам, и мы с радостью поможем
              </p>
            </div>
            <Card className="border-none shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, чем мы можем помочь..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">info@courses.ru</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-sm text-muted-foreground">Москва, Тверская 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Образовательная платформа. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;