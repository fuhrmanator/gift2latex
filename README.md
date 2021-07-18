## Installation

`npm install -g git2latex`

## Usage

```
$ gift2latex --help
Options:
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
  -L, --lyxexam   generate child document (LaTeX) for use in
                  https://github.com/fuhrmanator/lyx-layouts
  -M, --markdown  format markdown with https://www.ctan.org/pkg/markdown
  -s, --shuffle   shuffle multiple-choice answers
  -p, --points    set the number of points for each question
  -i, --input                                                         [required]

Examples:
  gift2latex.js -i a.gift -s -p >           converts GIFT questions file to
  a_include.tex                             LaTeX for inclusion in exam-class
                                            document
```
