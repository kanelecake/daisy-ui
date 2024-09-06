<script setup>
import AccessibilityProvider from "@/components/AccessibilityProvider.vue";
import {Search} from "lucide-vue-next";
import {Button} from "@/components/ui/button/index.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel/index.js";
import {Card, CardContent, CardDescription} from "@/components/ui/card/index.js";
import Autoplay from 'embla-carousel-autoplay';

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
  stopOnFocusIn: true,
});

const components = [
  {
    title: 'Пример под пункта 1',
    href: '/',
    description:
        'Это ссылка в никуда номер 1',
  },
  {
    title: 'Пример под пункта 2',
    href: '/',
    description:
        'Это ссылка в никуда номер 2',
  },
  {
    title: 'Пример под пункта 3',
    href: '/',
    description:
        'Это ссылка в никуда номер 3',
  },
  {
    title: 'Пример под пункта 4',
    href: '/',
    description:
        'Это ссылка в никуда номер 4',
  },
  {
    title: 'Пример под пункта 5',
    href: '/',
    description:
        'Это ссылка в никуда номер 5',
  },
  {
    title: 'Пример под пункта 6',
    href: '/',
    description:
        'Это ссылка в никуда номер 6',
  },
]
</script>

<template>
  <AccessibilityProvider class="max-w-[1040px] mx-auto">
    <header class="flex justify-between items-center font-medium px-2 py-6 border-b">
      <a href="/">Министерство социальной политики<br>Нижегородской области</a>
      <Button size="icon" variant="secondary">
        <Search></Search>
        <span class="visually-hidden">Поиск по сайту</span>
      </Button>
    </header>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Министерство</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <a
                      :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Пособия и выплаты</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <a
                      :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Социальное обслуживание</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <a
                      :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
            Жилье
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
            Социальный контракт
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
            Учреждение
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
            Новости
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="grid grid-cols-2 grid-rows-2 gap-4 max-w-[1024px] mx-auto py-2">
      <div class="w-[520px]">
        <Carousel
            class="w-[380px] max-h-[320px] mx-auto"
            :plugins="[plugin]"
            @mouseenter="plugin.stop"
            @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];"
        >
          <CarouselContent>
            <CarouselItem title="В Год семьи в Нижегородской области в десятый раз провели благотворительную акцию «Скоро в школу»">
              <a href="/" class="text-2xl">В Год семьи в Нижегородской области в десятый раз провели благотворительную акцию «Скоро в школу»</a>
            </CarouselItem>
            <CarouselItem title="В Городецком районе стартовал финальный этап образовательного акселератора для подростков «Ритм Молодых»">
              <a href="/" class="text-2xl">В Городецком районе стартовал финальный этап образовательного акселератора для подростков «Ритм Молодых»</a>
            </CarouselItem>
            <CarouselItem title="Новые многофункциональные спортивные площадки появились в двух детских домах Нижегородской области">
              <a href="/" class="text-2xl">Новые многофункциональные спортивные площадки появились в двух детских домах Нижегородской области</a>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div class="row-span-2 flex-col flex flex-col gap-4">
        <p>
          <a href="/">Информация о результатах рассмотрения предложений на участие в отборе на выплату компенсаций расходов поставщикам соцуслуг, включенным в реестр поставщиков соцуслуг Нижегородской области, но не участвующих в выполнении госзадания за июнь 2024 г.</a><br>
        </p>
        <p>
          <a href="/">Обзор обращений граждан в министерство социальной политики Нижегородской области за июль 2024 года</a><br>
        </p>
        <p>
          <a href="/">Объявление об отборе поставщиков социальных услуг на предоставление субсидии на выплату компенсаций расходов поставщикам, включенным в реестр поставщиков социальных услуг Нижегородской области, но не участвующим в выполнении государственного задания</a><br>
        </p>
      </div>
      <div >3</div>
    </div>
  </AccessibilityProvider>
</template>
