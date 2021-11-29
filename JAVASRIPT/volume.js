let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');


        function volume_change() {
            volume_show.innerHTML = recent_volume.value;
            audioElement.volume = recent_volume.value / 100;
        }

        function mute_sound() {
            audioElement.volume = 0;
            volume.value = 0;
            volume_show.innerHTML = 0;
        }

       