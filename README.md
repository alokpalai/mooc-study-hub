# MOOC Study Hub: Remote Sensing

A small offline study website for the NPTEL course *Remote Sensing: Principles and Applications*. It turns the course assignments and lecture notes into practice tests and a revision sheet.

No frameworks, no build step, no internet needed. It is plain HTML, CSS and JavaScript.

## Features

- **Practice test**: random questions from the assignment bank. A new random set appears on every refresh. Filter by assignment (A1–A12) or topic, choose the number of questions, or practise only questions you got wrong before. Gives a score and an explanation for every answer.
- **Instant feedback test**: click an answer and see the result straight away: the correct answer turns green and a wrong pick turns red.
- **Notes**: lecture slides in reading order, each with a summary and likely exam points, with a "mark as revised" tick.
- **Revision sheet**: high-yield exam points, a formula sheet, comparison tables, a summary of every note, and search. Can be printed or saved as PDF.
- **Exam concepts**: key points per topic, drawn from the assignment questions.
- **Progress**: accuracy by topic, recent scores and your weakest questions (saved in your browser).

## Run it

You need Python 3 (any recent version).

**Windows:** double-click `start.bat`. It starts a local server and opens http://localhost:8000.

**Any system:**

```bash
python serve.py
```

then open http://localhost:8000.

Tip: always open the site through the same address, because your saved progress is stored per browser and per address.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | The whole app: layout, styling and logic |
| `questions.js` | Question bank (assignment MCQs with answers and explanations) |
| `notes.js` | Note list in reading order, with summaries and exam points |
| `concepts.js` | Exam concepts per topic |
| `revision.js` | Formula sheet, comparison tables and high-yield points |
| `scan_notes.py` | Rebuilds the note list from `notes/*.pdf` and keeps existing summaries |
| `serve.py` | Local web server (sends no-cache headers so edits show up on refresh) |
| `start.bat` | One-click launcher for Windows |

## Adding content

**A question** goes at the end of `questions.js`:

```js
{ a: 13, topic: "Topic name", q: "Question text?",
  o: ["Option a", "Option b", "Option c", "Option d"],
  ans: [1],            // index of the correct option(s): 0 = a, 1 = b ...
  e: "Short explanation." }
```

**Notes:** put PDFs in a `notes/` folder named `01-name.pdf`, `02-name.pdf` and so on, then run `python scan_notes.py`. Add the summary and exam points for each note in `notes.js`.

## Not included in this repository

The lecture slides (`notes/`) and the original assignment PDFs (`assignments/`) are not committed. They are course material and are excluded in `.gitignore`. Without the PDFs the site still works; the Notes tab shows the summaries and a message instead of the embedded slide.

## Credits

Course: *Remote Sensing: Principles and Applications* by Dr. R. Eswar, IIT Bombay (NPTEL). Questions and slides belong to their authors; this project is for personal study.
