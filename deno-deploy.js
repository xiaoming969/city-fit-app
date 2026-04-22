import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const HTML = await Deno.readTextFile("./index.html");
const JS = await Deno.readTextFile("./assets/index-BTvr9TWW.js");
const CSS = await Deno.readTextFile("./assets/index-CSc5Li5f.css");

serve(async (req) => {
  const url = new URL(req.url);
  
  if (url.pathname === "/assets/index-BTvr9TWW.js") {
    return new Response(JS, { headers: { "content-type": "application/javascript" } });
  }
  
  if (url.pathname === "/assets/index-CSc5Li5f.css") {
    return new Response(CSS, { headers: { "content-type": "text/css" } });
  }
  
  return new Response(HTML, { headers: { "content-type": "text/html" } });
});
