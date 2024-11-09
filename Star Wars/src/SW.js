document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
    
    document.querySelectorAll('.swlogo').forEach(function(sw) {
        sw.addEventListener('click', function() {
            window.location.href="../../SW.html";
        });
    });
});

let currentIndex = 1;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length + 2;
let slideInterval;

function updatePagination() {
    const indexToDisplay = (currentIndex - 1) % dots.length;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[indexToDisplay].classList.add('active');
}

function showSlide(index) {
    currentIndex = index;

    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    if (currentIndex === 0) {
        setTimeout(() => {
            slides.style.transition = 'none'; 
            currentIndex = totalSlides - 2;
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        }, 500); // O tempo da transição deve ser o mesmo (0.5s)
    }

    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = 1;
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        }, 500); // O tempo da transição deve ser o mesmo (0.5s)
    }

    updatePagination();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 11000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlider();
        showSlide(index + 1);
        startSlider();
    });
});

showSlide(currentIndex); 
startSlider();

// Eventos de redirecionamento de classes
const anakin = document.querySelectorAll('.anakin-redirection');
anakin.forEach(a => {
    a.addEventListener('click', () => {
        window.location.href ='src/html/anakin.html';
    });
});
// Eventos de redirecionamento de classes 

// Eventos de pesquisa
document.getElementById('search').addEventListener('click', function() {
    let searchbutton = document.getElementById('search-menu');
    let style = window.getComputedStyle(searchbutton);
    
    if (style.display === 'none') {
        searchbutton.style.display = 'flex';
    } else {
        searchbutton.style.display = 'none';
    }
});

var suggestions2 = document.getElementById('suggestions');
var searchinput = document.getElementById('search-input');
var closebutton = document.getElementById('search-menu');
var style = window.getComputedStyle(closebutton); 

document.getElementById('close-btn').addEventListener('click', function() {
    
    if (style.display === 'none') {
        closebutton.style.display = 'flex';
    } else {
        closebutton.style.display = 'none';
        searchinput.value = '';
        suggestions2.innerHTML = '';
    }
});

document.addEventListener('keydown' , function(keypress) {
    if (keypress.key === 'Enter' && style.display === 'flex') {
        closebutton.style.display = 'none';
        searchinput.value = '';
        suggestions2.innerHTML = '';
    }
});

document.addEventListener('scroll', function() {
    if (style.display === 'flex') {
        closebutton.style.display = 'none';
        searchinput.value = '';
        suggestions2.innerHTML = '';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    function fetchSections() {
        return new Promise((resolve, reject) => {
            if (window.fetch) {
                // fetch
                fetch('src/data.json')
                    .then(response => {
                        if (!response.ok) {
                            reject(new Error("Erro ao carregar o arquivo JSON."));
                            return;
                        }
                        return response.json();
                    })
                    .then(data => resolve(data.sections))
                    .catch(error => reject(new Error("Erro ao carregar o arquivo JSON.")));
            } else {
                // XMLHttpRequest
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "src/data.json", true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            try {
                                const data = JSON.parse(xhr.responseText);
                                resolve(data.sections);
                            } catch (error) {
                                reject(new Error("Erro ao analisar o JSON."));
                            }
                        } else {
                            reject(new Error("Erro ao carregar o arquivo JSON."));
                        }
                    }
                };

                xhr.onerror = function() {
                    reject(new Error("Erro na conexão com o servidor."));
                };

                xhr.send();
            }
        });
    }
    // Função para mostrar as sugestões
    function showSuggestions(sections, input) {
        const suggestionsContainer = document.getElementById('suggestions');
        suggestionsContainer.innerHTML = '';      
        if (input.length === 0) return;       
        const filteredSections = sections.filter(section =>
            section.title.toLowerCase().startsWith(input.toLowerCase())
        );        
        filteredSections.forEach(section => {
            const suggestionDiv = document.createElement('div');
            const img = document.createElement('img');
            img.src = section.image;
            img.alt = section.title;

            const text = document.createElement('span');
            text.textContent = section.title;

            suggestionDiv.appendChild(img);
            suggestionDiv.appendChild(text);        
            if (section.type === "internal") {
                suggestionDiv.onclick = () => {
                    window.location.hash = `#${section.id}`;
                };
            } else if (section.type === "external") {
                suggestionDiv.onclick = () => {
                    window.location.href = section.url;
                };
            }       
            suggestionsContainer.appendChild(suggestionDiv);
        });
    }
    document.getElementById('search-input').addEventListener('input', async function() {
        const input = this.value;
        try {
            const sections = await fetchSections();
            showSuggestions(sections, input);
        } catch (error) {
            console.error(error.message);
        }
    });
});
// Eventos de pesquisa
