// src/store/sizeStore.js
import { defineStore } from 'pinia';
import {piniaInstance} from "@/store/global.js";

const useSizeStore = defineStore('size', {
    state: () => ({
        size: "sm", // Состояние размера
    }),
    actions: {
        toggleDefaultSize() {
            this.size = "sm";
        },
        toggleMediumSize() {
            this.size = "lg";
        }
    }
})(piniaInstance);

export default useSizeStore;
