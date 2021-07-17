#!/usr/bin/env node

import { parse, GIFTQuestion, QuestionType } from "gift-pegjs";
import yargs, { Argv, exit } from "yargs";
import { readFileSync } from 'fs';
import { convertQuizToLaTeX } from "./convertQuizToLaTeX";

const argv = yargs
    .example('$0 -i a.gift -s -p > a_include.tex', 'converts GIFT questions file to LaTeX for inclusion in exam-class document')
    .alias('i', 'input')
    .nargs('i', 1)
    .alias('s', 'shuffle')
    .alias('p', 'points')
    .alias('L', 'lyxexam')
    .alias('M', 'markdown')
    .describe('L', 'generate child document (LaTeX) for use in https://github.com/fuhrmanator/lyx-layouts')
    .describe('M', 'format markdown with https://www.ctan.org/pkg/markdown')
    .describe('s', 'shuffle multiple-choice answers')
    .nargs('p', 1)
    .describe('p', 'set the number of points for each question')
    .demandOption('input').argv;

try {
    const questions = readFileSync(argv.input as string, 'utf8');
    const quiz: GIFTQuestion[] = parse(questions)
    console.log(convertQuizToLaTeX(quiz, argv.points as string, argv.shuffle as boolean, argv.lyxexam as boolean, argv.markdown as boolean))

} catch (error) {
    console.error("" + error)
    process.exit(1)
}