import { CefrLevel } from './common';
import { WordList } from './word';

export interface Book {
  title: string;
  coverImage: string;
  level: CefrLevel;
}

export interface BookDetail extends Book {
  colorSchema?: ColorSchema;
  words: WordList;
}

export interface BookListItem extends Book {
  slug: string;
  author: string;
  wordsCount: number;
  process: BookProcess;
}

export type BookList = BookListItem[]

export interface ColorSchema {
  primary: string;
  secondary: string;
}

export enum BookProcess {
  COMPLETED = 'Completed',
  READING = 'Reading',
  NOT_STARTED = 'Not started',
}
