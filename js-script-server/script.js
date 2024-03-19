window.CustomDataLayer = {
  send(e) {
    console.log(`dispatch event ${e}`);
    const { event } = JSON.parse(e);
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8686", true);
    request.send(JSON.stringify(event));
  },
};
