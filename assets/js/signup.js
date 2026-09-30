async function signup() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await res.json();

    if (data.status === "success") {
        alert("Account created");
        window.location = "/login.html";
    } else {
        alert("Email already exists");
    }
}