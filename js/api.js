// defining the get Auth request from local backend to get token
// at backend we defined post request to get token
async function getAuthToken() {
  try {
    const authToken = await axios.get("http://localhost:4000/api/v1/login");
    console.log(authToken);
    console.log(authToken.data.token);
    sessionStorage.setItem("token", authToken.data.token);
    console.log("token added to Session Storage");
  } catch (error) {
    console.log(`${error.response.status} ${error.response.statusText}`);
  }
}

// for axios defining the default headers here later I will add token inside
const defaultHeadersSumsiApi = {
  baseURL: "https://sumsi.dev.webundsoehne.com/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};

// Creating sumsiDefaultInstance
let sumsiDefaultInstance = axios.create(defaultHeadersSumsiApi);

// Set the AUTH token for any request inside sumsiDefaultInstance
// also checking is there any token or not
sumsiDefaultInstance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";  
  return config;
});

async function getPostAndVotingStatus() {
  try {
    const tokenStatus = await sumsiDefaultInstance.get("/settings");
    const submissionStatus = tokenStatus.data.data.submission_open ? 1 : 0;
    const votingStatus = tokenStatus.data.data.voting_open ? 1 : 0;
    console.log(`Your Submission Status: ${submissionStatus}`);
    console.log(`Your Voting Status: ${votingStatus}`);
    sessionStorage.setItem("submissionStatus", submissionStatus);
    sessionStorage.setItem("votingStatus", votingStatus);
    if (submissionStatus == false) {
      document.querySelector(".image-upload-area").classList.add("d-none");
      console.log("upload area is hided");
    }
  } catch (error) {
    console.log(error);
  }
}

async function displaySubmissions(response) {
  const submissions = response.data.data;
  console.log(submissions);

  function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }
  const chunkedSubmissionList = [...chunks(submissions, 12)];
  console.log(chunkedSubmissionList);
  
  var count = 0;

  function showChunkedSubmissions(count) {
    console.log(`displaying ${count + 1}. part of submissions`);
    if (count >= chunkedSubmissionList.length - 1) {
      console.log("Show more button is hided");
      document.getElementById("image-upload-area").classList.add("d-none");
    }

    for (let submission of chunkedSubmissionList[count]) {
      const childFirstname = submission.child_firstname;
      const childAge = submission.child_age.substring(0, 2);
      const submissionID = submission.id;
      const votedList = submission.votings;
      const likeCount = votedList.length;

      const email = sessionStorage.getItem("email");
      let m = votedList.some(function (item) {
        return item.email === email;
      });

      let heart = "";
      if (m) {
        heart = '<i class="text-danger fas fa-heart"></i>';
      } else {
        heart = `<i class="far fa-heart"></i>`;
      }

      let image = submission?.image?.public_location;
      if (typeof image !== "undefined" && image.length > 0) {
        imgSrc = `https://sumsi.dev.webundsoehne.com${image}`;
      } else {
        imgSrc = `/assets/images/layouts/love.png`;
      }

      let html = ` <!-- Gallery item -->
        <div class="col-6 col-md-4 col-lg-3 g-4">
            <div id="${submissionID}" onclick="getSubmissionAndVotes(this)" class="card submission-cards rounded" data-bs-toggle="modal"
            data-bs-target="#mainModal">
                <div class="bg-image shadow-1-strong"
                    style="background-image: url(${imgSrc}); aspect-ratio: 3 / 2; background-position: center; background-repeat: no-repeat; background-size: cover;">
                    <div class="child-age">${childAge} jahre alt</div>
                </div>
                <div class="bg-light px-2 py-2 d-flex justify-content-between align-items-center">
                    <div class="fs-5 text">${childFirstname}</div>
                    <div class="home-like-count fs-5 text d-flex justify-content-between align-items-center gap-2">
                    ${heart}
                    <span class="fs-6 text-muted">${likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- End -->`;
      document
        .getElementById("submissions")
        .insertAdjacentHTML("beforeend", html);
    }
  }
  showChunkedSubmissions(count);

  document.querySelector(".sub-button").addEventListener("click", (e) => {
    count = count + 1;
    return showChunkedSubmissions(count);
  });
}

async function getSubmissions() {
  try {
    const response = await sumsiDefaultInstance.get("/submissions");
    console.log(response.data);
    displaySubmissions(response);
  } catch (error) {
    console.log(error);
  }
}

function displayVoteCounts(votesCount) {
  const countsHtml = document.querySelector(".vote-counts");
  let votesHtml;
  const currentLang = localStorage.getItem("lang")
  if (currentLang === "de") {
    if (!votesCount <= 0) {
      votesHtmlCount = `diese Zeichnung wurde ${votesCount} mal geliked`;
    } else {
      votesHtmlCount = `niemand hat diese Zeichnung geliked`;
    }
  } else {
    if (!votesCount <= 0) {
      votesHtmlCount = `${votesCount} people already like this drawing`;
    } else {
      votesHtmlCount = `nobody liked this drawing yet`;
    }
  }
  
  votesHtmlBody = `<span class="submission-vote me-2"><i class="me-2 fas fa-grin-hearts"></i></i>${votesHtmlCount}</span>`;
  countsHtml.innerHTML = votesHtmlBody;
  console.log("refreshed the votecounts");
}

function voteForm(id, voteList) {
  if (!sessionStorage["email"]) {
    let formHtml = `
  <div class="btn-group ms-auto">
  <button class="btn btn-outline-secondary rounded like-button" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
  <i class="fas fa-heart"></i>
  </button>
  <form class="vote-form dropdown-menu dropdown-menu-end p-4" id="submit-vote-form" onsubmit="submitVotes();return false">
  <div class="mb-3">
    <label for="vote-input" class="form-label">Email</label>
    <input id="vote-input" name="vote-email" type="email" class="vote-email form-control" value="ihre@mail.com" data-id="${id}" placeholder="ihre@mail.com" required>
  </div>
  <button type="submit" class="btn btn-outline-secondary">Senden</button>
</form>
</div>`;
    return formHtml;
  } else {
    const email = sessionStorage.getItem("email");
    let m = voteList.some(function (item) {
      return item.email === email;
    });
    let button = "";
    if (m) {
      button =
        '<button type="submit" class="vote-email like-button btn btn-danger" disabled><i class="fas fa-heart"></i></button><span class="like-badge position-absolute top-0 start-100 translate-middle p-1 bg-light rounded-circle">+1</span>';
    } else {
      button = `<button type="submit" class="vote-email like-button btn btn-outline-secondary"><i class="fas fa-heart"></i></button>`;
    }

    let formHtml = `<div class="btn-group ms-auto">
    <form id="submit-vote-form" onsubmit="submitVotes();return false">
      <input id="vote-input" name="vote-email" type="hidden" value="${email}" class="vote-email form-control" data-id="${id}" placeholder="ihre@mail.com">
    ${button}
  </form>
  </div>`;
    return formHtml;
  }
}

async function displayModal(data) {
  // display variables
  let votingStatus = sessionStorage.getItem("votingStatus");
  const childName = data.submissionData.child_firstname;
  const childAge = data.submissionData.child_age.substring(0, 2);
  const id = data.submissionData.id;
  console.log(`this submission id is ${id}`);
  const modalImgSrc = document
    .getElementById(`${id}`)
    .querySelector("div")
    .style.getPropertyValue("background-image")
    .slice(4, -1)
    .replace(/"/g, "");
  
    const currentLang = localStorage.getItem("lang")
    let fromAgoHtml = ""
  if (currentLang == "de") {
      moment.locale("de");
      console.log("lang is now 'de'");
      let oldTime = data.submissionData.created_at;
      let timeAgo = moment.utc(oldTime).fromNow();
      fromAgoHtml = `${timeAgo} veröffentlicht`
    } else {
      moment.locale("en");
      console.log("lang is now 'en'");
      let oldTime = data.submissionData.created_at;
      let timeAgo = moment.utc(oldTime).fromNow();
      fromAgoHtml = `published ${timeAgo}`
  }
  
  const votesCount = data.submissionVote.votes;
  const voteList = data.submissionVoteList;

  if (votingStatus == true) {
    formHtml = voteForm(id, voteList);
  } else {
    formHtml = "";
  }

  data.modalElement.innerHTML = `<div class="modal-header">
  <h4 class="modal-title fw-bolder" id="mainModalLabel">${childName}, ${childAge} </h4>
  ${formHtml}
  <button type="button" class="ms-3 btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="vote-error-message text-danger" style=" text-align: center;"></div>
      <div class="modal-image mb-3 g-2 position-relative  align-center">
        <img class="rounded mx-auto d-block" src="${modalImgSrc}" style="max-height: calc(80vh - 150px); max-width: 100%";
        aspect-ratio: auto;" max-height="600" class="modal-image img-fluid rounded mx-auto d-block"
          alt="love">
      </div>
      <div class="text-muted fs-6 fw-lighter bg-light row mb-3 rounded">
        <div class="d-inline-flex p-1 align-items-center">
          <span class="submission-calender"><i class="me-2 fas fa-calendar-week"></i>${fromAgoHtml}</span>
        </div>
        <div class="vote-counts d-inline-flex p-1 align-items-center">
        </div>
      </div>
    </div>
  </div>
</div>`;
  displayVoteCounts(votesCount);
}

async function getSubmissionAndVotes(data) {
  const modalElement = document
    .getElementById("mainModal")
    .querySelector(".modal-content");
  modalElement.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span></div>`;

  const submissionId = data.id;
  // const imgSrc = data.getAttribute("value");
  // console.log(imgSrc);
  try {
    const [getSubmission, getVotesCount, getVoteList] = await Promise.all([
      sumsiDefaultInstance.get(`/submissions/${submissionId}`),
      sumsiDefaultInstance.get(`/submissions/${submissionId}/votes/count`),
      sumsiDefaultInstance.get(`/submissions/${submissionId}/votings`),
    ]);
    
    const submissionData = getSubmission.data.data;
    const submissionVote = getVotesCount.data.data;
    const submissionVoteList = getVoteList.data.data;
    const values = {
      submissionData,
      submissionVote,
      imgSrc,
      submissionVoteList,
      modalElement,
    };

    displayModal(values);
    // console.log(getSubmission.data.data);
    // console.log(getVotesCount.data.data);
  } catch (error) {
    console.log(error);
  }
}

async function submitVotes() {
  const formEmail = document.getElementById("vote-input");
  const emailValue = formEmail.value;
  console.log(emailValue);
  const id = formEmail.getAttribute("data-id");
  console.log(id);

  var body = new FormData();
  body.append("email", emailValue);
  console.log(body);
  try {
    sessionStorage.setItem("email", emailValue);
    const response = await sumsiDefaultInstance.post(
      `submissions/${id}/votings`,
      body
    );
    console.log(response.data);
    console.log(response.data.status);
    const formEmail = document.querySelector(".vote-email");
    const likeButton = document.querySelector(".like-button");
    const homeLikeCount = document
      .getElementById(`${id}`)
      .querySelector("div.home-like-count");
    if (response.data.status == "success") {
      formEmail.style.visibility = "hidden";
      // likeButton.setAttribute("disabled", "true");
      likeButton.classList.replace("btn-outline-secondary", "btn-danger");
      likeButton.setAttribute("disabled", "true");
      likeButton.insertAdjacentHTML(
        "afterend",
        '<span class="like-badge position-absolute top-0 start-100 translate-middle p-1 bg-light rounded-circle">+1</span>'
      );
      const newVoteGet = await sumsiDefaultInstance.get(
        `/submissions/${id}/votes/count`
      );
      const votesCount = newVoteGet.data.data.votes;
      console.log(votesCount);
      displayVoteCounts(votesCount);

      homeLikeCount.innerHTML = `<i class="text-danger fas fa-heart"></i>
      <span class="fs-6 text-muted">${votesCount}</span>`;
    } else {
      document.querySelector(".vote-error-message").innerHTML =
        response.data.message;
      likeButton.setAttribute("disabled", "true");
    }
  } catch (error) {
    console.log(error);
  }
}

async function submitNewDrawings() {
  const formModal = document.getElementById("mainModal")
  const modalBody = formModal.querySelector(".modal-content")

  const newSubmissionForm = document.querySelector(
    'form[name="newSubmissionForm"]'
  );
  const parentFirstname = newSubmissionForm.querySelector(
    'input[name="parentFirstname"]'
  ).value;
  const parentLastname = newSubmissionForm.querySelector(
    'input[name="parentLastname"]'
  ).value;
  const childFirstname = newSubmissionForm.querySelector(
    'input[name="childFirstname"]'
  ).value;
  const email = newSubmissionForm.querySelector('input[name="email"]').value;
  const getChildAge = document.getElementById('childAgeSelect');
  const childAge = getChildAge.options[getChildAge.selectedIndex]
  const imageSrc = newSubmissionForm?.querySelector('input[name="image"]')
    ?.files[0];
  if (imageSrc) {
    image = imageSrc;
  } else {
    image = "";
  }
  console.log(image);
  const acceptParticipation = newSubmissionForm.querySelector(
    'input[name="acceptParticipation"]'
  ).checked
    ? 1
    : 0;
  const acceptPrivacy = newSubmissionForm.querySelector(
    'input[name="acceptPrivacy"]'
  ).checked
    ? 1
    : 0;
  const acceptNewsletter = newSubmissionForm.querySelector(
    'input[name="acceptNewsletter"]'
  ).checked
    ? 1
    : 0; 

  console.log(newSubmissionForm);
  console.log(parentFirstname);
  console.log(parentLastname);
  console.log(childFirstname);
  console.log(childAge);
  console.log(image);
  console.log(acceptParticipation);
  console.log(acceptPrivacy);
  console.log(acceptNewsletter);

  const body = new FormData();
  body.append("legalguardian_firstname", parentFirstname);
  body.append("legalguardian_lastname", parentLastname);
  body.append("email", email);
  body.append("child_firstname", childFirstname);
  body.append("child_age", childAge);
  body.append("approval_privacypolicy", acceptPrivacy);
  body.append("approval_participation", acceptParticipation);
  body.append("approval_mailnotification", acceptNewsletter);
  body.append("image", image);

  console.log(body);
  try {
    modalBody.innerHTML =`<div class="modal-header">
  <h5 class="modal-title" id="mainModalLabel">neue Bilder hochladen</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div><div class="modal-body"><div class="text-center"><div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span></div></div></div>`
    const response = await sumsiDefaultInstance.post("/submissions", body);
    console.log(response);
    console.log(response.status);  
    
    if (response.data.status == "success") {
      modalBody.innerHTML=`<div class="modal-header">
      <h5 class="modal-title" id="mainModalLabel">neue Bilder hochladen</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div><div class="modal-body text-center"><div class="modal-image mb-3 g-2 position-relative  align-center">
      <img class="rounded mx-auto d-block" src="/assets/images/check-mark-8-512.jpg" style="max-height: 200px; max-width: 100%";
      aspect-ratio: auto;" max-height="600" class="modal-image img-fluid rounded mx-auto d-block"
        alt="love">
    </div>
    <div cla </div></div><div class="modal-footer">
      <button id="modalClose" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
    </div>`
    }
  } catch (error) {
    console.log(error);
  }
}

// now we are not getting auth token for every page load or refresh
window.onload = async () => {
  if (!sessionStorage["token"]) {
    await getAuthToken();
  } 
  await getPostAndVotingStatus();
  await getSubmissions();
};