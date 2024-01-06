        // Array of headings to cycle through
        var headings = [
            "Your Socials, your rules, our boost",
            "Beyond the numbers, into the community",
            "Elevate your influence organically",
            "Real growth in a digital world"
            // Add more headings as needed
        ];

        var headingIndex = 0; // Initialize index

        function changeHeading() {
            // Fade out
            document.getElementById("dynamicHeading").style.opacity = 0;

            setTimeout(function () {
                // Change the heading to the next one in the array
                document.getElementById("dynamicHeading").textContent = headings[headingIndex];
                
                // Fade in
                document.getElementById("dynamicHeading").style.opacity = 1;
            }, 500); // Wait for 500 milliseconds before fading in

            headingIndex = (headingIndex + 1) % headings.length;
        }

        // Change heading every 5000 milliseconds (5 seconds)
        setInterval(changeHeading, 2500);