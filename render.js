let students = [];
const studentsList = document.querySelector 
const studentFilter = document.querySelector 
('#studentFilter')
('#studentList');
if (localStorage.students) {
    students = JSON.parse(localStorage.students);
}
let filteredStudent = '';
function filteredStudent(){
    filteredStudent = this.value;
    render();
}
studentFilter.addEventListener('keyup', filteredStudent);

function render() {
    for (const student of students) {
        studentsList.innerHTML += `<li>${student}</li>`;

    }
}
render();
function addStudent(name){
    students.push(name); 
    // diziyi güncelledik ramdeki student verisini gümcelledi.
    saveChanges();
    render();
}