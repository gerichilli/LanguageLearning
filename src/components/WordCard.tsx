import { CEFR_COLORS } from "@/lib/constants/colors";
import { Word } from "@/lib/types/word";
import Badge from "@/ui/Badge";

export default function WordCard({ word }: { word: Word }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200" key={word.word}>
      <div className="flex items-center gap-2">
        <h2 className="font-decoration text-xl md:text-2xl font-medium mb-2 text-[#3F6B5C]">{word.word}</h2>
        <span className="cursor-pointer text-xl opacity-50 text-[#3F6B5C]">♪</span>
      </div>
      <p className="ipa text-gray-500 text-sm mb-2">{word.ipa}</p>
      <div className="mb-4">
        <p className="text-gray-700 mb-4">{word.meaning[0].vi}</p>
        <p className="text-gray-700 font-semibold">{word.meaning[0].example_en}</p>
        <p className="italic text-gray-800">{word.meaning[0].example_vi}</p>
      </div>
      <p className="text-sm text-gray-600">
        <Badge className={CEFR_COLORS[word.cefr_level]}>CEFR Level {word.cefr_level}</Badge>
      </p>
    </div>
  );
}
