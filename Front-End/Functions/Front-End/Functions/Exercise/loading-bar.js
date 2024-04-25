function loadingBar(persentage){

    if(persentage === 100){
        console.log('100% Complete!');
    } else {

        let percentCount = '%'.repeat(persentage / 10);
        let dotCount = '.'.repeat(10 - percentCount.length);
        console.log(`${persentage}% [${percentCount}${dotCount}]`);
        console.log('Still loading...');
    }
}

loadingBar(80);

console.log(null);