const SECRET_CODE = ['c', 'h', 'a', 'n', 'c', 'e']; 
let inputSequence = [];

// Функция для отслеживания нажатий клавиш
document.addEventListener('keyup', (e) => {
    // Добавляем нажатую клавишу в массив
    inputSequence.push(e.key.toLowerCase());
    
    // Ограничиваем длину массива длиной секретного кода
    if (inputSequence.length > SECRET_CODE.length) {
        inputSequence.shift();
    }
    
    // Проверяем совпадение
    if (inputSequence.join('') === SECRET_CODE.join('')) {
        activateEasterEgg();
    }
});

// Функция активации пасхалки
function activateEasterEgg() {
    // Очищаем последовательность
    inputSequence = [];
    
    
    // Перенаправляем на страницу со страшилкой
    setTimeout(() => {
        window.location.href = 'chance/chance.html';
    }, 69);
}

document.addEventListener('DOMContentLoaded', function() {
  // Находим все области карты
  const areas = document.querySelectorAll('area[data-sound]');
  
  areas.forEach(area => {
    area.addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем переход по ссылке (если href есть)
      
      const soundId = this.getAttribute('data-sound');
      const audio = document.getElementById(soundId);
      
      if (audio) {
        // Останавливаем и перематываем на начало перед воспроизведением
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Автоплей заблокирован браузером"));
      }
    });
  });
  
  // Опционально: визуальный фидбек при наведении
  areas.forEach(area => {
    area.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
      // Можно добавить всплывающую подсказку
      this.title = "Нажми для звука!";
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');
    
    // Проверяем историю браузера
    if (window.history.length > 1) {
        // Если есть куда возвращаться
        backButton.classList.add('active');
        backButton.title = "Вернуться назад";
        
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    } else {
        // Если это первая страница в сессии
        backButton.classList.add('disabled');
        backButton.title = "Нет предыдущей страницы";
        
        // Опционально: можно сделать неактивной
        backButton.style.opacity = "0.5";
        backButton.style.cursor = "default";
        
    }
});