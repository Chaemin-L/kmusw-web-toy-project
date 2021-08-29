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

/* 마찬가지 비슷한 맥락으로 구독 버튼 클릭시 텍스트 변경*/
const subscribeBtn = document.querySelector('.subscribeBtn');

subscribeBtn.addEventListener("click", () => {
    if(subscribeBtn.innerText === '구독') {
        subscribeBtn.innerText = '구독중';
    } else subscribeBtn.innerText ='구독';
    subscribeBtn.classList.toggle('active');
});
