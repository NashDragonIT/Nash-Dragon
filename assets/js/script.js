const STORAGE_KEY = "campushub_students_v1";
const sampleStudents = [
  {id:"2026-001",name:"Alex Santos",email:"alex.santos@example.com",course:"BSIT",year:"1st"},
  {id:"2026-002",name:"Maria Reyes",email:"maria.reyes@example.com",course:"BEED",year:"2nd"},
  {id:"2026-003",name:"John Cruz",email:"john.cruz@example.com",course:"BSHM",year:"1st"},
  {id:"2026-004",name:"Angela Garcia",email:"angela.garcia@example.com",course:"BSBA",year:"3rd"}
];
const announcements = [
  {title:"Enrollment Reminder",category:"Academic",date:"November 20, 2026",body:"Students are reminded to check the official school channels for enrollment schedules and requirements."},
  {title:"Campus Clean-Up Drive",category:"Events",date:"November 25, 2026",body:"Everyone is encouraged to participate in keeping the campus clean and welcoming. Please coordinate with your class representative."},
  {title:"Library Schedule",category:"Reminder",date:"November 18, 2026",body:"Please observe library hours and return borrowed learning materials on or before their due dates."}
];
function getStudents(){
  try { const saved=localStorage.getItem(STORAGE_KEY); return saved===null ? sampleStudents : JSON.parse(saved); }
  catch(error){ return sampleStudents; }
}
function saveStudents(list){ localStorage.setItem(STORAGE_KEY,JSON.stringify(list)); }
function safeText(value){ return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])); }

function renderDashboard(){
  const total=document.getElementById("totalStudents");
  if(!total) return;
  const students=getStudents();
  total.textContent=students.length;
  document.getElementById("totalAnnouncements").textContent=announcements.length;
  const body=document.getElementById("recentStudents");
  body.innerHTML=students.slice(-4).reverse().map(s=>`<tr><td>${safeText(s.id)}</td><td class="fw-semibold">${safeText(s.name)}</td><td>${safeText(s.course)}</td><td>${safeText(s.year)}</td></tr>`).join("");
  document.getElementById("emptyRecent").classList.toggle("d-none",students.length>0);
  document.getElementById("homeAnnouncements").innerHTML=announcements.slice(0,3).map(a=>`<div class="col-md-4"><article class="announcement-card"><span class="category-pill">${safeText(a.category)}</span><p class="announcement-date mt-3 mb-2">${safeText(a.date)}</p><h3>${safeText(a.title)}</h3><p class="muted mb-0">${safeText(a.body)}</p></article></div>`).join("");
}
function renderStudents(){
  const table=document.getElementById("studentsTable");
  if(!table) return;
  const query=document.getElementById("studentSearch").value.trim().toLowerCase();
  const course=document.getElementById("courseFilter").value;
  const sort=document.getElementById("sortStudents").value;
  let list=getStudents().filter(s=>(!course||s.course===course)&&[s.id,s.name,s.email,s.course].some(v=>v.toLowerCase().includes(query)));
  list.sort((a,b)=>sort==="asc"?a.name.localeCompare(b.name):b.name.localeCompare(a.name));
  table.innerHTML=list.map(s=>`<tr><td>${safeText(s.id)}</td><td class="fw-semibold">${safeText(s.name)}</td><td>${safeText(s.email)}</td><td><span class="category-pill">${safeText(s.course)}</span></td><td>${safeText(s.year)}</td><td><button class="btn btn-sm btn-outline-danger" data-delete="${safeText(s.id)}" aria-label="Delete ${safeText(s.name)}">Delete</button></td></tr>`).join("");
  document.getElementById("noStudents").classList.toggle("d-none",list.length>0);
}
function showStudentAlert(message,type="success"){
  const alert=document.getElementById("studentAlert");
  alert.textContent=message; alert.className=`alert alert-${type}`; 
}
function setupStudentPage(){
  const form=document.getElementById("studentForm");
  if(!form) return;
  ["studentSearch","courseFilter","sortStudents"].forEach(id=>document.getElementById(id).addEventListener(id==="studentSearch"?"input":"change",renderStudents));
  document.getElementById("studentsTable").addEventListener("click",event=>{
    const button=event.target.closest("[data-delete]"); if(!button)return;
    const id=button.dataset.delete;
    if(!confirm(`Remove student ${id}?`))return;
    saveStudents(getStudents().filter(s=>s.id!==id)); renderStudents(); showStudentAlert("Student record removed.","info");
  });
  form.addEventListener("submit",event=>{
    event.preventDefault(); event.stopPropagation();
    form.classList.add("was-validated");
    if(!form.checkValidity())return;
    const student={id:document.getElementById("studentId").value.trim(),name:document.getElementById("studentName").value.trim(),email:document.getElementById("studentEmail").value.trim(),course:document.getElementById("studentCourse").value,year:document.getElementById("studentYear").value};
    const students=getStudents();
    if(students.some(s=>s.id.toLowerCase()===student.id.toLowerCase())){showStudentAlert("That student ID already exists. Please use a different ID.","danger");return;}
    students.push(student); saveStudents(students); renderStudents(); form.reset(); form.classList.remove("was-validated");
    bootstrap.Modal.getOrCreateInstance(document.getElementById("studentModal")).hide();
    showStudentAlert("Student added successfully.","success");
  });
  renderStudents();
}
function renderAnnouncements(){
  const list=document.getElementById("announcementsList"); if(!list)return;
  const query=document.getElementById("announcementSearch").value.trim().toLowerCase();
  const category=document.getElementById("announcementCategory").value;
  const filtered=announcements.filter(a=>(!category||a.category===category)&&`${a.title} ${a.body} ${a.category}`.toLowerCase().includes(query));
  list.innerHTML=filtered.map(a=>`<div class="col-md-6 col-lg-4"><article class="announcement-card"><span class="category-pill">${safeText(a.category)}</span><p class="announcement-date mt-3 mb-2">${safeText(a.date)}</p><h3>${safeText(a.title)}</h3><p class="muted mb-0">${safeText(a.body)}</p></article></div>`).join("");
  document.getElementById("noAnnouncements").classList.toggle("d-none",filtered.length>0);
}
function setupAnnouncements(){if(!document.getElementById("announcementsList"))return;document.getElementById("announcementSearch").addEventListener("input",renderAnnouncements);document.getElementById("announcementCategory").addEventListener("change",renderAnnouncements);renderAnnouncements();}
document.addEventListener("DOMContentLoaded",()=>{renderDashboard();setupStudentPage();setupAnnouncements();});
