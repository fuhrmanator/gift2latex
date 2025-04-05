## Installation

`npm install -g gift2latex`

## Usage

```
$ gift2latex --help
Options:
      --help       Show help                                           [boolean]
      --version    Show version number                                 [boolean]
  -L, --lyxexam    generate child document (LaTeX) for use in
                   https://github.com/fuhrmanator/lyx-layouts
  -M, --markdown   format markdown with https://www.ctan.org/pkg/markdown
  -Q, --quarto     output in quarto for use with exam-filter.lua
  -s, --shuffle    shuffle multiple-choice answers
  -n, --nestLevel  set the nesting level for questions: none, part, subpart
                          [choices: "none", "part", "subpart"] [default: "none"]
  -p, --points     set the number of points for each question
  -i, --input                                                         [required]

Examples:
  gift2latex.js -i a.gift -s -p 1 >         converts GIFT questions file to
  a_include.tex                             LaTeX for inclusion in exam-class
                                            document
```
