
const item = {
  description: "pan",
  checked: false
}
const item2 = {
  description: "pan con leche",
  checked: true
}

let itemsData = [];

function postItem() {
  return fetch('http://localhost:3000/items/', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
  }
  }).then(res => console.log('POST done'))
}

function getItems() {
  return fetch('http://localhost:3000/items/')
    .then(res => res.json()).then(data => {
      itemsData = data;
      console.log('---ItemsArray:')
      console.log(itemsData);
    })
}

function getItemById(id) {
  return fetch(`http://localhost:3000/items/${id}`)
    .then(res => res.json()).then(data => {
      console.log('---GET-ItemById:');
      console.log(data);
    })
}

function putItemById(id) {
  return fetch(`http://localhost:3000/items/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item2),
    headers: {
      'Content-Type': 'application/json'
  }
  })
    .then(res => res.json()).then(data => {
      console.log('---PUT-ItemById:');
      console.log(data);
    })
}

function deleteItemById(id) {
  return fetch(`http://localhost:3000/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
  }
  })
    .then(res => res.json()).then(data => {
      console.log('---DELETE-ItemById:');
      console.log(data);
    })
}

async function PostAndGet() {
  await postItem();
  await postItem();

  await getItems();
  
  await getItemById(itemsData[0].id);
  await putItemById(itemsData[0].id);
  await deleteItemById(itemsData[0].id);

  await getItems(); //Tendrá un elemento menos
}

PostAndGet();
