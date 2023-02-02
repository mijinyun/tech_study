<script>
    let count = 0;
    $: double = count * 2;
    // $: if (count > 10) {
        // alert(`exceed!`);
        // count = 10;
        // double = 0; //재할당이 가능
    // }
    $: console.log(double);
    let numbers = [0];
    $: sum = numbers.reduce((prev,cur) => {return prev + cur});
    // Q. 위의 경우는 count가 10이 넘어설 경우의 조건에서는 count 재할당이 가능한 반면에, double이 10이 넘어설 경우의 조건에서는 double에 오류 발생(Cyclical dependency detected)
    $: if (double > 10) {
        // console.log(double);
        alert(`exceed!`);
        // count = 0;
        double = 0;
        // count = 0;
    }

    function increase() {
        count += 1;
        numbers.push(count);
        numbers = [...numbers];
        // numbers = [...numbers,count]; // 위 두줄은 이 한줄을 통해서 .set 처리와 동시에 push도 하는셈!
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