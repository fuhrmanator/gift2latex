#!/usr/bin/env node

import { parse, GIFTQuestion } from "gift-pegjs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers"; // Import helpers for parseSync
import { readFileSync } from 'fs';
import { convertQuizToLaTeX } from "./convertQuizToLaTeX";

const argv = yargs(hideBin(process.argv))
    .example('$0 -i a.gift -s -p 1 > a_include.tex', 'converts GIFT questions file to LaTeX for inclusion in exam-class document')
    .alias('i', 'input')
    .nargs('i', 1)
    .alias('s', 'shuffle')
    .alias('p', 'points')
    .alias('L', 'lyxexam')
    .alias('M', 'markdown')
    .alias('Q', 'quarto')
    .alias('n', 'nestLevel')
    .describe('L', 'generate child document (LaTeX) for use in https://github.com/fuhrmanator/lyx-layouts')
    .describe('M', 'format markdown with https://www.ctan.org/pkg/markdown')
    .describe('Q', 'output in quarto for use with exam-filter.lua')
    .describe('s', 'shuffle multiple-choice answers')
    .nargs('n', 1)
    .describe('n', 'set the nesting level for questions: none, part, subpart')
    .default('n', 'none')
    .choices('n', ['none', 'part', 'subpart'])
    .nargs('p', 1)
    .describe('p', 'set the number of points for each question')
    .demandOption('input')
    .parseSync();

try {
    const questions = readFileSync(argv.input as string, 'utf8');
    const quiz: GIFTQuestion[] = parse(questions)
    console.log(convertQuizToLaTeX(quiz, argv.points as string, argv.shuffle as boolean, argv.lyxexam as boolean, argv.markdown as boolean, argv.quarto as boolean, argv.nestLevel as string));

} catch (error) {
    console.error("" + error)
    process.exit(1)
}
