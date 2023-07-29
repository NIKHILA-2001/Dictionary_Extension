  let w;
  const d = [];
  let count = 0;
  let def="", res;
  document.getElementById("myButton").addEventListener("click", getWord);
async function getWord() {
    w=document.querySelector(".inp").value;
    const words = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/"+w);
    const d = await words.json();
    console.log(d[0].meanings.length);
    if (d.length == 1 || d.length == 2) count = count + 1;
    let meanings = d[0].meanings;
    let c=1;
    
    let str="";
    meanings.forEach(e => {
      str +=  c.toString()+". "+e.definitions[0].definition+"\n";
      console.log(str);
      c+=1;
    });
    res = d[0].word;
    document.querySelector(".out").innerText=str;
}
