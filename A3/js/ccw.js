const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

/* 비슷한 맥락으로 좋아요와 싫어요 버튼 클릭시 색변화 유도*/
const likeBtn = document.querySelector('.info .actions .likeBtn');
const hateBtn = document.querySelector('.info .actions .hateBtn');

likeBtn.addEventListener('click', () =>{
  likeBtn.classList.toggle('active');
});
hateBtn.addEventListener('click', () =>{
  hateBtn.classList.toggle('active');
});
