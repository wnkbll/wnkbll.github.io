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
        id: "hu",
        img: huImg,
        title: "Венгрия",
    },
    {
        id: "ro",
        img: roImg,
        title: "Румыния",
    },
    {
        id: "bg",
        img: bgImg,
        title: "Болгария",
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
        title: "Крах биполярного мира",
        description:
            "Конец Холодной войны, роспуск Организации Варшавского договора. Распад СССР.",
    },
    {
        title: "Возвращение в Европу",
        description: "Начат процесс интеграции стран ЦВЕ в Европейский Союз и НАТО.",
    },
    {
        title: "Цена свободы",
        description:
            "Переход к рынку принес свободу, но и тяжелые испытания. Регион выбрал демократический путь.",
    },
];
