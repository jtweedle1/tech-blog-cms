//javascript connected
console.log("Dashboard JS connected");

//accessing inputs and submit button
const postTitle = document.getElementById("blog-title-input");
const postContent = document.getElementById("content-input")
const postPicture = document.getElementById("post-image")
const createPostButton = document.getElementById
("create-post-button");

//converter function to convert image to base-64 format
const convertBase64 = (file) => {
  //if it's successful or if there's an error
  return new Promise((resolve, reject) => {
    //similar to node fs but for JS; will just read through the image file
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    //on load eventListener - particular to file readers
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const submitPost = (data) => {
  axios
    .post("/dashboard", data)
    .then((results) => {
      console.log(results.data);
      //if the results are okay refresh
      document.location.reload();
    })
    .catch((error) => {
      alert(
        "There was a problem with creating the post. Please try again later."
      );
      console.log(error);
    });
};

createPostButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const file = postPicture.files;
  if (file.length === 1) {
    const post_image = await convertBase64(file[0]);
    const data = {
      title: postTitle.value,
      content: postContent.value,
      image: post_image,
      user_id: null
    };
    // console.log(data);
    submitPost(data);
  }
}
);

$(window).scroll(function(){
    $("#div").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
  });

  $(window).scroll(function(){
    $("#divv").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
  });