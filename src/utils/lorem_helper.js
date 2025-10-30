import {LoremIpsum} from "lorem-ipsum";

/**
 * `lorem` is a helper instance of the `LoremIpsum` class for generating
 * placeholder text in development or testing.
 *
 * Configuration:
 * - Sentences per paragraph: 3 to 6
 * - Words per sentence: 4 to 10
 *
 * Available methods:
 * - `lorem.generateWords(n)` → generates `n` words
 * - `lorem.generateSentences(n)` → generates `n` sentences
 * - `lorem.generateParagraphs(n)` → generates `n` paragraphs
 *
 * Example usage:
 * ```js
 * import { lorem } from './utils/lorem_helper';
 *
 * // Generate 1 paragraph
 * const paragraph = lorem.generateParagraphs(1);
 * console.log(paragraph);
 *
 * // Generate 5 sentences
 * const sentences = lorem.generateSentences(5);
 * console.log(sentences);
 *
 * // Generate 10 words
 * const words = lorem.generateWords(10);
 * console.log(words);
 * ```
 *
 * Notes:
 * - Compatible with browser, Node.js, and React Native.
 * - For older Node versions, use `lorem-ipsum@1.0.6`.
 * - Official documentation: [https://www.npmjs.com/package/lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum?utm_source=chatgpt.com)
 */
export const lorem = new LoremIpsum({
    sentencesPerParagraph: { max: 6, min: 3 },
    wordsPerSentence: { max: 10, min: 4 },
});