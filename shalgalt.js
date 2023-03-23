let change = true;
function ChangeBackgroundcolor(color){
    if(change){
    document.querySelector('.contentBox').style.backgroundColor='blue';
    change = false;
    } else{
    document.querySelector('.contentBox').style.backgroundColor='red';
    change = true;

    }
}