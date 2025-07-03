function createCard(title, cName, views, monthsOld, duration, thumbnail){
    const cont = document.getElementsByClassName("container");
    const img=cont[0].getElementsByTagName('img')[0]
    img.src=thumbnail
    const para0=cont[0].getElementsByTagName('p')[0]
    const para1=cont[0].getElementsByTagName('p')[1]
    const para2=cont[0].getElementsByTagName('p')[2]
    const para3=cont[0].getElementsByTagName('p')[3]
    const para4=cont[0].getElementsByTagName('p')[4]
    para0.innerText=title
    para1.innerText=duration
    para2.innerText=cName
    para3.innerText=formatNumber(views);
    para4.innerText=monthsOld
}


function formatNumber(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return num.toString();
  }
}



// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")