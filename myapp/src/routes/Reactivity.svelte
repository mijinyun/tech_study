<script>
    let count = 0;
    $: double = count * 2;
    $: if (count > 10) {
        alert(`exceed!`);
        count = 10;
        // double = 0; //참조값은 재할당이 가능
    }
    
    //Here!! numbers가 빈 배열일때 type error 발생! 빈 배열로 인해 초기값을 반환할수 없기 때문에 에러발생.
    let numbers = [0];
    $: sum = numbers.reduce((prev,cur) => {return prev + cur});
    // Q. 위의 경우는 count가 10이 넘어설 경우의 조건에서는 count 재할당이 가능한 반면에, double이 10이 넘어설 경우의 조건에서는 double에 오류 발생(Cyclical dependency detected)
    // $: if (double > 10) {
    //     alert(`exceed!`);
    //     count = 0;
    //     // double = 0;
    // }

    function increase() {
        count += 1;
        numbers = [...numbers,count];
    }
    function descrease(){
        count >=1 ? count -= 1 : count = 0;
        numbers.pop();
        numbers = [...numbers];
    }
</script>

<h1>{count} {count <= 1 ? 'time' : 'times'} </h1>
<h1>double : {double}</h1>
<h1 style="color:blue"> { numbers.join(' + ') } = {sum}</h1>
<button on:click={increase}> Click! increase!</button>
<button on:click={descrease}> Click! descrease!</button>