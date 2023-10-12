document.addEventListener('DOMContentLoaded', () => {
    const removeCardsButton = document.getElementById('removeCardsButton');
    const cards = document.querySelectorAll('.card');
    const lyricsList = [
        "Nabubuo ang buong pagkatao ko",
        "Kapag ikaw na ang kapiling ko",
        "Habang-buhay, dito lang sa tabi ko, pls",
    ];

    let buttonShown = false;

    removeCardsButton.addEventListener('click', () => {
        cards.forEach((card) => {
            card.style.display = 'none'; // Hide each card
        });
    });

    function typeLyric(lyric, targetElement, callback) {
        let i = 0;
        function type() {
            if (i < lyric.length) {
                targetElement.textContent += lyric[i];
                i++;
                setTimeout(type, 100); // Adjust typing speed as needed
            } else {
                callback();
            }
        }
        type();
    }
    
    function typeMessage(message, targetElement, callback) {
        let i = 0;
        function type() {
            if (i < message.length) {
                targetElement.textContent += message[i];
                i++;
                setTimeout(type, 100); // Adjust typing speed as needed
            } else {
                callback();
            }
        }
        type();
    }
    
    function showKaraokeLyrics() {
        const container = document.querySelector('.container');
        const karaokeLyrics = document.getElementById('karaokeLyrics');
        const button = document.getElementById('removeCardsButton');
    
        container.style.display = 'none'; // Hide the card container
        button.style.display = 'none'; // Hide the button
    
        karaokeLyrics.style.display = 'block'; // Show the karaoke lyrics container
    
        let i = 0;
        function nextLyric() {
            if (i < lyricsList.length) {
                let j = 0;
                karaokeLyrics.textContent = ''; // Clear the previous lyric
                function typeLyric() {
                    if (j < lyricsList[i].length) {
                        karaokeLyrics.textContent += lyricsList[i][j];
                        j++;
                        setTimeout(typeLyric, 100); // Adjust typing speed as needed
                    } else {
                        i++;
                        setTimeout(nextLyric, 4000); // Display each lyric for 3 seconds, adjust timing as needed
                    }
                }
                typeLyric();
            } else {
                typeMessage();
            }
        }
    
        let k = 0;
        let message = 'i miss you sm na!!!!!!!!';
        function typeMessage() {
            karaokeLyrics.textContent = ''; // Clear the previous lyric
            if (k < message.length) {
                karaokeLyrics.textContent += message[k];
                k++;
                setTimeout(typeMessage, 100); // Adjust typing speed as needed
            } else {
                setTimeout(() => {
                    for (let i = 0; i < 5; i++) {
                        document.getElementsByTagName('img')[i].style.display = 'none'; // Hide the images
                    }
                    container.style.display = 'flex'; // Show the card container
                    karaokeLyrics.style.display = 'none'; // Hide the karaoke lyrics container
                }, 999999); // Adjust timing as needed
            }
        }
    
        nextLyric();
    }
    
    
    
    document.getElementById('removeCardsButton').addEventListener('click', showKaraokeLyrics);
    
    
    document.getElementById('removeCardsButton').addEventListener('click', showKaraokeLyrics);

document.getElementById('removeCardsButton').addEventListener('click', showKaraokeLyrics);

    cards.forEach((card) => {
        let isDragging = false;
        let offsetX, offsetY;
        let initialRotation = 0;

        card.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - card.getBoundingClientRect().left;
            offsetY = e.clientY - card.getBoundingClientRect().top;
            initialRotation = card.style.transform ? parseInt(card.style.transform.replace('rotate(', '').replace('deg)', '')) : 0;
        });

        card.addEventListener('mouseup', () => {
            isDragging = false;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                setTimeout(() => {
                    const newLeft = e.clientX - offsetX;
                    const newTop = e.clientY - offsetY;

                    card.style.left = `${newLeft}px`;
                    card.style.top = `${newTop}px`;

                    const tiltAmount = 25; // Increased tilt amount
                    card.style.transform = `rotate(${initialRotation + (newLeft - window.innerWidth / 2) / window.innerWidth * tiltAmount}deg)`;
                }, 50);
            }
        });
    });

    const karaokeLyrics = document.getElementById('karaokeLyrics');
    karaokeLyrics.style.display = 'none'; // Hide karaoke lyrics container initially
    karaokeLyrics.style.position = 'absolute';
    karaokeLyrics.style.top = '50%';
    karaokeLyrics.style.left = '50%';
    karaokeLyrics.style.transform = 'translate(-50%, -50%)';
    karaokeLyrics.style.textAlign = 'center';
    karaokeLyrics.style.fontSize = '24px';
    karaokeLyrics.style.color = '#000';
    karaokeLyrics.style.width = '80%';
    karaokeLyrics.style.maxHeight = '80%';
    karaokeLyrics.style.overflowY = 'auto';
    karaokeLyrics.style.backgroundColor = '#fff';
    karaokeLyrics.style.border = '2px solid #000';
});
