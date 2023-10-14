export const inputs = {
  measurements: [
    { label: 'Ширина в м', inputId: 'floatWinputIdth' },
    { label: 'Длина в м', inputId: 'floatLength' },
    { label: 'Высота под ферму в м', inputId: 'floatHeight' },
    { label: 'Ширина ворот (фронтон) в м', inputId: 'floatGatesWinputIdth' },
  ],
  additionalInfo: [
    { defaultValue: 'Шаг торцевых', selectionOptions: ['3 м', '4 м'] },
    { defaultValue: 'Кол-во ворот 6х5', selectionOptions: ['1 шт', '2 шт', 'Не выбрано'] },
  ],
};
