// NightForge Quiz Duel – minimal Custom Cast Receiver
const context = cast.framework.CastReceiverContext.getInstance();
const namespace = "urn:x-cast:com.nightforge.quizduel";

context.addCustomMessageListener(namespace, (event) => {
  const status = document.getElementById("status");
  if (status) {
    status.textContent = "Connected to NightForge Quiz Duel";
  }
  console.log("Message received:", event.data);
});

context.start();
