# CampusHub – Student Information Portal

## Project description
CampusHub is a frontend student information portal. It lets users view a dashboard, manage sample student records, and read school announcements.

## Student details
- **Name:** [Your Name]
- **Section:** [Your Section]

## Target users
Students, class representatives, and school staff who need a simple way to view sample student information and school updates.

## Objectives
1. Organize student information in one simple interface.
2. Allow users to add, search, filter, sort, and remove student records.
3. Display useful school announcements.
4. Provide a responsive and accessible interface.

## Features
- Dashboard with student and announcement counts.
- Add student form with required-field and email validation.
- Duplicate student ID checking.
- Search, course filtering, and name sorting.
- Delete student records.
- Announcement search and category filtering.
- Browser localStorage for student records.

## Technologies
HTML5, CSS3, JavaScript, Bootstrap 5.3, browser localStorage.

## How to open and use
1. Download or clone this repository.
2. Open `index.html` in a modern browser. An internet connection is needed to load Bootstrap from its CDN.
3. Use the navigation bar to open Dashboard, Students, or Announcements.
4. On Students, click **Add Student** and complete the form. Use the search, course filter, and sort controls to manage the displayed list.
5. Student changes are saved in the browser where the app is opened.

## AI tools
ChatGPT was used to help plan the project, draft the code structure, and review functionality. The student must test, understand, and explain the final code.

## Testing performed
Use the following checklist and record the actual result after testing in your browser:
- [ ] Open all three pages using the navigation links.
- [ ] Add a student using valid details.
- [ ] Try submitting the form with empty fields and an invalid email.
- [ ] Try adding a duplicate student ID.
- [ ] Search for a student by name, ID, or course.
- [ ] Filter by course and sort names A–Z and Z–A.
- [ ] Delete a student and confirm the table updates.
- [ ] Refresh the page and check that saved student data remains.
- [ ] Search and filter announcements.
- [ ] Check the layout at mobile, tablet, and desktop widths.
- [ ] Check the browser console for errors.

## Known limitations
- This is a frontend demonstration, not a real school database.
- There is no secure login, user account, or server-side storage.
- Student data is stored only in the current browser's localStorage.
- Announcement content is sample data in the JavaScript file.
- Bootstrap and Google Fonts are loaded online.

## Credits
- Bootstrap 5.3 CDN: https://getbootstrap.com/
- Google Fonts: https://fonts.google.com/
- Sample names and announcements are fictional demonstration data.
