if (cacti[i].x + cacti[i].width < 0) {
    cacti.splice(i, 1);
    score++;
    currentScoreElement.textContent = score;
    
    // Play point sound for each cactus passed
    pointSound();
    
    // Play score sound every 100 points
    if (score % 100 === 0) {
        const now = performance.now();
        if (now - lastScoreSoundTime > 100) {
            scoreSound();
            lastScoreSoundTime = now;
        }
    }
}