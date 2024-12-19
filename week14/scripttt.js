$(document).ready(function () {
  
    const songs = {
        song1: 'audio/IMG_5091.mp3',
        song2: 'audio/all.mp3',
        song3: 'audio/IMG_5092 2.mp3',
        song4: 'audio/IMG_5094.mp3',
        song5: 'audio/IMG_5095.mp3',
        song6: 'audio/IMG_5096.mp3',
    };

    for (const [key, value] of Object.entries(songs)) {
        const audioElement = `<audio id="${key}-audio" src="${value}"></audio>`;
        $(`#${key}`).append(audioElement);
    }


    $('.play-btn').click(function () {
        const target = $(this).data('target');
        $(`#${target}-audio`)[0].play();
    });


    $('.stop-btn').click(function () {
        const target = $(this).data('target');
        const audio = $(`#${target}-audio`)[0];
        audio.pause();
        audio.currentTime = 0; 
    });
});


