import { randomNumber } from "../node_modules/mts-npm-a/src/index.js";
import { shuffle } from "../node_modules/mts-npm-b/dist/index.js";

const content = document.getElementById("content");

function element(tag, html) {
  const elt = document.createElement(tag);
  elt.innerHTML = html;
  return elt;
}

content.appendChild(element("h1", "MTSW - 01"));

content.appendChild(element("h3", "<code>randomNumber()</code>"));
content.appendChild(
  element(
    "p",
    `<code>${Array.from(new Array(16), () => randomNumber()).join(", ")}</code>`
  )
);

content.appendChild(element("h3", "<code>randomNumber(8)</code>"));
content.appendChild(
  element(
    "p",
    `<code>${Array.from(new Array(16), () => randomNumber(8)).join(
      ", "
    )}</code>`
  )
);

content.appendChild(element("h3", "<code>randomNumber(-1,1)</code>"));
content.appendChild(
  element(
    "p",
    `<code>${Array.from(new Array(16), () => randomNumber(-1, 1)).join(
      ", "
    )}</code>`
  )
);

content.appendChild(element("h3", "<code>randomNumber(0, 10, 1)</code>"));
content.appendChild(
  element(
    "p",
    `<code>${Array.from(new Array(16), () => randomNumber(0, 10, 1)).join(
      ", "
    )}</code>`
  )
);


content.appendChild(element("h3", "<code>randomNumber(5, 10.1, 0.5)</code>"));
content.appendChild(
  element(
    "p",
    `<code>${Array.from(new Array(16), () => randomNumber(1, 10.1, 0.5)).join(
      ", "
    )}</code>`
  )
);

const alphabet = Array.from(new Array(26), (_,i)=> String.fromCodePoint("A".codePointAt(0) + i)) 

content.appendChild(element("h3", "<code>shuffle(alphabet)</code>"));
content.appendChild(
  element(
    "p",
    `<code>${shuffle(alphabet).join(
      ", "
    )}</code>`
  )
);
