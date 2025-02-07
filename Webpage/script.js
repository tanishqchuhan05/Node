const Students = [];

function addStudent() {
    const name = document.getElementById('student-name').value;
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    // Input validation
    if (!name) {
        alert("Please Enter valid Name");
        return;
    }

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        alert("Please Enter Valid Input for all subjects");
        return;
    }

    // Marks should be between 0 and 100
    if (subject1 < 0 || subject1 > 100 || subject2 < 0 || subject2 > 100 || subject3 < 0 || subject3 > 100 || subject4 < 0 || subject4 > 100 || subject5 < 0 || subject5 > 100) {
        alert("Marks should be between 0 and 100");
        return;
    }

    const avg = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;

    // Add new student to the list
    Students.push({ name, subject1, subject2, subject3, subject4, subject5, avg });

    // Sort students by avg score in descending order
    Students.sort((a, b) => b.avg - a.avg);

    // Update the table and the top student
    updateTable();

    // Clear input fields after adding the student
    document.getElementById('student-name').value = '';
    document.getElementById('subject1').value = '';
    document.getElementById('subject2').value = '';
    document.getElementById('subject3').value = '';
    document.getElementById('subject4').value = '';
    document.getElementById('subject5').value = '';
}

// Update the table and show the top student
function updateTable() {
    const tableBody = document.getElementById('student-table-body');
    tableBody.innerHTML = '';

    // If there are no students, show the 'No Data' row
    const noDataRow = document.getElementById('noDataRow');
    if (Students.length === 0) {
        if (noDataRow) noDataRow.style.display = ''; // Show "No students added yet."
        return;
    }

    // Hide 'No Data' message when there are students
    if (noDataRow) noDataRow.style.display = 'none';

    // Loop through each student and create a row for the table
    Students.forEach(student => {
        const row = document.createElement('tr');

        // Create table cells for each student's data
        const nameCell = document.createElement('td');
        const subject1Cell = document.createElement('td');
        const subject2Cell = document.createElement('td');
        const subject3Cell = document.createElement('td');
        const subject4Cell = document.createElement('td');
        const subject5Cell = document.createElement('td');
        const avgCell = document.createElement('td');

        // Set the cell text content
        nameCell.textContent = student.name;
        subject1Cell.textContent = student.subject1;
        subject2Cell.textContent = student.subject2;
        subject3Cell.textContent = student.subject3;
        subject4Cell.textContent = student.subject4;
        subject5Cell.textContent = student.subject5;
        avgCell.textContent = student.avg.toFixed(2); // Display average with 2 decimal places

        // Append each cell to the row
        row.appendChild(nameCell);
        row.appendChild(subject1Cell);
        row.appendChild(subject2Cell);
        row.appendChild(subject3Cell);
        row.appendChild(subject4Cell);
        row.appendChild(subject5Cell);
        row.appendChild(avgCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Display the top student
    if (Students.length > 0) {
        const topStudent = Students[0]; // The first student after sorting will be the top student
        const topStudentElement = document.getElementById('top-student');
        topStudentElement.innerHTML = `Top Student: ${topStudent.name} - Avg Score: ${topStudent.avg.toFixed(2)}`;
    }
}
