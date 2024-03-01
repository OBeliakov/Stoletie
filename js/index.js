document.addEventListener("DOMContentLoaded", () => {
    const houseDots = document.querySelectorAll('.house-slider__dot');
    // const counter = document.querySelector('.house-slider-wrapper .counter');
    const mobMenuBtn = document.querySelector('.header-burger-menu');
    
    if (mobMenuBtn) {
      mobMenuBtn.onclick = () => {
        mobMenuBtn.classList.toggle('active');
        document.body.classList.toggle('scroll-disabled')
      }
    }

    $('.house-slider').slick({
        dots: true,
        fade: true,
        appendDots: $('.house-slider__dots'),
        customPaging: function(slick,index) {
          if (houseDots) {
            return Array.from(houseDots).map((item, number) => {
                if (number === index) {
                    return `<a>${item.innerHTML}</a>`;
                }
            })
          }
        },
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        focusOnSelect: true,
    });

    // $('.house-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     if (counter) {
    //       counter.innerHTML = `<span>${i}</span>/<span>${slick.slideCount}</span>`;
    //     }
    // });

    const sliderStart = document.querySelector('.start-value-holder');
    const sliderEnd = document.querySelector('.end-value-holder');

    $(function() {
      $("#price-range").slider({
        range: true, 
        min: 0, 
        max: 15000000, 
        values: [700000, 9000000], 
        slide: function(event, ui) {
          $("#priceRange").val( ui.values[0] + " - " + ui.values[1]);
          if (sliderStart && sliderEnd) {
            sliderStart.innerHTML =  ui.values[0];
            sliderEnd.innerHTML = ui.values[1];
          }
        }
      });

      if (sliderStart && sliderEnd) {
      sliderStart.innerHTML = $("#price-range").slider("values", 0);
      sliderEnd.innerHTML = $("#price-range").slider("values", 1);
    }
    });

    // popular-projects-slider

    $('.popular-projects-slider').slick({
        dots: false,
        // appendDots: $('.house-slider__dots'),
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        swipeToSlide: true,
        adaptiveHeight: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: `
        <button class="slide-arrow slide-arrow-prev">
            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.55078 1L5.82601 5.2098L1.55078 9.4196" stroke="#0E0E0E" stroke-width="2"/>
            </svg>
        </button>`,
        nextArrow: `
        <button class="slide-arrow slide-arrow-next">
            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.55078 1L5.82601 5.2098L1.55078 9.4196" stroke="#0E0E0E" stroke-width="2"/>
            </svg>
        </button>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });

    function sliderInit() {
      $('.popular-projects-new-slider').slick({
        dots: true,
        // appendDots: $('.house-slider__dots'),
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        swipeToSlide: true,
        adaptiveHeight: true,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
              },
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            }
        ]
    });
  }

  function sliderDestroy() {
    $('.popular-projects-new-slider').slick('unslick');
  }

  if (window.innerWidth < 1024) {
    sliderInit();
  }
    
  $('.ready-projects-slider').slick({
        dots: false,
        // appendDots: $('.house-slider__dots'),
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        adaptiveHeight: true,
        variableWidth: true,
        // focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    // centerMode: true,
                    variableWidth: true,
                    // centerPadding: '40px',
                }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });

    $('.service-life-slider').slick({
        dots: false,
        // appendDots: $('.house-slider__dots'),
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        swipeToSlide: true,
        adaptiveHeight: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: `
        <button class="slide-arrow slide-arrow-prev slide-arrow-life">
            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.55078 1L5.82601 5.2098L1.55078 9.4196" stroke="#0E0E0E" stroke-width="2"/>
            </svg>
        </button>`,
        nextArrow: `
        <button class="slide-arrow slide-arrow-next slide-arrow-life">
            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.55078 1L5.82601 5.2098L1.55078 9.4196" stroke="#0E0E0E" stroke-width="2"/>
            </svg>
        </button>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });

    const servicesInfo = document.querySelectorAll('.service-life-info');
    // const serviceSlides =  document.querySelectorAll('.service-life-slide');

    $('.service-life-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      if (servicesInfo) {
        Array.from(servicesInfo).forEach((info) => {
            if  (info.dataset.info == currentSlide + 1 ) {
                info.classList.add('visible');
            } else {
                info.classList.remove('visible');
            }
        })
      }
    });

    $('.faq-block-slider').slick({
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      swipeToSlide: true,
      adaptiveHeight: true,
      variableWidth: true,
      focusOnSelect: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
      ]
  });

  // const selectedItem = document.querySelector('.select-selected');
  // const selectedContent = document.querySelectorAll('.selected-content');

  //   var x, i, j, l, ll, selElmnt, a, b, c;
  //   /*look for any elements with the class "custom-select":*/
  //   x = document.getElementsByClassName("custom-select");
  //   l = x.length;
  //   for (i = 0; i < l; i++) {
  //     selElmnt = x[i].getElementsByTagName("select")[0];
  //     ll = selElmnt.length;
  //     /*for each element, create a new DIV that will act as the selected item:*/
  //     a = document.createElement("DIV");
  //     a.setAttribute("class", "select-selected");
  //     a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  //     x[i].appendChild(a);
  //     /*for each element, create a new DIV that will contain the option list:*/
  //     b = document.createElement("DIV");
  //     b.setAttribute("class", "select-items select-hide");
  //     for (j = 1; j < ll; j++) {
  //       /*for each option in the original select element,
  //       create a new DIV that will act as an option item:*/
  //       c = document.createElement("DIV");
  //       c.innerHTML = selElmnt.options[j].innerHTML;
  //       c.addEventListener("click", function(e) {
  //         console.log(selectedItem)

  //           /*when an item is clicked, update the original select box,
  //           and the selected item:*/
  //           var y, i, k, s, h, sl, yl;
  //           s = this.parentNode.parentNode.getElementsByTagName("select")[0];
  //           sl = s.length;
  //           h = this.parentNode.previousSibling;
  //           for (i = 0; i < sl; i++) {
  //             if (s.options[i].innerHTML == this.innerHTML) {
  //               s.selectedIndex = i;
  //               h.setAttribute("data-option", `${s.options[i].dataset.option}`);
  //               h.innerHTML = this.innerHTML;
  //               y = this.parentNode.getElementsByClassName("same-as-selected");
  //               yl = y.length;
  //               for (k = 0; k < yl; k++) {
  //                 y[k].removeAttribute("class");
  //               }
  //               this.setAttribute("class", "same-as-selected");
  //               break;
  //             }
  //           }
  //           h.click();
  //       });
  //       b.appendChild(c);
  //     }
  //     x[i].appendChild(b);
  //     a.addEventListener("click", function(e) {
  //         /*when the select box is clicked, close any other select boxes,
  //         and open/close the current select box:*/
  //         e.stopPropagation();
  //         closeAllSelect(this);
  //         console.log(selectedItem)
  //         this.nextSibling.classList.toggle("select-hide");
  //         this.classList.toggle("select-arrow-active");
  //       });
  //   }
  //   function closeAllSelect(elmnt) {
  //     /*a function that will close all select boxes in the document,
  //     except the current select box:*/
  //     var x, y, i, xl, yl, arrNo = [];
  //     x = document.getElementsByClassName("select-items");
  //     y = document.getElementsByClassName("select-selected");
  //     xl = x.length;
  //     yl = y.length;
  //     for (i = 0; i < yl; i++) {
  //       if (elmnt == y[i]) {
  //         arrNo.push(i)
  //       } else {
  //         y[i].classList.remove("select-arrow-active");
  //       }
  //     }
  //     for (i = 0; i < xl; i++) {
  //       if (arrNo.indexOf(i)) {
  //         x[i].classList.add("select-hide");
  //       }
  //     }
  //   }
  //   /*if the user clicks anywhere outside the select box,
  //   then close all select boxes:*/
  //   document.addEventListener("click", closeAllSelect);

    const projectSelect = document.querySelector('.project-card__select.custom-select select');
    const projectSelectedContent = document.querySelectorAll('.selected-content');

    if (projectSelect && projectSelectedContent) {
        projectSelect.onchange = (e) => {
          Array.from(projectSelect.children).forEach((child) => {
            child.classList.remove('selected');
          })

          Array.from(e.target.children).forEach((child, index) => {
            if (child.selected) {
              child.classList.add('selected');
            }
            projectSelectedContent[index].classList.remove('shown');
            if (child.classList.contains('selected') && child.dataset.option === projectSelectedContent[index].dataset.content) {
              projectSelectedContent[index].classList.add('shown');
            }
          })
        }
      }
    

    const modalBtnsContainer = document.querySelector('.map-modal-buttons');
    const modalBtns = document.querySelectorAll('.map-modal-btn');
    const modalWindow = document.querySelector('.modal');
    const modalBlocks = document.querySelectorAll('.modal-block');
    const modalClose = document.querySelector('.modal-close');
    const contactBlockBtns = document.querySelectorAll('.contacts-block__button');
    const contactBlock = document.querySelectorAll('.contacts-block-info-block');
    const mapBtnContainer = document.querySelectorAll('.map-btn-container');
    const mapBtns = document.querySelectorAll('.mobile-nav-button');

    if (modalBtnsContainer && modalBtns && modalWindow) {
    modalBtnsContainer.onclick = (e) => {
      modalWindow.classList.add('visible');
      
      modalBtns.forEach((btn) => {
        btn.classList.remove('active');
      })

      modalBlocks.forEach((block) => {
        if (e.target.dataset.map === block.dataset.modal) {
          block.classList.add('visible');
        }
      })

      e.target.classList.add('active');
    }
  }

    Array.from(contactBlock).forEach((block) => {
      block.onclick = (e) => {
        contactBlockBtns.forEach((btn) => {
          btn.classList.remove('active');
        })

        modalBlocks.forEach((block) => {
          if (e.target.dataset.map === block.dataset.modal) {
            block.classList.add('visible');
            e.target.classList.add('active');
            modalWindow.classList.add('visible');
          }
        })
      }
    })

    mapBtnContainer.forEach((block) => {
      block.onclick = (e) => {
        mapBtns.forEach((btn) => {
          btn.classList.remove('active');
        })

        modalBlocks.forEach((block) => {
          if (e.target.dataset.map === block.dataset.modal) {
            block.classList.add('visible');
            e.target.classList.add('active');
            modalWindow.classList.add('visible');
          }
        })
      }
    })

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map1', {
          center: [55.753994, 37.622093],
          zoom: 9,
          // Добавим панель маршрутизации.
          controls: ['routePanelControl']
      });
  
      var control = myMap.controls.get('routePanelControl');
  
      // Зададим состояние панели для построения машрутов.
      control.routePanel.state.set({
          // Тип маршрутизации.
          type: 'masstransit',
          // Выключим возможность задавать пункт отправления в поле ввода.
          fromEnabled: true,
          // Адрес или координаты пункта отправления.

          to: 'Мега Дыбенко, 37, Мурманское шоссе 12 км, Кудрово',
          // Включим возможность задавать пункт назначения в поле ввода.
          toEnabled: false,
          // Адрес или координаты пункта назначения.
          //to: 'Петербург'
      });
  
      // Зададим опции панели для построения машрутов.
      control.routePanel.options.set({
          // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
          allowSwitch: false,
          // Включим определение адреса по координатам клика.
          // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
          reverseGeocoding: true,
          // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
          types: { masstransit: true, pedestrian: true, taxi: true }
      });
  
      // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
      var switchPointsButton = new ymaps.control.Button({
          data: {content: "Поменять местами", title: "Поменять точки местами"},
          options: {selectOnClick: false, maxWidth: 160}
      });
      // Объявляем обработчик для кнопки.
      switchPointsButton.events.add('click', function () {
          // Меняет местами начальную и конечную точки маршрута.
          control.routePanel.switchPoints();
      });
      myMap.controls.add(switchPointsButton);
    })

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map2', {
          center: [55.753994, 37.622093],
          zoom: 9,
          // Добавим панель маршрутизации.
          controls: ['routePanelControl']
      });
  
      var control = myMap.controls.get('routePanelControl');
  
      // Зададим состояние панели для построения машрутов.
      control.routePanel.state.set({
          // Тип маршрутизации.
          type: 'masstransit',
          // Выключим возможность задавать пункт отправления в поле ввода.
          fromEnabled: true,
          // Адрес или координаты пункта отправления.

          to: 'пр. Культуры, 41',
          // Включим возможность задавать пункт назначения в поле ввода.
          toEnabled: false,
          // Адрес или координаты пункта назначения.
          //to: 'Петербург'
      });
  
      // Зададим опции панели для построения машрутов.
      control.routePanel.options.set({
          // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
          allowSwitch: false,
          // Включим определение адреса по координатам клика.
          // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
          reverseGeocoding: true,
          // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
          types: { masstransit: true, pedestrian: true, taxi: true }
      });
  
      // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
      var switchPointsButton = new ymaps.control.Button({
          data: {content: "Поменять местами", title: "Поменять точки местами"},
          options: {selectOnClick: false, maxWidth: 160}
      });
      // Объявляем обработчик для кнопки.
      switchPointsButton.events.add('click', function () {
          // Меняет местами начальную и конечную точки маршрута.
          control.routePanel.switchPoints();
      });
      myMap.controls.add(switchPointsButton);
    })

    const catalogProjects = document.querySelector('.catalog-projects-container');
    const changeViewContainer = document.querySelector('.change-view');
    const changeViewBtn = document.querySelectorAll('.change-view__btn');

    if (changeViewContainer && catalogProjects && changeViewBtn) {
      changeViewContainer.onclick = (e) => {
        changeViewBtn.forEach((btn) => {
          btn.classList.remove('active');
        })

        e.target.classList.add('active');

        if (e.target.classList.contains('active')) {
          if (e.target.classList.contains('full-width')) {
            catalogProjects.classList.add('full-width');
          } else if (e.target.classList.contains('part-view')) {
            catalogProjects.classList.remove('full-width');
          }
        }
      }
    }

    $('.catalog-page-photos-slider').slick({
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      infinite: false,
      swipeToSlide: true,
      adaptiveHeight: true,
      variableWidth: true,
      focusOnSelect: true,
      responsive: [
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            }
          },
      ]
  });

  const textArea = document.querySelector('.ask-us__textarea');

  if (textArea) {
    function resetCursor(txtElement) { 
      if (txtElement.setSelectionRange) { 
          txtElement.focus(); 
          txtElement.setSelectionRange(0, 0); 
      } else if (txtElement.createTextRange) { 
          var range = txtElement.createTextRange();  
          range.moveStart('character', 0); 
          range.select(); 
      } 
    };

    resetCursor(textArea);

    textArea.oninput = function() {
      var len = this.value.length-22;
      if (len > this.max) {
        this.value = this.value.substr(0, this.max);
        return false;
      }

      // console.log(len);
      // document.getElementById('max-' + this.id).innerHTML = 'Осталось: ' + (+this.max - len) + ' символов';
    };
  }

  const catalogDropdown = document.querySelectorAll('.catalog-filter-dropdown');
  const catalogDropdownBtn = document.querySelectorAll('.catalog-filter-dropdown__button');

  $(".catalog-navigation-list").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  })

  if (catalogDropdownBtn) {
    Array.from(catalogDropdownBtn).forEach((btn) => {
      btn.onclick = () => {
        btn.classList.toggle('closed');
      }
    })
  }

  $('.project-card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.project-nav-thumbnails',
    infinite: false,
    swipeToSlide: false,
    swipe: false,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          swipeToSlide: true,
          swipe: true,
        }
      },
  ]
  });

  $('.project-nav-thumbnails').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.project-card-slider',
    dots: false,
    focusOnSelect: true,
    // infinite: false,
  });


  $('.project-nav-thumbnails .slick-slide').removeClass('slick-active');

  // Set active class to first thumbnail slides
  $('.project-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.project-card-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.project-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.project-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });

  const planBtnsContainer = document.querySelector('.project-card-planning-buttons');
  const planBtns = document.querySelectorAll('.project-card-planning__button');
  const planBlocks = document.querySelectorAll('.project-card-planning-block');

  if (planBtnsContainer && planBtns && planBlocks) {
    planBtnsContainer.onclick = (e) => {
      planBtns.forEach((btn, index) => {
        btn.classList.remove('active');

        if (e.target.dataset.planBtn === planBlocks[index].dataset.planBlock) {
          planBlocks[index].classList.add('shown');
        } else {
          planBlocks[index].classList.remove('shown');
        }
      })
      e.target.classList.add('active');
    }
  }

  const mobileFormTitle = document.querySelector('.catalog-filters__title--mobile');
  const settingsPanel = document.querySelector('.settings-panel');

  if (mobileFormTitle) {
    mobileFormTitle.onclick = () => {
      mobileFormTitle.classList.toggle('active');
      settingsPanel.classList.toggle('column')
    }
  }

  $(".project-card-features__link").on("click", function (e) {
    e.preventDefault(); 
    var id,
        top;
    if (window.innerWidth > 1024) {
          id  = $(this).attr('href');
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    } else {
          id  = $(this).attr('href')+ '-mobile';
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    }
  })

  const projectDownloadBtn = document.querySelectorAll('.project-card-features__link-download');

  if (projectDownloadBtn) {
    Array.from(projectDownloadBtn).forEach((btn) => {
      btn.onclick = () => {
        modalBlocks.forEach((block) => {
          if (btn.dataset.btn === block.dataset.modal) {
            modalWindow.classList.add('visible');
            block.classList.add('visible');
          }
        })  
      }
    })
  }

  const videoBtn = document.querySelector('.about-us-video-link');

  if (videoBtn) {
    videoBtn.onclick = (e) => {
      e.preventDefault()
      modalBlocks.forEach((block) => {
        if (videoBtn.dataset.btn === block.dataset.modal) {
          modalWindow.classList.add('visible');
          block.classList.add('visible');
        }
      })  
    }
  }

  const projectTabsContainer = document.querySelectorAll('.project-card-table-tabs');
  const projectTabsButtons = document.querySelectorAll('.project-card-table-tab');
  const projectTable = document.querySelectorAll('.project-card-table');

  if (projectTabsContainer &&  projectTabsButtons && projectTable) {
    projectTabsContainer.forEach((container) => {
      container.onclick = (e) => {
        Array.from(projectTabsButtons).forEach((btn, index) => {
          btn.classList.remove('active');
  
          if (e.target.dataset.tab === projectTable[index].dataset.table) {
            projectTable[index].classList.add('shown');
          } else {
            projectTable[index].classList.remove('shown');
          }
        })
  
        e.target.classList.add('active');
      }
    })
  }

  const youtubeVideos = document.querySelectorAll('.y-video');

  if (modalClose) {
    modalClose.onclick = () => {
      modalBlocks.forEach((block) => {
        block.classList.remove('visible');
      })

      modalBtns.forEach((btn) => {
        btn.classList.remove('active');
      })

      contactBlock.forEach((block) => {
        block.classList.remove('visible');
      })

      Array.from(youtubeVideos).forEach((video) => {
        // player.stopVideo();
        video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      })

      modalWindow.classList.remove('visible');
    }
  }

  (function inputFocus() {
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
      const input = searchForm.querySelector('input');
      const resetSearch = searchForm.querySelector('.search-reset');
      const submitSearch = searchForm.querySelector('.search-btn');

      input.addEventListener('focus', () => {
        input.classList.add('expanded');
      })
  
      input.addEventListener('input', () => {
        if (input.value.trim().length) {
          searchForm.classList.add('active');
        } else {
          searchForm.classList.remove('active');
        }
      });

      input.addEventListener('blur', (e) => {
        if (e.relatedTarget !== resetSearch && e.relatedTarget !== submitSearch) {
          searchForm.classList.remove('active');
          input.classList.remove('expanded');
        }
      });

      resetSearch.addEventListener('click', (e) => {
        e.preventDefault();
        input.value = '';
        searchForm.classList.remove('active');
        input.classList.remove('expanded');
      })
    }
    
    
    const searchMobExpBtn = document.querySelector('.search-form__expand-btn');
    const searchFormMob = document.querySelector('.search-form--mobile');
    

    if (searchFormMob && searchMobExpBtn) {
      const inputMob = searchFormMob.querySelector('input');
      const resetSearchMob = searchFormMob.querySelector('.search-reset');
      const submitSearchMob = searchFormMob.querySelector('.search-btn');

      inputMob.addEventListener('input', () => {
        if (inputMob.value.trim().length) {
          searchFormMob.classList.add('active');
        } else {
          searchFormMob.classList.remove('active');
        }
      });
  
      searchMobExpBtn.addEventListener('click', () => {
        searchFormMob.classList.toggle('opened');
        searchMobExpBtn.classList.toggle('active');
      })
  
      inputMob.addEventListener('blur', (e) => {
        if (e.relatedTarget !== resetSearchMob && e.relatedTarget !== submitSearchMob) {
          searchFormMob.classList.remove('active');
        }
      })
  
      resetSearchMob.addEventListener('click', (e) => {
        e.preventDefault();
        inputMob.value = '';
        searchFormMob.classList.remove('active');
      })
    }

  }())

  window.addEventListener('resize', () => {
    

    if (window.innerWidth >= 1024) {
      sliderDestroy();
    } else {
      sliderInit();
    }
  })
}); 

