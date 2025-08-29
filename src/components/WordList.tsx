import WordCard from './WordCard';

import { WordList } from '@/lib/types/word';

export default function WordListComponent({ words } : { words: WordList}) {
  return (
    <div className="space-y-4">
      {words.map((w) => (
        <WordCard key={w.word} word={w} />
      ))}
    </div>
  );
}
