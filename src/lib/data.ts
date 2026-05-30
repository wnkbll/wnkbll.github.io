import bgImg from "$lib/assets/bulgaria.png";
import czImg from "$lib/assets/czech.png";
import gdrImg from "$lib/assets/gdr.png";
import huImg from "$lib/assets/hungary.png";
import poImg from "$lib/assets/poland.png";
import roImg from "$lib/assets/romania.png";
import type { Tile, Trigger, Consequence } from "$lib/interfaces";

export const TILES: Tile[] = [
    {
        id: "po",
        img: poImg,
        title: "Польша",
    },
    {
        id: "hu",
        img: huImg,
        title: "Венгрия",
    },
    {
        id: "gdr",
        img: gdrImg,
        title: "ГДР",
    },
    {
        id: "cz",
        img: czImg,
        title: "Чехословакия",
    },
    {
        id: "bg",
        img: bgImg,
        title: "Болгария",
    },
    {
        id: "ro",
        img: roImg,
        title: "Румыния",
    },
];

export const TRIGGERS: Trigger[] = [
    {
        title: "Экономический тупик",
        description:
            "Тотальный дефицит товаров, внешние долги, неэффективность плановой модели и технологическое отставание от Запада.",
    },
    {
        title: "Кризис легитимности",
        description:
            "Жесткая цензура, подавление прав человека и усталость общества от партийной номенклатуры.",
    },
    {
        title: "«Доктрина Синатры»",
        description:
            "Исторический отказ Михаила Горбачева от военного вмешательства СССР. Странам ОВД позволили «петь по-своему» и самим выбирать свой путь.",
    },
];

export const CONSEQUENCES: Consequence[] = [
    {
        title: "Геополитические изменения",
        description:
            "Крах Организации Варшавского договора. Распад Совета экономической взаимопомощи. Объединение Германии.",
    },
    {
        title: "Разворот на Запад",
        description:
            "Внешнеполитический вектор бывших соцстран резко изменился. Начался долгий путь интеграции в европейские структуры: большинство стран позже вступили в НАТО и Европейский союз.",
    },
    {
        title: "Интеграция в мировую экономику",
        description:
            "Переход к рыночной экономике. Открытие границ привело к притоку иностранных инвестиций.",
    },
];
