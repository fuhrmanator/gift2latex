## Installation

`npm install`

Tested with `ts-node` so you may need to install that globally.

## Usage

> Note that -s is the shuffle option for MCQ

```bash
ts-node src/gift2latex.ts -i sampleQuiz.gift -points 2 -s > questions_include.tex
```

This pipes the Exam style questions to a file that is included in a main document, e.g., `SampleQuiz.tex`.
