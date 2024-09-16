let url = "https://fakestoreapi.com/products";

let container = document.getElementById('container')
fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      
    let productName = data.map(a => a.title);
    let productImg = data.map(a => a.image);
    let productPrice = data.map(a => a.price);
    console.log(productName);
    console.log(productImg);
    console.log(productPrice);
    
    productName.forEach((element , index) => {
        let nameContainer = document.createElement('p')
        let imgContainer = document.createElement('img')
        let priceContainer = document.createElement('p')
        let card = document.createElement('div')
        nameContainer.classList.add('nameContainer')
        imgContainer.classList.add('imgContainer')
        priceContainer.classList.add('priceContainer')
        card.classList.add('card')
        nameContainer.textContent = productName[index];
        imgContainer.setAttribute('src',productImg[index] )
        priceContainer.textContent = `Price:${productPrice[index]}$`;

        container.appendChild(card)
        card.appendChild(nameContainer)
        card.appendChild(imgContainer)
        card.appendChild(priceContainer)
    });
    })