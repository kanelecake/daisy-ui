<script setup>
import { CaseSensitive, CaseUpper, CaseLower, Glasses } from "lucide-vue-next";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group/index.js";
</script>

<template>
  <div :class="'accessibility-provider ' + useSizeStore.size">
    <div class="flex items-center justify-between border-b-[1px] py-1 px-1">
      <div class="flex gap-2 items-center">
        <Glasses aria-disabled="true" class="h-6 w-6" />
        <h1>Специальные возможности</h1>
      </div>

      <!-- Настройки шрифта -->
      <ToggleGroup type="single" @update:modelValue="updateSize">
        <ToggleGroupItem value="default" aria-label="Сделать шрифт размером 100%">
          <CaseLower class="h-6 w-6" />
        </ToggleGroupItem>
        <ToggleGroupItem value="medium" aria-label="Сделать шрифт размером 150%">
          <CaseSensitive class="h-6 w-6" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import useSizeStore from "@/store/sizeStore.js";

const sizeStore = useSizeStore;
export default {
  methods: {
    updateSize(size) {
      if (size === "default") {
        console.log(size);
        sizeStore.toggleDefaultSize();
      } else {
        console.log(size);
        sizeStore.toggleMediumSize();
      }
    }
  }
}
</script>