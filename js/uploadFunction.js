//form
//choose img
function getfile() {
  document.getElementById("hiddenfile").click();
}
//add img
function getvalue() {
  document.getElementById("selectedfile").value =
    document.getElementById("hiddenfile").files[0].name;
  var button = document.getElementById("closeimageactiv");
  if (document.getElementById("hiddenfile").files[0].name === "") {
    button.style.display = "none";
  } else {
    button.style.display = "block"; //display x when we choos img
  }
}
//remove choosed img by X
function removeurlimg() {
  //document.getElementById('selectedfile').value='';

  $("#imageview").attr("src", "../assets/icons/Capture.JPG");
  document.getElementById("hiddenfile").value = null;
  var button = document.getElementById("closeimageactiv");
  button.style.display = "none";
}
//display choosed img
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#imageview").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
// Upload form modal
function displaysubmitNewDrawingsEn() {
  const modalElement = document
    .getElementById("mainModal")
    .querySelector(".modal-content");
  modalElement.innerHTML = `<div class="modal-header">
  <h5 class="modal-title" id="mainModalLabel">upload new pictures</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <div class="card border-0">
      <form name="newSubmissionForm" class="row g-3 justify-content-center"
          onsubmit="submitNewDrawings(); return false">
          <div class="col-md-6">
              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary">
                      <i class="fas fa-restroom text-secondary"></i>
                  </a>
                  <input name="parentFirstname" type="text" class="form-control border border-secondary"
                      id="" placeholder="First name of parents" required>
              </div>

          </div>

          <div class="col-md-6">
              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary ">
                      <i class="fas fa-restroom text-secondary"></i>
                  </a>
                  <input name="parentLastname" type="text" class="form-control border border-secondary"
                      id="" placeholder="Last name of parents" required>

              </div>
          </div>

          <div class="col-md-6">
              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary ">
                      <i class="fas fa-child text-secondary"></i>
                  </a>
                  <input name="childFirstname" type="text" class="form-control border border-secondary"
                      id="" placeholder="First name of the child" required>

              </div>

          </div>
          <div class="col-md-6">
              <div class="input-group">
                  <label class="btn form-icon btn-white border border-secondary" for="childAgeSelect"><i class="fas fa-child text-secondary"></i></7i></label>
                  <select class="form-select border border-secondary" id="childAgeSelect">
                      <option selected>age of the child</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      </select>
              </div>
          </div>
          <div class="col-12">

              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary "><i
                          class="far fa-envelope text-secondary"></i>
                  </a>
                  <input name="email" type="email" required class="form-control border border-secondary"
                      id="" placeholder="your@email.com">
              </div>
          </div>


          <div class="col-12 mb-3">
              <div class="form-group">

                  <div id="image" class="upload-drop-zone" style="color: rgb(7, 5, 5);
                                      border-style: dashed;
                                      border-color: rgb(61, 57, 57);
                                      line-height: 150px;
                                      text-align: center;
                                      cursor: pointer;background-color: rgb(237, 241, 241);">
                      <div style="position:relative;">
                          <button type="button" onclick="removeurlimg()" class="btn-close text-dark"
                              id="closeimageactiv" style="display: none"></button>
                          <img onclick="getfile()" src="/assets/icons/Capture.JPG" id="imageview"
                              class="img-fluid mb-4" alt="drop drag">
                      </div>
                  </div>

                  <input name="image" type="file" id="hiddenfile" style="display:none" name="file"
                      class="@error('file') is-invalid @enderror" onChange="getvalue();readURL(this);" />

                  <input type="text" class="form-control text-right" id="selectedfile"
                      style="display:none" placeholder="" value="" aria-label="Recipient's username"
                      aria-describedby="basic-addon2" disabled>
                  <!--drag and drop-->


                  <!--drag and drop-->
              </div>
          </div>
          <div class="col-12">
              <div class="form-check">
                  <input name="acceptParticipation" class="form-check-input" type="checkbox"
                      id="gridCheck" required>
                  <label class="form-check-label" for="gridCheck">
                      Accepting partcipation
                  </label>
              </div>
              <div class="form-check">
                  <input name="acceptPrivacy" class="form-check-input" type="checkbox" id="gridCheck1"
                      required>
                  <label class="form-check-label" for="gridCheck1">
                      Accept our privacy policy
                  </label>
              </div>
              <div class="form-check">
                  <input name="acceptNewsletter" class="form-check-input" type="checkbox" id="gridCheck2">
                  <label class="form-check-label" for="gridCheck2">
                      Maling list
                  </label>
              </div>
          </div>
          <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary text-center">
                  <i class="fa fa-plus"></i>&nbsp;Upload
              </button>
          </div>
      </form>
  </div>
</div>`;
}
function displaysubmitNewDrawings() {
  const modalElement = document
    .getElementById("mainModal")
    .querySelector(".modal-content");
  modalElement.innerHTML = `<div class="modal-header">
  <h5 class="modal-title" id="mainModalLabel">neue Bilder hochladen</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <div class="card border-0">
      <form name="newSubmissionForm" class="row g-3 justify-content-center"
          onsubmit="submitNewDrawings(); return false">
          <div class="col-md-6">
              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary">
                      <i class="fas fa-restroom text-secondary"></i>
                  </a>
                  <input name="parentFirstname" type="text" class="form-control border border-secondary"
                      id="" placeholder="Vorname der Eltern" required>
              </div>

          </div>

          <div class="col-md-6">
              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary ">
                      <i class="fas fa-restroom text-secondary"></i>
                  </a>
                  <input name="parentLastname" type="text" class="form-control border border-secondary"
                      id="" placeholder="Nachname der Eltern" required>

              </div>
          </div>

          <div class="col-md-6">
              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary ">
                      <i class="fas fa-child text-secondary"></i>
                  </a>
                  <input name="childFirstname" type="text" class="form-control border border-secondary"
                      id="" placeholder="Vorname des Kindes" required>

              </div>

          </div>
          <div class="col-md-6">
              <div class="input-group">
              <label class="btn form-icon btn-white border border-secondary" for="childAgeSelect"><i class="fas fa-child text-secondary"></i></7i></label>
              <select class="form-select border border-secondary" id="childAgeSelect">
                  <option selected>Alter des Kindes</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  </select>

              </div>
          </div>
          <div class="col-12">

              <div class="input-group">
                  <a class="btn form-icon btn-white border border-secondary "><i
                          class="far fa-envelope text-secondary"></i>
                  </a>
                  <input name="email" type="email" required class="form-control border border-secondary"
                      id="" placeholder="ihre@email.com">
              </div>
          </div>


          <div class="col-12 mb-3">
              <div class="form-group">

                  <div id="image" class="upload-drop-zone" style="color: rgb(7, 5, 5);
                                      border-style: dashed;
                                      border-color: rgb(61, 57, 57);
                                      line-height: 150px;
                                      text-align: center;
                                      cursor: pointer;background-color: rgb(237, 241, 241);">
                      <div style="position:relative;">
                          <button type="button" onclick="removeurlimg()" class="btn-close text-dark"
                              id="closeimageactiv" style="display: none"></button>
                          <img onclick="getfile()" src="/assets/icons/Capture.JPG" id="imageview"
                              class="img-fluid mb-4" alt="drop drag">
                      </div>
                  </div>

                  <input name="image" type="file" id="hiddenfile" style="display:none" name="file"
                      class="@error('file') is-invalid @enderror" onChange="getvalue();readURL(this);" />

                  <input type="text" class="form-control text-right" id="selectedfile"
                      style="display:none" placeholder="" value="" aria-label="Recipient's username"
                      aria-describedby="basic-addon2" disabled>
                  <!--drag and drop-->


                  <!--drag and drop-->
              </div>
          </div>
          <div class="col-12">
              <div class="form-check">
                  <input name="acceptParticipation" class="form-check-input" type="checkbox"
                      id="gridCheck" required>
                  <label class="form-check-label" for="gridCheck">
                  Teilnahme annehmen
                  </label>
              </div>
              <div class="form-check">
                  <input name="acceptPrivacy" class="form-check-input" type="checkbox" id="gridCheck1"
                      required>
                  <label class="form-check-label" for="gridCheck1">
                  Akzeptieren Sie unsere Datenschutzerklärung
                  </label>
              </div>
              <div class="form-check">
                  <input name="acceptNewsletter" class="form-check-input" type="checkbox" id="gridCheck2">
                  <label class="form-check-label" for="gridCheck2">
                      Maling list
                  </label>
              </div>
          </div>
          <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary text-center">
                  <i class="fa fa-plus"></i>&nbsp; Hochladen
              </button>
          </div>
      </form>
  </div>
</div>`;
}

/* drag and drop code start here */
function uploadNewSubmissionForm() {
  if ($("#eng").data("clicked")) {
    displaysubmitNewDrawingsEn();
  } else {
    displaysubmitNewDrawings();
  }

  /* drag and drop code start here */
  const dropArea = document.getElementById("image");
  dropArea.addEventListener("dragover", (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    event.dataTransfer.dropEffect = "copy";
  });

  dropArea.addEventListener("drop", (event) => {
    event.stopPropagation();
    event.preventDefault();
    const dt = event.dataTransfer;
    const files = dt.files;

    document.querySelector('input[name="image"]').files[0] = files[0];
    document.getElementById("selectedfile").value = files[0].name;
    var button = document.getElementById("closeimageactiv");
    if (files[0].name === "") {
      button.style.display = "none";
    } else {
      button.style.display = "block"; //display x when we choos img
    }
    if (files[0]) {
      var reader = new FileReader();
      newSubmissionForm.querySelector('input[name="image"]').files = files;
      console.log(image);
      reader.onload = function (e) {
        $("#imageview").attr("src", e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  });
}

(function ($) {
  $(document)
    .on("hidden.bs.modal", ".modal", function () {
      $(document.body).removeClass("modal-noscrollbar");
    })
    .on("show.bs.modal", ".modal", function () {
      // Bootstrap adds margin-right: 15px to the body to account for a
      // scrollbar, but this causes a "shift" when the document isn't tall
      // enough to need a scrollbar; therefore, we disable the margin-right
      // when it isn't needed.
      if ($(window).height() >= $(document).height()) {
        $(document.body).addClass("modal-noscrollbar");
      }
    });
})(window.jQuery);
