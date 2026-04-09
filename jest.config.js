// jest.config.js
const { createDefaultPreset } = require('ts-jest');

module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    ...createDefaultPreset().transform,
  },
  // Esto es clave para que Jest transforme correctamente los archivos .ts y .js de node_modules cuando sea necesario
  transformIgnorePatterns: [
    'node_modules/(?!(@types|supertest|express)/)'
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: [
    '**/__tests__/**/*.test.(ts|js)',
    '**/?(*.)+(spec|test).(ts|js)'
  ],
  // Ignoramos los tests en la compilación de TypeScript (ya lo tienes en tsconfig)
};