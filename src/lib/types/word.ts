import { CefrLevel } from './common';

export interface Word {
  word: string;
  ipa: string;
  meaning: Meaning[];
  cefr_level: CefrLevel;
  favorite: boolean;
}

export type WordList = Word[]

export interface Meaning {
  vi: string;
  example_en: string;
  example_vi: string;
  note?: string;
}
