import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private descriptions = [
    'Вельветовый пуховик',
    'Утеплённое пальто с поясом',
    'Кожаная косуха',
    'Джинсы скинни',
    'Кашемировый свитер',
    'Спортивный костюм',
    'Платье-миди с цветочным принтом',
    'Бомбер с вышивкой',
    'Рубашка в клетку',
    'Шерстяное пальто',
    'Джинсы mom-фасон',
    'Тренч классический',
    'Футболка oversize',
    'Кардиган крупной вязки',
    'Юбка-карандаш',
    'Парка зимняя',
    'Брюки чинос',
    'Толстовка с капюшоном',
    'Платье-футляр',
    'Куртка-аляска',
    'Свитшот с принтом',
    'Костюм тройка',
    'Шорты джинсовые',
    'Блуза с жабо',
    'Пуховый жилет',
    'Джинсы с высокой талией',
    'Пиджак оверсайз',
    'Комбинезон джинсовый',
    'Туника с поясом',
    'Куртка косуха',
    'Брюки карго',
    'Топ с открытыми плечами',
    'Пальто демисезонное',
    'Джемпер с V-образным вырезом',
    'Юбка плиссе',
    'Ветровка с капюшоном',
    'Рубашка оверсайз',
    'Жилет меховой',
    'Брюки с широким поясом',
    'Платье-рубашка',
    'Куртка стёганая',
    'Кардиган на пуговицах',
    'Шорты классические',
    'Топ на бретелях',
    'Плащ дождевик',
    'Свитер с высоким горлом',
    'Юбка-макси',
    'Бомбер светоотражающий',
    'Футболка поло',
    'Костюм спортивный',
    'Кожаные лоферы',
    'Сумка кросс-боди'
  ];

  private sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  generateProducts(count: number) {
    return Array.from({ length: count }, (_, i) => {
      const oldPrice = Math.floor(Math.random() * 4001) + 1000; 
      const availableSizes = this.getRandomSizes();
      
      return {
        id: i + 1,
        image: `${Math.floor(Math.random() * 8) + 1}`, 
        description: this.descriptions[i % this.descriptions.length],
        oldPrice,
        newPrice: Math.floor(Math.random() * (oldPrice - 500)) + 500, 
        sizes: availableSizes,
        isFavorite: false
      };
    });
  }

  private getRandomSizes(): string[] {
    const count = Math.floor(Math.random() * 3) + 2; 
    const shuffled = [...this.sizes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).sort();
  }
}