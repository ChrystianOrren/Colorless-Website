function submitClick(event) {
    //event.preventDefault();

    var form = document.getElementById("bug_report_form");
    if (!form.checkValidity()) {
        console.log("Form is not valid");
        return;
    }

    // Serialize form data
    var formData = new FormData(form);

    // Send form data via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Form submitted successfully");
                document.getElementById("suc-txt").style.display = "block";
                form.reset();
            } else {
                console.error("Form submission failed");
            }
        }
    };
    xhr.send(formData);
}
