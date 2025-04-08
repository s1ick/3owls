// product.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductComponent } from './product.component';
import { userEvent, within, expect } from '@storybook/test';
import { Product } from '../../models/product.interface';

/**
 * Фабрика для создания тестовых продуктов
 * Гарантирует что все обязательные поля будут заполнены
 */
const createProduct = (overrides: Partial<Product> = {}): Product => ({
  id: 1,
  image: '1',
  description: 'Вельветовый пуховик',
  oldPrice: 7999,
  newPrice: 5999,
  sizes: ['S', 'M', 'L'],
  isFavorite: false,
  ...overrides
});

// Метаданные компонента
const meta: Meta<ProductComponent> = {
  title: 'Components/Product Card',
  component: ProductComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
      toggleFavorite: args.toggleFavorite || (() => {}),
    },
  }),
  argTypes: {
    product: {
      control: 'object',
      description: 'Данные продукта',
      table: {
        type: { summary: 'Product' },
        defaultValue: { summary: 'undefined' },
      },
    },
    toggleFavorite: {
      action: 'toggleFavorite',
      description: 'Событие при клике на избранное',
    },
  },
  args: {
    product: createProduct(), // Дефолтные данные
  },
};

export default meta;
type Story = StoryObj<ProductComponent>;

/**
 * Стандартное состояние карточки
 */
export const Default: Story = {};

/**
 * Товар в избранном
 */
export const Favorite: Story = {
  args: {
    product: createProduct({ isFavorite: true }),
  },
};

/**
 * Товар со скидкой
 */
export const WithDiscount: Story = {
  args: {
    product: createProduct({
      oldPrice: 5000,
      newPrice: 3500,
    }),
  },
};

/**
 * Товар с ограниченными размерами
 */
export const FewSizes: Story = {
  args: {
    product: createProduct({
      sizes: ['S', 'XL'],
    }),
  },
};

/**
 * Интерактивный тест - переключение избранного
 */
export const ToggleFavorite: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /избранное/i });
    
    await userEvent.click(button);
    await expect(args.toggleFavorite).toHaveBeenCalled();
  },
};

/**
 * Интерактивный тест - выбор размера
 */
export const SelectSize: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sizeButton = canvas.getByText('M');
    
    await userEvent.click(sizeButton);
    await expect(sizeButton).toHaveClass('selected');
  },
};

/**
 * Состояние для мобильных устройств
 */
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};