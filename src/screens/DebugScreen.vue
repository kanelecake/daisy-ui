<script setup>

import AccessibilityProvider from "@/components/AccessibilityProvider.vue";
import { Input } from "@/components/ui/input/index.js";
import { Button } from "@/components/ui/button/index.js";
import { Textarea } from "@/components/ui/textarea/index.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AspectRatio } from "@/components/ui/aspect-ratio/index.js";
import { Checkbox } from "@/components/ui/checkbox/index.js";
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const defaultValue = 'item-1'

const accordionItems = [
  { value: 'item-1', title: 'Этот компонент доступный?', content: 'Да, все цело и полностью!' },
  { value: 'item-2', title: 'Он без дизайна?', content: 'Да, вы можете его настроить его как угодно!' },
  { value: 'item-3', title: 'Может ли он быть анимирован?', content: 'Да, делай с этим компонентом что угодно' },
];

const components = [
  {
    title: 'Подссылка 1',
    href: '/',
    description:
      'Описание поддсылки 1',
  },
  {
    title: 'Подссылка 2',
    href: '/',
    description:
      'Описание поддсылки 2',
  }, {
    title: 'Подссылка 3',
    href: '/',
    description:
      'Описание поддсылки 3',
  }, {
    title: 'Подссылка 4',
    href: '/',
    description:
      'Описание поддсылки 4',
  }, {
    title: 'Подссылка 5',
    href: '/',
    description:
      'Описание поддсылки 5',
  }, {
    title: 'Подссылка 6',
    href: '/',
    description:
      'Описание поддсылки 6',
  }, {
    title: 'Подссылка 7',
    href: '/',
    description:
      'Описание поддсылки 7',
  },
]
</script>

<template>
  <AccessibilityProvider class="max-w-[1024px] mx-auto">
    <div class="flex my-4 gap-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Выпадающее меню 1</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li v-for="component in components" :key="component.title">
                  <NavigationMenuLink as-child>
                    <a :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
            <NavigationMenuTrigger>Выпадающее меню 2</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li v-for="component in components" :key="component.title">
                  <NavigationMenuLink as-child>
                    <a :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
              Просто ссылка 3
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div class="flex my-4 gap-2">
      <Input type="email" placeholder="Электронная почта"></Input>
    </div>
    <div class="flex my-4 gap-2">
      <Button>Главная кнопка</Button>
      <Button variant="secondary">Второстепенная кнопка</Button>
      <Button variant="outline">Контурная</Button>
    </div>
    <div class="flex my-4 gap-2">
      <Textarea aria-description="Поле с подробным описанием" placeholder="Поле с подробным описанием"></Textarea>
    </div>
    <div class="flex my-4 gap-2">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline">
            Показать всплывающее окно
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Пример окна</AlertDialogTitle>
            <AlertDialogDescription>
              Это всплывающее окно, позволяет вам соглашаться или отказываться от каких-либо действий на сайте
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction>Продолжить</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>

    <div class="flex my-4 gap-2">
      <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="flex my-4 gap-2">
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Принимаете согласие на использование этой галочки?
        </label>
      </div>
    </div>

    <div class="flex my-4 gap-2">
      <RadioGroup default-value="comfortable">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r1" value="default" />
          <Label for="r1">Вариант 1</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r2" value="comfortable" />
          <Label for="r2">Вариант 2</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r3" value="compact" />
          <Label for="r3">Вариант 3</Label>
        </div>
      </RadioGroup>
    </div>
  </AccessibilityProvider>
</template>

<style scoped></style>