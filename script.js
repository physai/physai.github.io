
document.addEventListener("DOMContentLoaded", function() {
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
    
    // Select the list items
    var listItems = document.querySelectorAll("#myUL li");
    
    // Hide the list items
    listItems.forEach(function(listItem) {
      listItem.style.display = "none";
      listItem.addEventListener('click', function(){
        chrome.tabs.create({url: this.getElementsByTagName("a")[0].href});
      });
    });
  });
  document.getElementById('myInput').addEventListener('keyup', myFunction);
  
  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toLowerCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items and show/hide them based on the search query
    for (var i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (filter == "" || !txtValue.toLowerCase().includes(filter)) {
        li[i].style.display = "none";
      } else {
        li[i].style.display = "";
      }
    }
  }
  const links = [
    'https://arxiv.org/pdf/2211.16605',
'https://arxiv.org/pdf/2211.11033',
'https://arxiv.org/pdf/2210.11522',
'https://arxiv.org/pdf/2205.01089',
'https://arxiv.org/pdf/2205.05678',
'https://arxiv.org/pdf/2204.12301',
'https://arxiv.org/pdf/2203.17275',
'https://arxiv.org/pdf/2112.03321',
'https://arxiv.org/pdf/2110.15358',
'https://arxiv.org/pdf/2110.06912',
'https://arxiv.org/pdf/2109.14203',
'https://arxiv.org/pdf/2107.06393',
'https://arxiv.org/pdf/2107.13377',
'https://arxiv.org/pdf/2106.08261',
'https://arxiv.org/pdf/2106.01246',
'https://arxiv.org/pdf/2103.07104',
'https://arxiv.org/pdf/2103.00589',
'https://arxiv.org/pdf/2103.12538',
'https://arxiv.org/pdf/2012.09790',
'https://arxiv.org/pdf/2011.12440',
'https://arxiv.org/pdf/2010.09890',
'https://arxiv.org/pdf/2007.11744',
'https://arxiv.org/pdf/2006.08979',
'https://arxiv.org/pdf/2006.14019',
'https://arxiv.org/pdf/2006.12122',
'https://arxiv.org/pdf/1910.12827',
'https://arxiv.org/pdf/1910.01442',
'https://arxiv.org/pdf/1906.02330',
'https://arxiv.org/pdf/1903.05136',
'https://arxiv.org/pdf/1902.09641',
'https://arxiv.org/pdf/1812.10972',
'https://arxiv.org/pdf/1812.11166',
'https://arxiv.org/pdf/1810.01566',
'https://arxiv.org/pdf/1809.01524',
'https://arxiv.org/pdf/1711.03678',
'https://arxiv.org/pdf/1707.09627',
'https://arxiv.org/pdf/1702.06230',
'https://arxiv.org/pdf/1605.01138',
'https://arxiv.org/pdf/1604.08685',
'https://arxiv.org/pdf/1604.00289',
'https://arxiv.org/pdf/1602.03924',
'https://arxiv.org/pdf/1505.04984',
'https://arxiv.org/pdf/1503.03167',
'https://arxiv.org/pdf/1412.2672',
'https://arxiv.org/pdf/1402.4304',
'https://arxiv.org/pdf/1401.4195',
'https://arxiv.org/pdf/1307.0060',
'https://arxiv.org/pdf/1212.4799',
'https://arxiv.org/pdf/1208.5489',
'https://arxiv.org/pdf/1206.3255',
'https://arxiv.org/pdf/1201.5412',
'https://arxiv.org/pdf/cond-mat/0110012',
    ];
  function randomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}


document.getElementById('randomLinkButton').addEventListener('click', () => {
    window.location.href = randomLink();
});
function myalert() {
    alert("Welcome to PhysAI! Currently, the extension is undergoing review. You'll be directed there once it's out, so keep an eye out!");
}
