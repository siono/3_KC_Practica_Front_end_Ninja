var $ = require('jquery');

var favourites = localStorage.getItem('favourites');
if (favourites == null){
    favourites = new Array();
}else{  
    favourites = JSON.parse(favourites);  
}

console.log("Favoritos añadidos a LocalStorage: "+favourites);

loadArticles();

function loadArticles() {
    $('html').find(".item-list").html(renderArticles());
}

function renderArticles() {
    var html = `
        
        <article class="col-md-4 col-lg-3" data-id="1">
            <div class="item">
                <div class="item-info break_word">
                    <img class="thumb" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg" alt="Articulo" srcset="">
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>International Artist Feature: Malaysia</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("1")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 6000))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="col-md-4 col-lg-3" data-id="2">
            <div class="item">
                <div class="item-info break_word">

                    <div class="text-info">
                        <a href="/article.html">
                            <h1>International Artist Feature: Malaysia</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("2")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*15))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>
        
        <article class="col-md-4 col-lg-3" data-id="3">
            <div class="item">
                <div class="item-info break_word">
                    <img class="thumb" src="https://cdn-images-1.medium.com/max/2000/1*4m0aexX7hmtr-JM_lPjmdg.jpeg" alt="Articulo" srcset="">
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Cryptoeconomics: Paving the Future of Blockchain Technology</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("3")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 6000*60*20))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="4">
            <div class="item">
                <div class="item-info break_word">
                    <video class="thumb" poster="https://media.livenationinternational.com/lincsmedia/Media/s/g/t/3ffd6eae-0980-369e-97af-3a9af5500361.jpg"
                        controls preload>
                        <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm>
                        <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg>
                        <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
                        <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
                    </video>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Amazing Series: Game of thrones</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="Avatar"
                            srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("4")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*240))}</div>
                        </div>
                    </div>
                </div>

            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="5">
            <div class="item">
                <div class="item-info break_word">
                    <img class="thumb" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg" alt="Articulo" srcset="">
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>International Artist Feature: Malaysia</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("5")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*500*2))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="6">
            <div class="item">
                <div class="item-info break_word">

                    <div class="text-info">
                        <a href="/article.html">
                            <h1>International Artist Feature: Malaysia</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("6")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*15*500))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="7">
            <div class="item">
                <div class="item-info break_word">
                    <img class="thumb" src="https://cdn-images-1.medium.com/max/2000/1*4m0aexX7hmtr-JM_lPjmdg.jpeg" alt="Articulo" srcset="">
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Cryptoeconomics: Paving the Future of Blockchain Technology</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("7")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*15*600))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="8">
            <div class="item">
                <div class="item-info break_word">
                    <video class="thumb" poster="https://media.livenationinternational.com/lincsmedia/Media/s/g/t/3ffd6eae-0980-369e-97af-3a9af5500361.jpg"
                        controls preload>
                        <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm>
                        <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg>
                        <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
                        <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
                    </video>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Amazing Series: Game of thrones</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="Avatar"
                            srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                   <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("8")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*25*800))}</div>
                        </div>
                    </div>

            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="9">
            <div class="item">
                <div class="item-info break_word">
                    <img class="thumb" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg" alt="Articulo" srcset="">
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>International Artist Feature: Malaysia</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("9")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*15*900))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="10">
            <div class="item">
                <div class="item-info break_word">

                    <div class="text-info">
                        <a href="/article.html">
                            <h1>International Artist Feature: Malaysia</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("10")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*15*2000))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="11">
            <div class="item">
                <div class="item-info break_word">
                    <img class="thumb" src="https://cdn-images-1.medium.com/max/2000/1*4m0aexX7hmtr-JM_lPjmdg.jpeg" alt="Articulo" srcset="">
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Cryptoeconomics: Paving the Future of Blockchain Technology</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://cdn-images-1.medium.com/fit/c/40/40/1*1T1qxjpWS-0lWwVvPMzYSQ.jpeg" alt="Avatar" srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("11")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*15*3000))}</div>
                        </div>
                    </div>
                </div>



            </div>
        </article>

        <article class="col-md-4 col-lg-3" data-id="12">
            <div class="item">
                <div class="item-info break_word">
                    <video class="thumb" poster="https://media.livenationinternational.com/lincsmedia/Media/s/g/t/3ffd6eae-0980-369e-97af-3a9af5500361.jpg"
                        controls preload>
                        <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm>
                        <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg>
                        <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
                        <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
                    </video>
                    <div class="text-info">
                        <a href="/article.html">
                            <h1>Amazing Series: Game of thrones</h1>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum sequi, nulla illo
                                    distinctio blanditiis nesciunt adipisci! Quis vel, numquam esse dicta perspiciatis doloribus
                                    vero placeat rerum officia alias culpa.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer-item">
                    <div class="autor vertical-align">
                        <img class="avatar" src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="Avatar"
                            srcset="">
                        <p>Hoddie Allen</p>
                    </div>

                    <div class="info-interations">
                        <div class="vertical-align pull-right">
                            <div class="go-comments"><i class="fa fa-comment-o" aria-hidden="true">13</i></div>
                            <div class="likes"><i class="${loadClassLike("12")}" aria-hidden="true"></i></div>
                        </div>
                        <div class="vertical-align">
                            <div class="publication_date"><i class="fa fa-calendar" aria-hidden="true"></i>${calculatePublicationDate(new Date(new Date() - 1000*60*15*4000))}</div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
        `;

        return html;
}

$(".likes").click(function(){
   
   let favouriteId = $(this).closest('article')[0].dataset.id;
   let icon_heart = $(this).find(".fa");

    //no ha sido añadido a favorito -> lo añado.
   if (icon_heart.hasClass("fa-heart-o")){ 
       console.log("Elemento "+ favouriteId + " añadido a Favorito ");
       setFavourite(favouriteId);
   }
   
   // ya estaba como favorito -> lo quito
   if (icon_heart.hasClass("fa-heart")){
       console.log("Elemento "+ favouriteId + " eliminado ");
       deleteFavourite(favouriteId);
   }

   //cambio el icono
   icon_heart.toggleClass("fa-heart fa-heart-o");

   //guardo el favorito en variable localstore
   localStorage.setItem('favourites',JSON.stringify(favourites));
   
});


function setFavourite(favourite){
    let key = $.inArray(favourite,favourites);
    if (key == -1){
        favourites.push(favourite);
    }
}

function deleteFavourite(favourite){
    let key = $.inArray(favourite,favourites);
    if (key != -1){
        favourites.splice(key,1);
    }
}

function existFavorite(valor){
    let key = $.inArray(valor,favourites);
    if (key == -1) return false;
    else return true;
}

function loadClassLike(favourite){
    if (existFavorite(favourite)){
        return "fa fa-heart";
    }else{
        return "fa fa-heart-o";
    }
}

$(".go-article-content").click(function() {
    $('html, body').animate({
        scrollTop: $("#main-content").offset().top
    }, 1000);
});

//TODO: no funciona.

$(".go-comments").click(function() {
    
    if (window.location.pathname == "/") {
        window.location.href = "./article.html#comments-list";
    }

    //$(".comments").toggleClass("hidden");
    //$(".comments-title i").toggleClass("fa-caret-up fa-caret-down");
    
    $('html,body').animate(
    {
       scrollTop: $("#comments-list").offset().top
    }, 2000);
});


function calculatePublicationDate(publicationDate){
    
    var unSeg = 1;
    var unMin = unSeg*60;
    var unaHora = unMin * 60;
    var unDia = unaHora * 24;
    var unaSemana = unDia * 7;
    var dias_semana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var meses = new Array ("01","02","03","04","05","06","07","08","09","10","11", "12");
   
    var systemDate = new Date();
    var timeagoSeg = Math.floor((systemDate - publicationDate)/1000);
    
    if (timeagoSeg < unMin) 
        return timeagoSeg + " s";
    else if (timeagoSeg >= unMin && timeagoSeg < unaHora)
        return Math.floor(timeagoSeg/unMin) + " min";
    else if (timeagoSeg >= unaHora && timeagoSeg < unDia)
        return Math.floor(timeagoSeg/unaHora) + " h";
    else if (timeagoSeg >= unDia && timeagoSeg < unaSemana)
        return dias_semana[publicationDate.getDay()];
    else if (timeagoSeg >= unaSemana)
        return  publicationDate.getDate() + "-" + 
                meses[publicationDate.getMonth()] + "-" + 
                publicationDate.getFullYear()+" "+
                addZero(publicationDate.getUTCHours())+":"+addZero(publicationDate.getUTCMinutes()) +" h";
 
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}