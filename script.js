function assignSeats() {
    const people = ["Лера", "Ксюша", "Диана"];
    const tables = [1, 2, 3];
    
    const resultDiv = document.getElementById("result");
    resultDiv.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => {
        resultDiv.innerHTML = '';
        resultDiv.style.animation = '';
        
        resultDiv.innerHTML = '<div class="loading">Рассчитываем рассадку...</div>';

        setTimeout(() => {
            const shuffledTables = [...tables].sort(() => Math.random() - 0.5);
            
            let output = '<div class="assignment-result">';
            output += '<h2>Результаты рассадки:</h2>';
            output += '<div class="guest-list">';
            
            for (let i = 0; i < people.length; i++) {
                output += `
                <div class="guest-item" style="animation-delay: ${i * 0.2}s">
                    <span class="guest-name">${people[i]}</span>
                    <span class="guest-arrow">→</span>
                    <span class="table-number">${shuffledTables[i]}</span>
                </div>`;
            }
            
            output += '</div></div>';
            
            resultDiv.innerHTML = output;
            resultDiv.style.animation = "fadeIn 0.5s ease";
        }, 800);
    }, 300);
}