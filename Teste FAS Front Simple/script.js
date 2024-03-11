function fetchData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          callback(null, JSON.parse(xhr.responseText));
        } else {
          callback(new Error('Ocorreu um erro ao buscar os dados.'));
        }
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }
  
  function displayData(data, containerId) {
    var container = document.getElementById(containerId);
    var list = document.createElement('ul');
    data.forEach(function(item) {
      var listItem = document.createElement('li');
      listItem.textContent = item.name;
      list.appendChild(listItem);
    });
    container.appendChild(list);
  }
  
  function loadData() {
    fetchData('/fornecedores', function(err, fornecedores) {
      if (err) {
        console.error(err);
      } else {
        displayData(fornecedores, 'fornecedoresList');
      }
    });
  
    fetchData('/products', function(err, produtos) {
      if (err) {
        console.error(err);
      } else {
        displayData(produtos, 'produtosList');
      }
    });
  }
  
  window.onload = loadData;