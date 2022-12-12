const reviews = [
    {
        img: './images/person-1_rfzshl.jpg',
        name: 'susan smith',
        jobTitle: 'web developer',
        review: 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
    },

    {
        img: './images/person-2_np9x5l.jpg',
        name: 'anna johnson',
        jobTitle: 'web designer',
        review: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
    },

    {
        img: './images/person-3_ipa0mj.jpg',
        name: 'peter jones',
        jobTitle: 'intern',
        review: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },

    {
        img: './images/person-4_t9nxjt.jpg',
        name: 'bill anderson',
        jobTitle: 'ceo',
        review: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
    },
];

// const rightBtn = document.querySelector('.right-btn');
// const leftBtn = document.querySelector('.left-btn');
// const randomBtn = document.querySelector('.random-btn');
// const reviewDiv = document.querySelector('.review-div');


// //render the review when loaded
// window.addEventListener('DOMContentLoaded', function () {
//     renderReview(0);
// });

// rightBtn.addEventListener('click', function () {
//     const currentName = document.querySelector('.name');
//     const currentIndex = reviews.findIndex(function (item) {
//         return item.name === currentName.textContent;
//     });
//     if (currentIndex === (reviews.length - 1)) {
//         renderReview(0);
//     } else {
//         const nextIndex = currentIndex + 1;
//         renderReview(nextIndex);
//     };
// });



// leftBtn.addEventListener('click', function () {
//     const currentName = document.querySelector('.name');
//     const currentIndex = reviews.findIndex(function (item) {
//         return item.name === currentName.textContent;
//     });
//     if (currentIndex === 0) {
//         const index = reviews.length - 1;
//         renderReview(index);
//     } else {
//         const nextIndex = currentIndex - 1;
//         renderReview(nextIndex);
//     }
// });


// //select random review and render out
// randomBtn.addEventListener('click', function () {
//     const randomNo = Math.floor(Math.random() * reviews.length);
//     const selected = reviews[randomNo];
//     reviewDiv.innerHTML = `<div class="profile-pic">
//     <img class="profile-img" src="${selected.img}" alt="profile-picture" />
//     <div class="pic-decoration"><i class="fa-solid fa-quote-right"></i></div>
// </div>
// <h4 class="name">${selected.name}</h4>
//     <p class="job-title">${selected.jobTitle}</p>
//     <p class="review-content">${selected.review}</p>`;
// });




// //render the review
// function renderReview(index) {
//     reviewDiv.innerHTML = `<div class="profile-pic">
//     <img class="profile-img" src="${reviews[index].img}" alt="profile-picture" />
//     <div class="pic-decoration"><i class="fa-solid fa-quote-right"></i></div>
// </div>
// <h4 class="name">${reviews[index].name}</h4>
//     <p class="job-title">${reviews[index].jobTitle}</p>
//     <p class="review-content">${reviews[index].review}</p>`;
// };

const img = document.querySelector('.profile-img');
const author = document.querySelector('.name');
const job = document.querySelector('.job-title');
const review = document.querySelector('.review-content');

const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
const randomBtn = document.querySelector('.random-btn');

let currentIndex = 0;

window.addEventListener('DOMContentLoaded', function () {
    render();
})

rightBtn.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex === reviews.length) {
        currentIndex = 0;
    };
    render();
});


leftBtn.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    };
    render();
});

randomBtn.addEventListener('click', function () {
    currentIndex = Math.floor(Math.random() * reviews.length);
    render();
});




function render() {
    img.src = reviews[currentIndex].img;
    author.textContent = reviews[currentIndex].name;
    job.textContent = reviews[currentIndex].jobTitle;
    review.textContent = reviews[currentIndex].review;
};