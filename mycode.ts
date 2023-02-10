/**************** Area 4 ****************/
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
}

const myCourses: Array<Course> = [
    { courseNumber: "Course Number", courseName: "Course Name", semesterTaken: "Year Taken" },
    { courseNumber: "CIS 163", courseName: "Computer Science 2", semesterTaken: "2020" },
    { courseNumber: "WRT 350", courseName: "Business Communication", semesterTaken: "2022" },
    { courseNumber: "COM 215", courseName: "Story Making", semesterTaken: "2023" },
    { courseNumber: "CIS 162", courseName: "Computer Science 1", semesterTaken: "2019" },
    { courseNumber: "CIS 241", courseName: "System-level Programming and Utilities", semesterTaken: "2022" }
];
const tArea4 = document.getElementById("area4-table");

for (let i = 0; i < myCourses.length/2; i++) {
    const getTR = document.createElement("tr");

    const th_courseNum = document.createElement("th");
    th_courseNum.innerText = myCourses[i].courseNumber;

    const th_courseName = document.createElement("th");
    th_courseName.innerText = myCourses[i].courseName

    const th_yearTaken = document.createElement("th");
    th_yearTaken.innerText = myCourses[i].semesterTaken;
    getTR.appendChild(th_courseNum);
    getTR.appendChild(th_courseName);
    getTR.appendChild(th_yearTaken);

    tArea4?.appendChild(getTR);
}

/**************** Area 6 ****************/
type Company = {
    name: string,
    url: string
}

const myCompany: Array<Company> = [
    { name: "CMC Global", url: "https://cmcglobal.com.vn/" },
    { name: "Helix International", url: "https://helix-int.com/" },
    { name: "Google", url: "https://about.google/" },
    { name: "Amazon", url: "https://www.aboutamazon.com/" }
];
const area6 = document.getElementById("area6-ul");

for(let i=0; i< myCompany.length/2; i++){
    const get_li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href",myCompany[i].url) ;
    a.textContent = myCompany[i].name;
    get_li.appendChild(a);
    area6?.appendChild(get_li);
    //area6?.appendChild(a);
}

/**************** Area 8 ****************/
