const mainContent=document.getElementById("main-content");
const sidebar=document.getElementById("sidebar");
const navbar=document.getElementById("navbar");
let modeLight=1;
function changeMode(){
    const modeName=document.getElementById("mode-name");
    if (modeLight) {
        mainContent.classList.remove("bg-white", "text-black");
        mainContent.classList.add("bg-gray-900", "text-white");
        sidebar.classList.remove("bg-white", "text-black","border-r");
        sidebar.classList.add("bg-gray-800/90", "text-white");
        navbar.classList.remove("bg-white","border-b");
        navbar.classList.add("bg-gray-800/90");
        modeName.innerHTML = `
                    <div id="mode-name" class="flex gap-2">
                        <img src="assets/SunImage.png" alt="" class="w-6 h-6">
                        <p>Light Mode</p>
                    </div>
        `;
        modeLight = 0;
    } else {
        mainContent.classList.remove("bg-gray-900", "text-white");
        mainContent.classList.add("bg-white", "text-black");
        sidebar.classList.remove("bg-gray-800/90", "text-white");
        sidebar.classList.add("bg-white", "text-black","border-r");
        navbar.classList.remove("bg-gray-800/90");
        navbar.classList.add("bg-white","border-b");
        modeName.innerHTML = `
                    <div id="mode-name" class="flex gap-2">
                        <img src="assets/MoonImage.png" alt="" class="w-6 h-6">
                        <p>Dark Mode</p>
                    </div>
        `;
        modeLight = 1;
    }
}

function dashboard(){
    mainContent.innerHTML=`
                <div>
                    <div class="flex gap-2 text-5xl font-bold">
                        <p>Welcome back,</p>
                        <p class="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Admin!</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p>Manage users, subjects, attendance, timetables, and reports all from one place.</p>
                        <p>Stay in control and keep everything organized.</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="shadow-2xl rounded-xl p-4 flex flex-col items-center border border-blue-700">
                        <img src="assets/ExamImage.png" alt="" class="h-10 w-10 rounded-lg">
                        <p class="text-lg font-bold">Upcoming Exams</p>
                        <p>Stay updated with scheduled exams and important test dates</p>
                    </div>
                    <div class="shadow-2xl rounded-xl p-4 flex flex-col items-center border border-blue-700">
                        <img src="assets/EventImage.png" alt="" class="h-10 w-10 rounded-lg">
                        <p class="text-lg font-bold">Upcoming Events</p>
                        <p>Keep track of upcoming seminars, workshops, and campus events</p>
                    </div>
                    <div class="shadow-2xl rounded-xl p-4 flex flex-col items-center border border-blue-700">
                        <img src="assets/RecentActivityImage.png" alt="" class="h-10 w-10 rounded-lg">
                        <p class="text-lg font-bold">Recent Activity</p>
                        <p>A quick glance at your latest actions and updates on the platform</p>
                    </div>
                </div>
    `;
}

function manageUsers(){
    mainContent.innerHTML=`
                <div class="flex flex-col items-center">
                    <p class="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Manage Users</p>
                    <p>Add, update, or remove users. Assign roles and manage permissions easily</p>
                </div>
                <div class="grid grid-cols-2 gap-4" >
                    <div class="shadow-2xl rounded-xl p-4 flex flex-col items-center border border-blue-700">
                        <img src="assets/add-user.png" alt="" class="h-10 w-10 rounded-lg">
                        <p class="text-lg font-bold">Add New User</p>
                        <p>Create a new user profile and assign roles, subjects, or groups instantly</p>
                    </div>
                    <div class="shadow-2xl rounded-xl p-4 flex flex-col items-center border border-blue-700">
                        <img src="assets/user-refresh.png" alt="" class="h-10 w-10 rounded-lg">
                        <p class="text-lg font-bold">Update User</p>
                        <p>Edit user details, update credentials, and manage role or group changes easily</p>
                    </div>
                    <div class="shadow-2xl rounded-xl p-4 flex flex-col items-center border border-blue-700">
                        <img src="assets/remove-user.png" alt="" class="h-10 w-10 rounded-lg">
                        <p class="text-lg font-bold">Remove User</p>
                        <p>Safely delete inactive or unauthorized users from the system</p>
                    </div>
                    <div class="shadow-2xl rounded-xl p-4 flex flex-col items-center border border-blue-700">
                        <img src="assets/view-user.png" alt="" class="h-10 w-10 rounded-lg">
                        <p class="text-lg font-bold">View User Profile</p>
                        <p>Access complete profile information, including personal details and role assignment</p>
                    </div>
                </div>
    `;
}

function calculateReports(){
    mainContent.innerHTML=`
    
    `;
}

function attendanceTracker(){
    mainContent.innerHTML=`
    
    `;
}

function notifications(){
    mainContent.innerHTML=`
    
    `;
}

function manageSubjects(){
    mainContent.innerHTML=`
    
    `;
}

function manageGroups(){
    mainContent.innerHTML=`
    
    `;
}

function manageTimetable(){
    mainContent.innerHTML=`
    
    `;
}