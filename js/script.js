$(document).ready(function(){
  let index = 0;

  getCards();  

  $('form').submit(function(e){
    e.preventDefault();
    const data = {
      name: $("#name").val(),
      email: $("#email").val(),
      comment: $("#comment").val(),
    };

    if (data.name.length < 3) {
      alert('Имя должно состоять не менее 3 символов');
      return;
    };

    if (data.email < 1) {
      alert('Заполните email');
      return;
    };

    if (data.comment.length < 5) {
      alert('Комментарий должен состоять не менее 5 символов');
      return;
    };
  
    addCard(data);

    $('html, body').animate({scrollTop: $(document).height() + $(window).height()}, 600);
  });

  function card(user) {
    const color = index % 2 === 0 ? 'comment-green' : 'comment-blue';
    index++;

    return $('#comments').append(`
      <div class="comment ${color}">
        <div class="comment__header">
          <label>${user.name}</label>
        </div>
        <div class="comment__body">
          <p class="comment__body-email">${user.email}</p>
          <p class="comment__body-comment">${user.comment}</p>
        </div>
      </div>
    `);
  };
  
  function getCards () {
    fetch('http://localhost/test/api/getComments.php')
      .then(response => response.json())
      .then(res => {
        console.log('res', res);
        comments = [...res];
        index = res.length
        res.map(item => card(item))
      })
      .catch(error => console.log('error', error));  
  };

  function addCard (data) {
    $('#comments').append(`
      <div id="loader" class="loader"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    `);

    fetch('http://localhost/test/api/addComment.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        if (res) {
          card(data);
        }
      })
      .catch(error => alert('error', error));
    $("#loader").detach()
  };
});
