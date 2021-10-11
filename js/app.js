let url = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';
const textarea = document.querySelector('#feed-textarea > ul');

/* const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString(); */

  feednami.load(url)
  .then(feed => {
    textarea.value = ''
    console.log(feed);
    for(let entry of feed.entries){
        //create a list element
        let li = document.createElement('li');
        //add HTML content to list items
        li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>
                        <p>${entry.description}</p>
                        <p>${entry.date}</p>
                        <p>By: ${entry.author}</p>
        `;
        //append HTML content to list
        textarea.appendChild(li);
    }
  });

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

//Dark mode

function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
