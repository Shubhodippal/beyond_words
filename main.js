const hasSeenIntro = document.cookie.split(';').some(cookie => cookie.startsWith('seenIntro='));

    if (!hasSeenIntro) {
      // Show intro video
      document.getElementById('intro').style.display = 'block';
      document.cookie = "seenIntro=true; expires=Thu, 31 Dec 2025 23:59:59 GMT; path=/";
    } else {
      // Hide intro video
    }

    const video = document.getElementById('introVideo');
    video.addEventListener('ended', () => {
      document.getElementById('intro').style.display = 'none';
    });