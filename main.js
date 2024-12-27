const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const list1 = document.querySelector('.List1');
const list2 = document.querySelector('.List2');
const list3 = document.querySelector('.List3');
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const s3 = document.querySelector('.s3')
const s4 = document.querySelector('.s4')



next.addEventListener('click', () => {
    if (list2.classList.contains('m')) {
        list3.classList.add('m');
        list2.classList.remove('l');
        s1.classList.remove('m')
        s2.classList.remove('m')
        s3.classList.add('m')
        s4.classList.add('m')

    } 
    else {
        list2.classList.add('m');
        s1.classList.remove('m')
        s3.classList.remove('m')
        s2.classList.add('m')
        list2.classList.remove('l');

    }
});
prev.addEventListener('click', () => {
    if (list2.classList.contains('l')) {
        list2.classList.remove('m');
       
        s2.classList.remove('m')
       
        s1.classList.add('m')
    } 
    else {
        list3.classList.remove('m');
        list2.classList.add('l');
        s3.classList.remove('m')
        s4.classList.remove('m')
    }
});



