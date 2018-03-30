$(document).ready(function(){
    $(function() {
        $('#ninjaStack').sortable();
        $('.ninjaImg').disableSelection();
    });
    $('button').click(function(){
        var arr = [0,1,2,3,4];
        arr = shuffle(arr);
        console.log(arr);
        function shuffle(arr){
            var currentIndex = arr.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = arr[currentIndex];
                arr[currentIndex] = arr[randomIndex];
                arr[randomIndex] = temporaryValue;
            }
            return arr;
        }
        var shufflePics = '';
        shufflePics += '<li><img class="ninjaImg" src="img/ninja'+arr[0];
        shufflePics += '.png" alt="ninja '+arr[0]+'"></li>';
        shufflePics += '<li><img class="ninjaImg" src="img/ninja'+arr[1];
        shufflePics += '.png" alt="ninja '+arr[0]+'"></li>';
        shufflePics += '<li><img class="ninjaImg" src="img/ninja'+arr[2];
        shufflePics += '.png" alt="ninja '+arr[0]+'"></li>';
        shufflePics += '<li><img class="ninjaImg" src="img/ninja'+arr[3];
        shufflePics += '.png" alt="ninja '+arr[0]+'"></li>';
        shufflePics += '<li><img class="ninjaImg" src="img/ninja'+arr[4];
        shufflePics += '.png" alt="ninja '+arr[0]+'"></li>';
        $('#ninjaStack').html(shufflePics);
    })
})