let userRole ="admin";
let accessLevel;

if (userRole === "admin") {
    accesslevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator"
        break;
        case "manager":
            userCategory = "Manager"
            break;
            case "subcriber":
                userCategory = "Subscriber"
                break;
                default:
                    userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let userOrg = "Dietary Services";
let userPerson;

if (userOrg === "Employee") {
    userPerson = "Dietary Services";
} else if (userOrg === "Enrolled Member"){
    userPerson = "Dietary Services and one-on-one interaction with a dietician";
} else if (userOrg === "Subscriber") {
    userPerson = "Dietary Services Only";
} else {
    userPerson = "You need to enroll for perks!";
}

console.log ("Dietary Services:", userPerson);