window.CustomDataLayer = {
  config(args) {
    if (args.hasOwnProperty("send_page_view")) {
      const send_page_view = args["send_page_view"];
      if (send_page_view === true) {
        window.addEventListener("load", () => {
          const event = {
            event_name: "page_view",
            page_location: window.location.href,
            event_timestamp: Date.now().toString(),
          };
          window.CustomDataLayer.send(JSON.stringify({ event }));
        });
      }
    }
  },
  send(e) {
    console.log(`dispatch event ${e}`);
    const { event } = JSON.parse(e);
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/", true);
    request.send(JSON.stringify(event));
  },
};
