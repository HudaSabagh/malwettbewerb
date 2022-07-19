function en() {
  localStorage.setItem("lang", "en")
  $("#wie").text("how works");

  $("#hoch").text("Photo upload");

  $("#bilder").text("Photos");

  $("#enImage").html(
    `<img src="/assets/images/layouts/Untitled-2.png" class="actionimage" alt="fliegen" id="enImage">`
  );
  $("#so-funkt").html(
    `<img src="assets/images/layouts/title_bg.png" alt="line" class="">
              <h2 class="card-title title2">The best painting competition ever.
              </h2>
              <h3 style="color: #c85239;"> And this is how it works!</h3>
              <img src="assets/images/layouts/title_bg.png" alt="line" class="">`
  );

  $("#firstCard").text(
    "The theme of this year's competition: draw or paint what your greatest wish for that next year is. What would you like to experience, see, do, what is yours dearest dream?"
  );

  $("#c1-title").text("TO DRAW");

  $("#secondCard").text(
    "Please scan or photograph the work of art and upload and submit it no later than November 5, 2021 using the contact form below."
  );

  $("#c2-title").text("DIGITIZE");

  $("#thirdCard").text(
    "All works of art will then be exhibited online in the large Sumsi gallery. Your friends, family, grandparents and neighbors can admire your drawing there."
  );

  $("#c3-title").text("EXHIBIT");

  $("#fourthCard").text(
    "Every drawing is great! 10 drawings will be drawn from all submitted works of art. Great prizes are waiting for these 10!"
  );

  $("#c4-title").text("TO WIN");

  $("#herzlich").text("Welcome to the big SUMSI painting competition");

  $("#liebe").html(
    `<p>Dear children, dear parents,<br> As every year, there is also our traditional Sumsi painting competition this year.<br>Again digital, again with voting and a large online gallery <br> Every parent who uploads and submits their child's drawing using the contact form below by November 5, 2021 will then be shown in the large Sumsi gallery <a href="/" style="font-size:22px;">www.raiffeisen-sumsi.at</a> released.<br> I'm looking forward to lots of colorful drawings.</p><h6 class="h6-card">Your Raiffeisen Sumsi</h6>`
  );
  $("#rcorners2").html(
    `<h1 style=" font-family: 'SW721KCI.TTF'; font-weight: bold;">
        Sumsi painting competition.<span style=" font-family: 'SW721KCI.TTF'; background-color: #c85239;
        font-weight: bold; "> Take part and win great gifts! </span>
    </h1>`
  );
  $("#text2").html(
    ` <ul>
          <li class="fw-bolder">
              <div class="d-flex">
                  <p class="fw-bolder">
                  To draw, to paint
                  </p>
              </div>

          </li>
          <li>
              <div class="d-flex">
                  <p class="fw-bolder">
                  Digitize
                  </p> &nbsp;
                  <p>(Photo or scan)</p>
              </div>
          </li>
          <li>
              <div class="d-flex">
                  <p class="fw-bolder">
                  Upload and submit by November 5, 2021
                  </p>
              </div>
          </li>
          <li>
              <div class="d-flex">
                  Die&nbsp;
                  <p class="fw-bolder">
                  Exhibition
                  </p> &nbsp;
                  <p>in the Sumsi gallery runs from October 20, 2021.
                  </p>
              </div>
          </li>
          <li>
              <div class="d-flex">
                  <p>
                  With luck one of the
                  </p> &nbsp;
                  <p class="fw-bolder">Win 10 great prizes.</p>
              </div>
          </li>
          <li>
              <div class="d-flex">
                  <p class="fw-bolder">
                  The parents of the winners will be informed by email.
                  </p>
              </div>
          </li>
          <li>
              <div class="d-flex">
                  <p class="fw-bolder">
                  The judges' decision is final.
                  </p>
              </div>
          </li>
      </ul>
      <p class="ml-2">
      I'm looking forward to lots of colorful drawings. Take part and send me your dreams!
      </p>
      <p class="fw-bolder">
      Your Raiffeisen Sumsi
      </p>`
  );
  $("#laden").text("Upload your picture");
  $("#gall-title").html(
    `<img src="assets/images/layouts/title_bg.png" alt="line" class="">
              <h2 class="card-title title2" > Welcome to the large Sumsi gallery
              </h2>
              <h3 style="color: #c85239;">These are the works of art of the participants in the 2021 competition.</h3>
              <img src="assets/images/layouts/title_bg.png" alt="line" class=""></img>`
  );
  $("#footer-tran").html(
    `<img class="pic-1 mt-5 mb-5" src="assets/images/layouts/footer_top_strip.jpg" alt="line">
    <div class="card mb-3 mt-3 border-0">
        <div class="row g-0">
            <div class="col-md-3">
                <div class="card border-0">
                    <img src="assets/images/layouts/jubelde-sumsi-schriftzug-1.png" class="card-img-top rounded-circle"
                        alt="sumsi">
                </div>
            </div>
            <div class="col-md-3 bg-warning">
                <div class="card-body">
                    <h5 class="card-title text-center title_footer mb-3">Contact</h5>
                    <p class="card-text"><i class="fa fa-map-marker-alt  fa-lg" aria-hidden="true"></i>&nbsp; Raiffeisen
                        Landesbank Kärnten, Raiffeisenplatz 1 9020 Klagenfurt am Wörthersee</p>
                    <p class="card-text">
                        <i class="fa fa-phone fa-rotate-90 fa-lg" aria-hidden="true"></i> &nbsp; T +43 463 993 00
                    </p>
                    <p class="card-text">
                        <i class="far fa-envelope fa-lg" aria-hidden="true"></i> &nbsp; info@rbgk.raiffeisen.at
                    </p>
                    <a href="https://www.facebook.com/RaiffeisenLandesbankKaernten/" class="btn btn-primary ">

                        <i class="fab fa-facebook-square text-white rounded-circle fa-2x"></i> facebook
                    </a>
                </div>
            </div>
            <div class="col-md-3 bg-warning ">
                <div class="card-body">
                    <h4 class="card-title text-center title_footer mb-3">INFO/CONDITIONS</h4>
                    <ul style="  list-style-type: none;">
                        <li>
                            <a class="a_footer" href="/views/datenschutzh.html">
                                <p> <i class="far fa-star"></i> Data protection notice</p>
                            </a>
                        </li>
                        <li>
                            <a class="a_footer" href="/views/impressum.html">
                                <p> <i class="far fa-star"></i> Imprint</p>
                            </a>
                        </li>
                        <li>
                            <a class="a_footer" href="/views/cookie.html">
                                <p> <i class="far fa-star"></i>Cookie Policy</p>
                            </a>
                        </li>
                        <li>
                            <a class="a_footer" href="/views/teilnahmebedingungen.html">
                                <p> <i class="far fa-star"></i> Conditions of participation</p>
                            </a>
                        </li>
                        <li>
                            <a class="a_footer"
                                href="https://www.raiffeisen.at/ktn/rlb/de/meine-bank/raiffeisen-bankengruppe/agb.html">
                                <p> <i class="far fa-star"></i> AGB</p>
                            </a>
                        </li>
                        <li>
                            <a class="a_footer"
                                href="https://www.raiffeisen.at/ktn/rlb/de/meine-bank/raiffeisen-bankengruppe/disclaimer.html">
                                <p> <i class="far fa-star"></i> Disclaimer</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0">
                    <img src="assets/images/layouts/jubelde-sumsi-schriftzug-1 (2).png"
                        class="card-img-top rounded-circle" alt="sumsi">
                </div>
            </div>
        </div>
    </div>
    <img class="pic-1 mt-5 mb-3" src="assets/images/layouts/footer_top_strip.jpg" alt="line">
`
  );
  $("#mehr").text("Show more..");
}
$("#eng").click(function (e) {
  $(this).data("clicked", true);
});
