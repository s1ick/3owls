import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/app/**/*.stories.ts'],
  addons: [
    '@storybook/addon-essentials', // Включает docs, controls, actions и viewport
    '@storybook/addon-interactions', // Для интерактивного тестирования
    '@storybook/addon-a11y' // Проверка доступности
  ],
  framework: {
    name: '@storybook/angular-webpack5',
    options: {
      builder: {
        useSWC: true // Включите для ускорения сборки (если не вызывает ошибок)
      }
    },
  },
  docs: {
    autodocs: 'tag', // Автоматическая генерация docs для компонентов с tag: 'autodocs'
    defaultName: 'Documentation' // Имя по умолчанию для docs-страниц
  },
  staticDirs: ['../src/assets'], // Статические файлы
  typescript: {
    check: true, // Включение проверки TypeScript
    reactDocgen: 'react-docgen-typescript' // Для лучшей работы с Angular props
  }
};

export default config;