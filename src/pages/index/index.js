import "./index.scss";

const form = document.getElementById("form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json"
        }
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = "Спасибо за вашу заявку!";
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                    } else {
                        status.innerHTML =
                            "Упс, произошла проблема с отправкой";
                    }
                });
            }
        })

        .catch((error) => {
            status.innerHTML = "Упс, произошла проблема с отправкой";
        })
        .finally(() => {
            setTimeout(() => (location.href = "./home.html"), 500);
        });
}
form.addEventListener("submit", handleSubmit);
