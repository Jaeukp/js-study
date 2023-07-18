let link = document.querySelector('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if(!href) continue;

  if (!href.includes('://')) continue;

  if (href.startsWish('http://internal.com')) continue;

  link.style.color = 'skyblue';
}