/**
 * Created by web on 30.09.2019.
 */

    var top_prev = document.querySelector('.arr-left');
    var top_next = document.querySelector('.arr-right');

    var btn_prev = document.querySelector('.to-thank-arr-left');
    var btn_next = document.querySelector('.to-thank-arr-right');

    var top1 = document.querySelector('.hed-sldr');
    var top2 = document.querySelector('.hed-sldr2');


    var images1 = document.querySelector('.to-thank-content');
    var images2 = document.querySelector('.to-thank-content2');
    var images3 = document.querySelector('.to-thank-content3');

    var arr1 = [ top1, top2 ];
    var arr2 = [ images1, images2, images3 ];
    var i = 0;
    var j = 0;

    top_prev.onclick = function() {
        arr1[i].classList.add('vid2');
        i--;
        if(i < 0){
            i = arr1.length - 1;
        }
        arr1[i].classList.remove('vid2');
    }

    top_next.onclick = function(){
        arr1[i].classList.add('vid2');
        i++;
        if(i >= arr1.length){
            i = 0;
        }
        arr1[i].classList.remove('vid2');
    }




    btn_prev.onclick = function() {
            arr2[j].classList.remove('vid');
            j--;
            if(j < 0){
                j = arr2.length - 1;
            }
            arr2[j].classList.add('vid');
    }

    btn_next.onclick = function(){
            arr2[j].classList.remove('vid');
            j++;
            if(j >= arr2.length){
                j = 0;
            }
            arr2[j].classList.add('vid');
    }

