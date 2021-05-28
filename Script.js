  let w;
  const d = [];
  let count = 0;
  let def, res;
  document.getElementById("myButton").addEventListener("click", getWord);
async function getWord() {
    w=document.querySelector(".inp").value;
    const words = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/"+w);
    const d = await words.json();
    if (d.length == 1 || d.length == 2) count = count + 1;
    res = d[0].word;
    def = d[0].meanings[0].definitions[0].definition;
    document.querySelector(".out").innerText=def;
    console.log(def);
}
