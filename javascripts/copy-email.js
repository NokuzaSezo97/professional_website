function copyEmail(event, email) {
  event.preventDefault();

  navigator.clipboard.writeText(email).then(() => {
    const link = event.currentTarget;
    const original = link.innerHTML;

    link.innerHTML = ":material-check: Copied!";

    setTimeout(() => {
      link.innerHTML = original;
    }, 1500);
  });
}
