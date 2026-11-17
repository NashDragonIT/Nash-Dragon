# Prompt Log – CampusHub Student Information Portal

> Update this log to match the exact techniques and frameworks your class discussed. The examples below document the approaches used while planning and building this project.

## Entry 1 – Context and role prompting
- **Technique or framework:** Role + context prompting
- **Purpose:** Ask the AI to act as a frontend development assistant and understand the project.
- **Exact prompt:** "Act as a beginner-friendly frontend development assistant. I am creating a Student Information Portal for my CC211 finals laboratory examination. The project must use HTML, CSS, JavaScript, and Bootstrap, be frontend only, and include at least three pages or substantial sections, three useful JavaScript features, a validated form, responsive design, and separate files. Suggest a manageable project plan."
- **Result summary:** The AI suggested a dashboard, student records page, and announcements page.
- **Evaluation:** The plan matched the required scope. The project does not require a backend.
- **Improvement:** Keep the feature set small enough to test and demonstrate during the examination.

## Entry 2 – Task decomposition
- **Technique or framework:** Task decomposition / step-by-step prompting
- **Purpose:** Divide the application into manageable files and features.
- **Exact prompt:** "Break the CampusHub Student Information Portal into separate HTML pages, one shared CSS file, and one JavaScript file. List what each page and file should do. Keep the application frontend only."
- **Result summary:** The project was divided into a dashboard, student records, announcements, shared styling, and shared JavaScript.
- **Evaluation:** The structure is organized and easy to explain. All pages reuse the same stylesheet and script.
- **Improvement:** Use relative file paths correctly for pages inside the pages folder.

## Entry 3 – Constraint-based code generation
- **Technique or framework:** Clear instructions and constraints
- **Purpose:** Generate the student management interface and its functions.
- **Exact prompt:** "Create a student records page using HTML, Bootstrap, CSS, and vanilla JavaScript. Include a form with student ID, full name, email, course, and year level. Validate required fields and email, prevent duplicate IDs, and support adding, deleting, searching, filtering by course, sorting by name, and saving records in localStorage. Use accessible labels and clear feedback."
- **Result summary:** The page includes a Bootstrap modal form, validation, duplicate ID checking, search, filtering, sorting, deletion, and localStorage.
- **Evaluation:** The requested features are included. Browser testing is still needed to confirm behavior on the examination computer.
- **Improvement:** Test empty inputs, invalid email, duplicate ID, and refresh persistence; correct any issues found.

## Entry 4 – Iterative refinement and evaluation
- **Technique or framework:** Iterative prompting / evaluation
- **Purpose:** Review the project against the exam requirements.
- **Exact prompt:** "Evaluate this Student Information Portal against these requirements: three pages or substantial sections, working navigation, responsive design, three meaningful JavaScript features, a validated form, Bootstrap components, separate HTML/CSS/JavaScript files, accessibility, and working links and buttons. Identify missing items and suggest specific corrections."
- **Result summary:** A requirement checklist was created for navigation, responsiveness, validation, JavaScript features, and code organization.
- **Evaluation:** The code structure addresses the listed requirements, but actual browser testing and screenshots must still be completed by the student.
- **Improvement:** Test on different screen sizes, inspect the browser console, and update README.md with the real issues and corrections.

## Entry 5 – Documentation prompting
- **Technique or framework:** Output-format prompting
- **Purpose:** Prepare project documentation in Markdown.
- **Exact prompt:** "Write a README.md for CampusHub with project description, student details placeholders, target users, objectives, features, technologies, usage instructions, AI contribution, testing checklist, limitations, and credits. Also create a prompt log that records technique, purpose, exact prompt, result, evaluation, and improvement."
- **Result summary:** README.md and PROMPT_LOG.md were prepared.
- **Evaluation:** The documents contain the requested sections. Student details and actual test results still need to be filled in.
- **Improvement:** Replace placeholders and record only tests that were actually performed.
