window.onload = () =>{
    let left = document.getElementsByClassName('left')[0];
    let right = document.getElementsByClassName('right')[0];
    let currentStep = JSON.parse(localStorage.getItem('currentStep'));
    let leftEar = JSON.parse(localStorage.getItem('leftEar'));

    left.addEventListener('click', ()=>{
        ChangePage(0);
    })
    right.addEventListener('click', ()=>{
        ChangePage(1);
    })
    ChangePage = (e) =>{
        if(e === 1)
            localStorage.setItem('leftEar', JSON.stringify({count: String(parseInt(leftEar.count)+1)}));

        if(currentStep.step !== '5'){
            window.location.replace('/q' + String(parseInt(currentStep.step)+1) + '.html');
        }
        else
        {
            window.location.replace('/face.html');
            // leftEar = JSON.parse(localStorage.getItem('leftEar'));
            // switch (leftEar.count) {
            //     case '0':
            //         console.log(0);
            //         break;
            //     case '1':
            //         console.log(1);
            //         break;
            //     case '2':
            //         console.log(2);
            //         break;
            //     case '3':
            //         console.log(3);
            //         break;
            //     case '4':
            //         console.log(4);
            //         break;
            //     case '5':
            //         console.log(5);
            //         break;
            //     default:
            //         console.log('error');
            //         break;
            // }
        }
    }
}