// ... (All of your existing xionBassadors array code) ...

// A new array for the missionaries
const xionMissionaries = [
    // Add your Missionary ambassador objects here
    {
        name: "Missionary 1",
        role: "Missionary",
        electedDate: "Jan 1, 2025",
        avatar: "https://via.placeholder.com/150",
        socials: {
            twitter: "#",
            discord: "missionary1"
        },
        blurColor: "rgba(102, 255, 0, 0.2)"
    },
    // ... add more missionary ambassadors as needed
];

const ambassadorWall = document.getElementById('ambassador-wall');

function createAmbassadorCard(ambassador) {
    // ... (Your existing card creation function) ...
}


// --- New Logic to check the current page ---
if (window.location.pathname.includes('missionaries.html')) {
    // If we're on the missionaries page, load the missionary data
    xionMissionaries.forEach(ambassador => {
        const card = createAmbassadorCard(ambassador);
        ambassadorWall.appendChild(card);
    });
} else {
    // Otherwise, load the main ambassador data
    xionBassadors.forEach(ambassador => {
        const card = createAmbassadorCard(ambassador);
        ambassadorWall.appendChild(card);
    });
}
