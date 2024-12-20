document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
                entry.target.classList.add('visible');
        }
        });
    });
    
    elements.forEach(element => observer.observe(element));   

    document.querySelectorAll('.swlogo').forEach((sw) => {
        sw.addEventListener('click', () => {
            window.location.href="SW.html";
        });
    });
    document.querySelectorAll('.swlogo.page').forEach((sw1) => {
        sw1.addEventListener('click', () => {
            window.location.href="../../SW.html";
        });
    });
  document.querySelectorAll(".div-container-logo1.page").forEach((sw1) => {
        sw1.addEventListener("click", () => {
            window.location.href="SW.html";
        });
    });
    
    document.querySelectorAll(".div-container-logo1.pages").forEach((sw1) => {
        sw1.addEventListener("click", () => {
            window.location.href="../../SW.html";
        });
    });

    let currentIndex = 1;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const btnSlider1 = document.getElementById('btn-slider1');
    const btnSlider2 = document.getElementById('btn-slider2');
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
            }, 500);
        }

        if (currentIndex === totalSlides - 1) {
            setTimeout(() => {
                slides.style.transition = 'none';
                currentIndex = 1;
                slides.style.transform = `translateX(${-currentIndex * 100}%)`;
            }, 500);
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
    
    btnSlider1.addEventListener('click', () => {
        stopSlider();
        showSlide(currentIndex - 1);
        startSlider();
    });
    
    btnSlider2.addEventListener('click', () => {
        stopSlider();
        showSlide(currentIndex + 1);
        startSlider();
    });

    // Eventos de pesquisa
    const suggestions2 = document.getElementById('suggestions');
    const searchinput = document.getElementById('search-input');
    const closebutton = document.getElementById('search-menu');
    const style = window.getComputedStyle(closebutton);
    var gifContainer = document.getElementById('gif-container');
    var containerLogo = document.querySelector('.container-logo-phone');
    
   document.querySelectorAll('.readmore1').forEach((readBtn1) => {
       readBtn1.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/anakin.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/anakin.html';
       }
       });
   });
   
   document.querySelectorAll('.readmore2').forEach((readBtn2) => {
       readBtn2.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/din.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/din.html';
       }
       });
   });
    
   document.querySelectorAll('.readmore3').forEach((readBtn3) => {
       readBtn3.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/empire.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/empire.html';
       }
       });
   });
    
   document.querySelectorAll('.readmore4').forEach((readBtn4) => {
       readBtn4.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/yoda.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/yoda.html';
       }
       });
   });
    
   document.querySelectorAll('.readmore5').forEach((readBtn5) => {
       readBtn5.addEventListener('click', () => {
           if (window.innerWidth > 768) {
               gifContainer.style.display = 'flex';
        setTimeout(() => {
               window.location.href = 'src/html/empire.html';
        }, 1500);
           } else {
               window.location.href = 'src/html/empire.html';
           }
       });       
   });
   
   document.querySelectorAll('.luke1').forEach((lukeBtn1) => {
       lukeBtn1.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/luke.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/luke.html';
       }
       });
   });
   
   document.querySelectorAll('.ahsoka1').forEach((ahsokaBtn1) => {
       ahsokaBtn1.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/ahsoka.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/ahsoka.html';
       }
       });
   });
   
   document.querySelectorAll('.clone1').forEach((cloneBtn1) => {
       cloneBtn1.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/clone.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/clone.html';
       }
       });
   });
   
   document.querySelectorAll('.yavin1').forEach((yavinBtn1) => {
       yavinBtn1.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/yavin.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/yavin.html';
       }
       });
   });
   
   document.querySelectorAll('.rebel1').forEach((rebelBtn1) => {
       rebelBtn1.addEventListener('click', () => {
       if (window.innerWidth > 768) {
           gifContainer.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'src/html/rebel.html';
        }, 1500);
       } else {
           window.location.href = 'src/html/rebel.html';
       }
       });
   });

document.querySelectorAll('.swlogo, .sw-text, .container-grid, .container-grid1, .header-grid2, .read-more').forEach((animationFade) => {
       animationFade.addEventListener('mouseenter', () => {
           animationFade.classList.remove('animationScale2');
           animationFade.classList.add('animationScale1');
       });
       animationFade.addEventListener('mouseleave', () => {
           animationFade.classList.remove('animationScale1');
           animationFade.classList.add('animationScale2');
       });
   });
    
    document.querySelectorAll(".search").forEach((searchBtn) => {
        searchBtn.addEventListener("click", () => {
            if (style.display === 'none') {
            closebutton.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            searchinput.focus();
            if (window.innerWidth <= 768) {
                containerLogo.style.display = 'none';
            }
        } else {
            closebutton.style.display = 'none';
        }
        });
    });
    document.getElementById('close-btn').addEventListener('click', function() {
        if (style.display === 'none') {
            closebutton.style.display = 'flex';
        } else {
            closebutton.style.display = 'none';
            searchinput.value = '';
            suggestions2.innerHTML = '';
            document.body.style.overflow = 'scroll';
            if (window.innerWidth <= 768) {
                containerLogo.style.display = 'flex';
            }
        }
    });

    document.addEventListener('keydown', function(keypress) {
        if (keypress.key === 'Enter' && style.display === 'flex') {
            closebutton.style.display = 'none';
            searchinput.value = '';
            suggestions2.innerHTML = '';
            document.body.style.overflow = 'scroll';
            if (window.innerWidth <= 768){
                containerLogo.style.display = 'flex';
            }
        }
    });

    function fetchSections() {
        return new Promise((resolve, reject) => {
            // fetch
            if (window.fetch) {
                fetch('src/data.json')
                    .then(response => response.json())
                    .then(data => resolve(data.sections))
                    .catch(error => reject(new Error("Erro ao carregar o arquivo JSON.")));
              // XMLHttpRequest
            } else {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "src/data.json", true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        try {
                            const data = JSON.parse(xhr.responseText);
                            resolve(data.sections);
                        } catch (error) {
                            reject(new Error("Erro ao analisar o JSON."));
                        }
                    }
                };
                xhr.send();
            }
        });
    }

    // Mostrar sugestões de pesquisa
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
            
            suggestionDiv.addEventListener('click', function (event) {
                event.preventDefault();
                
                if (window.innerWidth > 768) {
                  if (section.type === 'external'){
                    gifContainer.style.display = 'flex';
                    closebutton.style.display = 'none';
                  } else {
                    gifContainer.style.display = 'none';
                }
                }

                setTimeout(() => {
                    if (section.type === "internal") {
                        window.location.hash = `#${section.id}`;
                    } else if (section.type === "external") {
                        window.location.href = section.url;
                    }
                }, 1500);
            });

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
    // Eventos de pesquisa
    
    const userInfo = document.querySelectorAll('.info-user');
    const username = localStorage.getItem('username');
  
    if (username) {
      userInfo.forEach((element) => {
        element.innerHTML = username;
      });
      document.querySelectorAll('.account-div').forEach((account1) => {
       account1.addEventListener('click', () => {
           localStorage.clear();
           window.location.href = 'SW.html';
       });
    });
    } else {
        document.querySelectorAll('.account-div').forEach((account1) => {
       account1.addEventListener('click', () => {
           window.location.href='src/html/login.html';
       });
    });
    }

  if (window.location.pathname.endsWith('/')) {
    window.history.replaceState({}, '', window.location.pathname + 'SW.html');
}
});
